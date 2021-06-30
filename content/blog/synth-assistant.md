---
path: synth-assistant
date: 2021-05-05T19:00:57.312Z
title: Synth Assistant
description: OK Robot Reboot, ML4PCOMP, Signals Calls and Marches
---

# Project Description

An audio installation incorporating machine learning, physical computing and audio digital signal processing. The project consists of a number of small audio synthesis bots and a voice assistant AI. A user is able to have a conversation with the Voice Assistant that will instruct the main synth-bot to create sounds. The other bots are networked and will generate audio that compliments each other acting as a robotic choir.

# Demos

`video: https://www.youtube.com/watch?v=Gs1Lw5yfhUU`
`video: https://youtu.be/6o0p4uoA4uw`

![synth-assistant](../assets/okrobot/synth-bot2.jpg)
![synth-assistant](../assets/okrobot/synth-bot.jpg)

# How it works

### Voice Assistant and User Interface

The user interacts with the voice assistant through a web site that uses the [p5-speech](https://idmnyu.github.io/p5.js-speech/) Library for both creating the synthesized voice as well as speech recognition of the audio stream. An instruction on the website asks the user to 'ask me what I can do'. When the user speaks to the website a voice answers and a conversation dialog takes place. The voice assistant was created with [Google DialogFlow](https://cloud.google.com/dialogflow/), which incorporates a set of tools for creating chat-bots. DialogFlow allows you to make your assistant listen for intents rather than specific phrases and utilizes natural language processing to register similar phrases that mean the same thing but may differ in exact wording from the phrases each intent is trained on.

![synth-assistant](../assets/okrobot/diagram-final.png)

Below is a diagram of the flow of conversation:

![synth-assistant](../assets/okrobot/dialog.png)

The website is being served by a simple [express](https://www.npmjs.com/package/express) webserver that is hosted for free on [heroku](https://www.heroku.com/). After the user's speech is converted to text, that text is then sent via web sockets to the webserver and then from the webserver to DialogFlow. Computation takes place in the cloud to determine how the chatbot should respond and that response is then sent back to the webserver and back to the website where the response is converted from text to speech.

The conversation relates to getting the audio-bots to play sounds and ends when two requirements are met.

1. The user has asked for one of the following waveforms... Sine, Square, Sawtooth, Triangle
2. The user has specified a frequency (pitch) for the waveform.

Once these conditions are met a javascript object is created on the webserver that holds the frequency and waveform values.

### Audio bots

For the ITP Show I had 1 Main Audio Bot & 3 secondary Audio Bots that reacted sonically to the Main bot often harmonizing or adding textural accompaniment.

I used ESP32 micro controllers for each of the bots. I chose these boards for two reasons. The WiFi capabilities but most importantly the Digital to Analog Converter (DAC) output pins. When connected to a speaker I signal can be generated and with specific functions audio waves can be generated that are typical in audio synthesis. Sine, Square, Sawtooth, Triangle.

One ESP32 device was setup to periodically (every 2 seconds) send a get request to the server to check if any instructions had been initialized on the server. If that was the case this data would be handled via the [Arduino JSON Library](https://arduinojson.org/) and sent via serial to the main synth bot that would play the tone the user asked for. Subsequently this would trigger the secondary bots to play sounds that were derived from the pitch / wave shape arguments. The bots had a set of 8 different presets (that still exhibit a lot of room for randomness!) and from time to time they will switch which preset they are each using as well as update their pitch if any new instructions are registered.

Below are the audio functions I created, a sort of mini synthesis library for ESP32. Note that micro controllers do not run at typical audio sample rates and so the functions for creating the sound waves relates not to sample rate but instead is derived from the [Arduino micros() function](https://www.arduino.cc/reference/en/language/functions/time/micros/).

Audio Functions

```c
float sine(float freq, float volume)
{
  float SI = freq * 2 * PI / SR;
  p = fmod(micros() * SI, 2 * PI);
  out = (sin(p) * volume + 1) / 2;
  return out;
}

float saw(float freq, float volume)
{
  float SI = freq * 2 * PI / SR;
  p = fmod(micros() * SI, 2 * PI);
  out = ((p / PI - 1) * volume + 1) / 2;
  return out;
}

float tri(float freq, float volume)
{
  float SI = freq * 2 * PI / SR;
  p = fmod(micros() * SI, 2 * PI);
  float sig = (p / PI < 1 ? p / PI * 2 : 2 - (p / PI - 1) * 2) - 1;
  out = (sig * volume + 1) / 2;
  return out;
}

float square(float freq, float volume)
{
  float SI = freq * 2 * PI / SR;
  p = fmod(micros() * SI, 2 * PI);
  float sig = (p / PI > 1 ? 2 : 0) - 1;
  out = (sig * volume + 1) / 2;
  return out;
}
```

All of these audio functions take a frequency and volume as input and output the new signal. This allowed for modularity, as for example, a sine wave could take another audio signal e.g. a sawtooth wave as the input for its frequency [(frequency modulation)](https://en.wikipedia.org/wiki/Frequency_modulation), or its volume [(amplitude modulation)](https://en.wikipedia.org/wiki/Amplitude_modulation).

That might look something like this:

```c
float output = square(sine(10, 1), tri(1, 1));

int out = output * level;

dac_output_voltage(DAC_CHANNEL_1, out);
```

but could go further to create even more complex sounds:

```c
float output = square(sine(square(4, 1), sine(1, 1)), tri(1, saw(10, sine(4, 1))));

int out = output * level;

dac_output_voltage(DAC_CHANNEL_1, out);
```

Unfortunately the sounds tend to lose their clarity when the function gets too complex probably due to the nature of working with micros() rather than exact audio samples. Still the sounds I found to be interesting.

Each audio bot uses a [audio amplifier](https://components101.com/modules/pam8403-stereo-audio-amplifier-module) and 3W speaker. They can be powered by battery and so because they connect to each other via WiFi mesh network this means that they could (for an in-person installation) be positioned all around a space creating potentially interesting spatial audio qualities.

[Synth-bot Code](https://github.com/davidalexandercurrie/synth-bot)
[Synth-Assistant Code](https://github.com/davidalexandercurrie/synth-assistant)

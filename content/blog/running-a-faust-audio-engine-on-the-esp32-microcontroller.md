---
path: faust-esp32
date: 2020-10-21T02:51:07.727Z
title: Audio engine on the esp32
description: Faust running on the esp32 audio development board.
---
### Goal

To compile audio DSP Faust code and run in on my ESP32 Audio Dev Board.

### Motivation

Faust is a powerful audio synthesis library that is capable of running on many different platforms. Microcontrollers and audio synthesis is something I have been interested in for a while. Being able to compile Faust code on the ESP32 opens up many possibilities, ESP32 is more powerful than many other boards, allows wireless connectivity and has digital to analog converter pins. Faust is also much simpler to program than other libraries such as [Mozzi](https://sensorium.github.io/Mozzi/) and in my opinion the [Teensy Audio Library](https://www.pjrc.com/teensy/td_libs_Audio.html).

Below are a list of resources I used to learn about Faust and the implementation on ESP32.

* [Faust Library](https://github.com/grame-cncm/faust)
* [Kadenze Class: Real Time Audio Signal Processing In Faust](https://www.kadenze.com/courses/real-time-audio-signal-processing-in-faust/info)
* [Research Paper: A Faust architecture for the ESP32 microcontroller](https://zenodo.org/record/3898692)
* [Board: esp32 audio development kit](https://www.hackster.io/news/seeed-drops-new-esp32-audio-development-kit-for-audio-related-iot-projects-ad38d1f02637)
* [Tutorial: Faust -> esp32](https://faust.grame.fr/doc/tutorials/index.html#dsp-on-the-esp32-with-faust)
* [Tutorial: Setting up ESP IDF/ADF in VS Code](https://www.youtube.com/watch?v=Zw0cMsIP45g)
* [Audio Codec Repo: AC101](https://github.com/Yveaux/AC101)
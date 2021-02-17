---
path: elon-oblivion
date: 2021-02-17T18:59:17.376Z
title: Elon Oblivion
description: OK Robot Reboot Week 2
---

`video: https://youtu.be/Jx5slkcBc8I`
This week we were asked to create an application that can be run from the command line and that uses text-to-speech functionality.

Inspired by Valentine's Day, classical [counterpoint](https://en.wikipedia.org/wiki/Counterpoint), and tech-celebrity romance, my project juxtaposes Elon Musk's tweets via synthesized audio with music by his partner in life/crime, Grimes. The result is a playful composition reminiscent of glitch poetics.

# Technical Overview

GitHub Repo: https://github.com/davidalexandercurrie/elon-oblivion

### Basic Flow of The Application

`node server.js`

1. Call to Twitter's API
2. Request data (the most recent 40 tweets by Elon Musk)
3. Twitter returns the data
4. Package the data into a single string
5. Send the string to AWS Polly to request an .mp3 file of the synthesized voice
6. Send a request to AWS Polly for metadata (returned as JSON) that correlates to the start and end times (duration) of the speech
7. The JSON data is saved into 2 .txt files; one file contains the timecodes of the speech in milliseconds, the other contains the text

`ffmpeg -loglevel quiet -i elon.mp3 -y elon.wav`

8. The .mp3 file is converted to a .wav file

`chuck --dac6 patch.ck`

9. Run a script in [ChucK](https://chuck.cs.princeton.edu/) (audio programming language) that imports the .txt files and converts their content into arrays
10. Create a generative musical composition combining the synthesized voice and an audio recording of Grimes - Oblivion

---
path: physical-computing-week-3
date: 2020-09-25T12:08:15.405Z
title: Audio Experiments with distance sensor & accelerometer
description: Physical Computing Week 3
---
## Proposal for assignment 1: A musical instrument combining accelerometer, gyroscope, and ultrasonic distance sensor.

Note: we are using the built-in accelerometer and gyroscope.

Library: <https://github.com/arduino-libraries/Arduino_LSM6DS3>

![Schematic of distance sensor and speaker](../assets/project-1.png "Project 1 Schematic")

Audio mapping
```c
int melody[] = {
  NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, 0, NOTE_B3, NOTE_C4
};
// mapping tones to data from distance & accelerometer
note1 = (xAcc + 1) * melody[0];
tone(4, abs(note1));
delay(distance / 2);
note2 = (yAcc + 1) * melody[1];
tone(4, abs(note2));
delay(distance / 2);
}
```
Full code here: <https://create.arduino.cc/editor/jenny_yw/606b2c7e-aa45-44f3-b2ae-ef0d47d65572/preview>

`youtube: gjYilf5iATc`

`youtube: LrzWrm2YviI`

Other possible inclusions: 

1. Sound synthesis with Mozzi library <https://sensorium.github.io/Mozzi/>
2. Use Max or another tool to handle audio <https://cycling74.com/products/max/>
3. Use Wekinator to control mappings <http://www.wekinator.org/>
4. Add an Amplifier to the circuit for more volume <https://components101.com/modules/pam8403-stereo-audio-amplifier-module>
---
path: pcomp-week1
date: 2020-09-10T14:20:24.132Z
title: Skull Switch
description: Physical Computing Week 1
---
I did not have a DC Jack component when I worked on this lab and so I powered my circuit from my Arduino Uno instead. This could have been achieved by either taking power from the 5V output or the Vin output (which outputs at the same voltage as the DC power outlet that is plugged into the Arduino Uno - in my case 12V). I used the Vin Output so that I could include the voltage regulator into my circuit (voltage regulator wouldn't be required if I had just used the 5V output.

![wiring in the voltage regulator](../assets/img_8546.jpeg "voltage regulator wiring")

Here is the completed circuit powered from the Arduino.

![LED circuit](../assets/img_8543.jpeg "LED circuit")

And here you can see the pins connected to the Arduino Uno.

![power pins from arduino uno](../assets/img_8544.jpeg "power pins from arduino uno")

For the custom switch I used a skull Viola He and I found on the floor. A simple way to create the switch was to glue materials to the jaw and bottom of the ear of the skull. I used a piece of metal on the ear and some tin foil wrapped around the jaw. I tried to solder the wires on to the conductors and it was a bit fiddly so in the end I just taped the wires on.

![gluing the switch to the back of the skull](../assets/img_8553.jpeg "gluing skull switch")

Final result: a skull that turns on an LED when the jaw opens.

![skull switch](../assets/img_8550.jpeg "skull switch")

`video: https://youtu.be/U8n5ybLFNSA`
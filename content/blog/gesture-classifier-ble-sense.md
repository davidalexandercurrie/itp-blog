---
path: gesture-classifier-ble-sense
date: 2021-04-22T22:26:42.754Z
title: Gesture Classifier BLE Sense
description: ML4PCOMP Week 4
---

Here is my video of the gesture to emoji exercise for week 4. The model works reasonably well except the training data could be improved by creating examples with different tilts of the microcontroller. Right now it works best if you keep the micro controller at very specific x-rotation for each gesture while making hand movements.

Some problems I ran into:

1. `error: 'AllOpsResolver' in namespace 'tflite::ops::micro' does not name a type tflite::ops::micro::AllOpsResolver tflOpsResolver;`

This line needed to be changed to tflite::AllOpsResolver tflOpsResolver;

https://github.com/arduino/ArduinoTensorFlowLiteTutorials/issues/16

2. `tensorflow/lite/experimental/micro/kernels/all_ops_resolver.h: No such file or directory`

The library imports needed to be changed to:

```c
#include "tensorflow/lite/micro/all_ops_resolver.h"
#include "tensorflow/lite/micro/micro_error_reporter.h"
#include "tensorflow/lite/micro/micro_interpreter.h"
#include "tensorflow/lite/schema/schema_generated.h"
#include "tensorflow/lite/version.h"
```

https://github.com/arduino/ArduinoTensorFlowLiteTutorials/issues/15

`video: https://youtu.be/mLZ_DBoVcKE`

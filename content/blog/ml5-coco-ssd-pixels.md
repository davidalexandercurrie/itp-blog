---
path: icm-assignment-1
date: 2020-11-05T17:05:17.100Z
title: ML5, Coco-SSD Pixels
description: ICM Assignment 1
---

[Our Project on GitHub](https://github.com/yonaymoris/icm-pixels)

[Sketch](http://yonaymoris.github.io/icm-pixels)

Our project uses the ML5 Coco-SSD object detection model to provide labels with bounding boxes for objects that are displayed in the web cam. Below are links to the resources we used to make this project.

[Coding train video on Coco-SSD](https://www.youtube.com/watch?v=QEzRxnuaZCk)

[ML5 Object Detector Docs](https://learn.ml5js.org/#/reference/object-detector)

[ML5 Coco-SSD Basic Example](https://examples.ml5js.org/p5js/objectdetector/objectdetector_cocossd_video/)

[TensorFlow Coco-SSD Repo](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)

The sketch works by creating a pixelated version of any object that is detected by the model. The pixelated version is a distorted representation of the original pixels but keeps the same colour palette. We managed this by taking the colour of a single pixel at 15px intervals and expanding this to fill a 15\*15 rectangle.

```js
function pixelStuff(x, y, w, h, n) {
  for (let i = x; i < x + w; i += 15) {
    for (let j = y; j < y + h; j += 15) {
      let index = (i + j * w) * 4
      fill(
        video.pixels[index],
        video.pixels[index + 1],
        video.pixels[index + 2],
        video.pixels[index + 3]
      )
      noStroke()
      rect(i, j, 15, 15)
    }
  }
}
```

Below are videos showing use of the sketch. The sketch plays with ideas of sensorship. Right now it will create the pixelated effect over an object detected by ML5. It will be interesting to follow how these models become more powerful in the future in terms of responsiveness and accuracy. I would like to try something like this with a model that can return sketch outlines rather than bounding boxes e.g. [Densepose](http://densepose.org/) which is able to be run through [RunwayML](https://runwayml.com/)

`video: https://youtu.be/nZDkspwtAzE`

`video: https://youtu.be/PHOVjgqyeBk`

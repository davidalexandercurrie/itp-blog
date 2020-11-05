---
path: icm-assignment-1
date: 2020-11-05T17:05:17.100Z
title: ML5, Coco-SSD Pixels
description: ICM Assignment 1
---
[GitHub](https://github.com/yonaymoris/icm-pixels)

`video: https://youtu.be/nZDkspwtAzE`

`video: https://youtu.be/PHOVjgqyeBk`

```js
function pixelStuff(x, y, w, h, n) {
  for (let i = x; i < x + w; i += 15) {
    for (let j = y; j < y + h; j += 15) {
      let index = (i + j * w) * 4;
      fill(
        video.pixels[index],
        video.pixels[index + 1],
        video.pixels[index + 2],
        video.pixels[index + 3]
      );
      noStroke();
      rect(i, j, 15, 15);
    }
  }
}
```
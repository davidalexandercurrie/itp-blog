---
path: teachable-machine-colors
date: 2021-04-08T22:15:08.482Z
title: "Teachable Machine: Sound x Color"
description: ML4PCOMP Teachable Machine
---

This project uses Teachable Machine to train an audio classifier to recognise the sound of my voice saying different colors. I trained the model to identify the following colors (white, red, yellow, blue, and green) with 20 voice samples per color. The model is run on ml5 and sends the result of the classification process (via Serial) to an Arduino, which prints the color on a ST7789 display.

`video: https://youtu.be/P7cCbre5_dY`

p5 code:

```js
const mySoundModelURL =
  "https://teachablemachine.withgoogle.com/models/aT-fLciJP/"
let mySoundModel
let resultDiv
let serial // variable to hold an instance of the serialport library
let portName = "/dev/tty.usbmodem14201" // fill in your serial port name here
let outByte = 0 // for outgoing data

function preload() {
  mySoundModel = ml5.soundClassifier(mySoundModelURL + "model.json")
}

function setup() {
  resultDiv = createElement("h1", "...")
  serial = new p5.SerialPort() // make a new instance of the serialport library
  serial.on("error", serialError) // callback for errors
  serial.open(portName) // open a serial port
  mySoundModel.classify(gotResults)
}

function serialError(err) {
  console.log("Something went wrong with the serial port. " + err)
}

function gotResults(err, results) {
  if (err) console.log(err)
  if (results) {
    console.log(results)
    if (results[0].confidence < 0.7) return
    resultDiv.html("Result is: " + results[0].label)
    if (results[0].label === "white") {
      outByte = 0
    } else if (results[0].label === "red") {
      outByte = 1
    } else if (results[0].label === "yellow") {
      outByte = 2
    } else if (results[0].label === "green") {
      outByte = 3
    } else if (results[0].label === "blue") {
      outByte = 4
    }
    // send it out the serial port:
    console.log("outByte: ", outByte)
    serial.write(outByte)
  }
}
```

Arduino Code:

```c
int color = 0;

#include <SPI.h>

// ST7789 (Display) Libraries
#include <Adafruit_GFX.h>
#include <Arduino_ST7789.h>

#define TFT_DC    8
#define TFT_RST   9
#define TFT_MOSI  11
#define TFT_SCLK  13

Arduino_ST7789 tft = Arduino_ST7789(TFT_DC, TFT_RST);

void setup() {

  tft.init(240, 240);
  tft.fillScreen(BLACK);
  Serial.print("Screen!");
  delay(1000);
}

void loop() {

  if (Serial.available() > 0) { // if there's serial data available
    color = Serial.read();   // read it
    delay(200);                // waits
  }

  if (color == 0) {
    tft.fillScreen(WHITE);
    Serial.print("0 = White");
  } else if (color == 1) {
    tft.fillScreen(RED);
    Serial.print("1 = Red");
  } else if (color == 2) {
    tft.fillScreen(YELLOW);
    Serial.print("2 = Yellow");
  } else if (color == 3) {
    tft.fillScreen(GREEN);
    Serial.print("3 = Green");
  } else if (color == 4) {
    tft.fillScreen(BLUE);
    Serial.print("4 = Blue");
  }
}
```

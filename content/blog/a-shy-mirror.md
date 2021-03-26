---
path: ok-robot-midterm
date: 2021-03-17T17:34:03.021Z
title: A Shy Mirror
description: OK Robot Reboot Midterm
---
This midterm project was a collaboration between myself, Kevin He and Nick Boss.

![shy-mirror](../assets/shy-mirror/shy-mirror.jpeg "shy-mirror")
# **Project Overview**

We transformed an inanimate object into a robot by equipping it with automative properties and personality traits that humans can easily identify with or relate to. We decided to go with the idea of converting an ordinary everyday accessory, a mirror, into a shy acquaintance that over time forms a relationship with its user.

## Interactions

We thought about the ways that shyness is expressed amongst humans, and what sensorial (physical, verbal, and visual) cues might prompt one to notice when someone is being shy. 

The mirror portrays shyness through subtle interactions such as slowly moves away when it is being looked at by the user. Naturally, the user might be surprised by the mirror's movement, and attempt to look closer. If the user tries to look at the mirror again, it looks away again.

The only way to befriend the mirror is 1) to stand in front of it for a longer period of time or 2) say its name. If the user speaks the name of the mirror, it will briefly look at the user and give it a relationship score — a value recorded on the Arduino that increases based on these two factors. If the score increases and reaches a tipping point, the mirror will stop being shy and  instead track the user's face.

# **Technical Overview**

The project consisted of two input methods: voice (computer microphone) and camera (ESP32CAM and a laptop camera). We initially used the ESP32CAM as the camera and hosted a web server on it that streamed video to a url. Then we accessed the url on a laptop and used the OBS virtual camera to feed the streamed footage as a camera input into a p5/ ml5 sketch. We chose the ESP32CAM because it is small, and we could attach it to the bottom of the mirror. Unfortunately, the ESP32CAM was not up to the task. The video feed was working with ml5 but the board would overheat and disconnect frequently whenever it moved with the mirror. Ultimately, we built another version that used a laptop camera.

We recorded data within the p5/ ml5 sketch. The sketch would run the camera feed through PoseNet to obtain the position of the user’s face. We also used the p5-speech library to allow the robot to listen for its name being spoken. This data was passed to an Arduino controlling two servos that would allow the camera to tilt on two axes. As mentioned, a relationship score would be calculated that would cause the mirror to either shy away from the user or track the user's face.

[P5/ML5 Sketch](https://github.com/davidalexandercurrie/shy-mirro/blob/main/sketch.js)

![shy-mirror](../assets/shy-mirror/shy_mirror1.jpeg "shy-mirror")

![shy-mirror](../assets/shy-mirror/shy_mirror2.jpeg "shy-mirror")

![shy-mirror](../assets/shy-mirror/shy_mirror3.jpeg "shy-mirror")

![shy-mirror](../assets/shy-mirror/shy_mirror4.jpeg "shy-mirror")



`video: https://youtu.be/YaeoSl4Rl_M`

`video: https://youtu.be/FISSzuq9g8M`

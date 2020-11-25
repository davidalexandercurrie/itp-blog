---
path: animation-project-2
date: 2020-11-25T17:14:55.633Z
title: After Effects
description: Animation Project 2
---

# The mechanical assembly of the underclass leaf eater and the spiritual consequence on the classist hot dog overlords.

For animation assignment 2 I worked with Dunca Figurski. The assignment brief was to create a 1-3 minute animation using after effects.

Our original storyboard can be seen [here](https://david-currie-itp.netlify.app/blog/storyboard/)

`video: https://www.youtube.com/watch?v=isRiH9iqHzw`

Our process was to animate our own scenes separately and then edit them together. This allowed us to both have a good go at all the different components of animating in After Effects (i.e. creating assets in illustrator, animating in After Effects, sound/music composition etc).

I created the opening sequence where the leaf-eater character is brought into existence on an assembly line in a factory. The factory workers are all robots that are performing a dance ritual. The leaf-eater is then merged together with one of the robots while having visions of the business-hotdog.

### Some of the different componets I created were:

Smoke effect

- This was created using a random noise texture effect in After Effects

Shapes/Blur effects

- I used some blur/glow effects to accentuate moments throughout the sequence

Dancing arms/wiggling of the robots

- I used an expression with the noise function to control rotation of the arms of the robots making them seem like they are dancing

```js
noise(time) * 360
```

- I used the wiggle function to manipulate the scale & rotation of the robots' bodies to make them seem more alive.

```js
wiggle(5, 10), wiggle(5, 10)
```

Transitions & other animations

- Standard keyframe animations were applied to opacity and other transform properties to have different elements fade in.

  2.5d

- For the scenes that incorporate 3d aspects I created a camera and converted my assets to 3d objects. I then set them up in 3d space and used camera movement to create animation. In shot 2 where the conveyor belt moves from right to left I moved the textured image but used a camera that was positioned above & looking down to make the conveyor belt seem 3d. This way, the texture at the bottom of the screen moves right to left faster.

Musical Score

- I wanted the score to enhance the robot dance and also seem somewhat maniacal. I used a lot of industrial techno placeholder music while making the animation and that ended up influencing the visual style a lot and so I created something along those lines.

Really enjoyed working on this project.

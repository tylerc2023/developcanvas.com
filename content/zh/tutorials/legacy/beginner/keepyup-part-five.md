---
title: Making a Simple Game - Part 5
template: tutorial-page-legacy.tmpl.html
position: 14
---

<iframe src="http://playcanv.as/p/1gDqCWa8"></iframe>

*You can find the [full project here][9]. If you haven't see [Part 1][1], [Part 2][2], [Part 3][3] and [Part 4][4] read them first.*

## Audio & Particles

### Audio

Audio is a critical part of your game. It will provide valuable feedback to the player that their inputs are having and effect, plus it can create mood and atmosphere.

The Keepy Up game has 3 audio effects: A background music track, a tap sound when you hit the ball and the sad trombone sting when you lose. Each of them is handled slightly differently.

#### Music & Sting

The music and sting are handle in a similar way. The main difference is that the music is set to loop. The `game.js` we have a script attribute which links the game script to the Entity with our sound component and we simply play and stop the correct slot.

```javascript
this.audio.sound.stop(); // stop current sound playing
this.audio.sound.play("gameover") // play the 'gameover' slot
```

#### Ball tap

The ball tap sound is attached directly to the ball Entity. It's a short, non-looping sound. So we play it every time the a tap hits the ball.

```javascript
this.entity.sound.play("bounce");
```

### Particles

![Particles][7]

We have one particle effect in Keepy Up. It's a dust cloud that is triggered whenever the ball is tapped. The dust cloud is a non-looping effect and it needs to be positioned and rotated so that the cloud moves away from the ball when it runs.

```javascript
this.impactEffect.setLocalPosition(tmp);
this.impactEffect.particlesystem.reset();
this.impactEffect.particlesystem.play();
this.impactEffect.lookAt(this.entity.getPosition());
```

In this code we restart the one shot particle effect by calling `reset()` and `play()` and we position and rotate it so that it points towards the center of the ball.

![Curves][8]

Using the Local Velocity graph in the Particle Effect editor, the particle effect is set up to fire away from the direction it is facing i.e. the particles move along the positive z axis.

Continue on to [Part 6][6].

[1]: /tutorials/beginner/keepyup-part-one
[2]: /tutorials/beginner/keepyup-part-two
[3]: /tutorials/beginner/keepyup-part-three
[4]: /tutorials/beginner/keepyup-part-four
[6]: /tutorials/beginner/keepyup-part-six
[7]: /images/tutorials/beginner/keepyup-part-five/particle-bounce.gif
[8]: /images/tutorials/beginner/keepyup-part-five/particle-velocity-curves.jpg
[9]: https://playcanvas.com/project/362703/overview/sample-game-keepy-up


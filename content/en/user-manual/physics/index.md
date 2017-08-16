---
title: Physics
template: usermanual-page.tmpl.html
position: 10
---

PlayCanvas incorporates a physics engine. The physics engine can realistically control the motion of objects in your scene. If you think about it, a great many games rely on some form of physical simulation to enable gameplay. For example, consider the classic game Asteroids: the ship accelerates as its rockets fire, it has inertia, and asteroids will destroy it when they come into contact. Solving a simple case such as this is reasonably straighforward for a seasoned programmer, but a physics engine makes it a breeze for anybody.

## Rigid Bodies

More specifically, PlayCanvas exposes a rigid body physics engine. In other words, the engine simulates rigid bodies, where a rigid body is an idealised representation of an object that never deforms in any way. This approximation is sufficient to simulate most solid real world objects. Rigid bodies have a number of properties that influence how they move:

* Mass
* Restitution
* Friction
* Angular Factor
* Linear Factor

At any time, you can query (or even directly set) a body's velocity which takes two forms:

* Linear Velocity
* Angular Velocity

## Units of Measurement

By default, the PlayCanvas physics engine interprets 1 unit as 1 meter. Therefore, for objects to fall at a rate that appears to be physically accurate, you should ensure that your scenes size objects appropriately.

For example, if your game features a character that is 1.8m tall, he should be 1.8 units high in the Editor's 3D view.

## Gravity

Gravity is a constant force applied to all rigid bodies in your scene. By default, this is set to -9.81 in the world's negative Y axis (straight down, in other words). This default approximates Earth gravity. But you may want to increase or decrease this value. For example, for a game set in space, you will probably want to set gravity to zero. To edit the gravity applied to your scene, open the Scene Settings panel.

## Moving Rigid Bodies with Forces

Bodies move in response to forces and impulses. A force is applied to a body over a period of time whereas an impulse is a force that is applied in an instant. Let's consider a couple of examples. If you want to push a heavy weight across the floor, you would apply a force over an amount of time:

~~~javascript~~~
    update: function (dt) {
        // While the right arrow key is pressed, apply a force to the right
        if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
            this.entity.rigidbody.applyForce(10, 0, 0);
        }
    }
~~~

If you want to fire a cannonball from a cannon, you would apply a single impulse:

~~~javascript~~~
    update: function (dt) {
        // If the space bar was pressed, apply an impulse up and to the right
        if (app.keyboard.wasPressed(pc.KEY_SPACE)) {
            this.entity.rigidbody.applyImpulse(10, 10, 0);
        }
    }
~~~

## Teleporting Rigid Bodies

By adding rigid body and collision components to an entity, you pass the responsibility for setting the position and orientation of that entity to the physics engine. This means that if you try to update the position or orientation of an entity in a script using the pc.Entity API, the functions will not have an effect. Instead, you must call the teleport function on the rigid body component which explicitly notifies the physics engine you want to momentarily update a rigid bodies position and/or orientation.
---
title: More Cameras
template: tutorial-page.tmpl.html
position: 3
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/more_cameras?overlay=false" ></iframe>

*Click to focus, then press `space` to zoom in and out, press `left arrow` and `right arrow` to switch to the left and right cameras*

The [Basic Cameras][basic_cameras] tutorial walks you through creating a camera Entity and adding it to your Pack. For a single static camera, no scripting is required. But for a more dynamic and interactive camera or for more advanced usage you might want to attach a script Component and program the camera behaviour yourself.

## Altering Attributes

The first way you might want to modify a camera at runtime, is to change the values of attributes on camera Component. You do this the same way that you set attributes on any other Component, by using the `set()` and `get()`
methods on the ComponentSystem.

~~~javascript~~~
CameraScript.prototype.update = function (dt) {
    // Press the space bar to change the field of view and zoom in and out on the central cube
    var camera;
    var fov = this.entity.camera.fov;
    if (context.keyboard.wasPressed(pc.input.KEY_SPACE) ) {
        // Make sure the right camera is selected
        camera = context.root.findOne("Zoom camera");
        context.systems.camera.current = camera;

        if (this.targetFov == 10) {
            this.targetFov = 45;
        } else {
            this.targetFov = 10;
        }
    }

    if(fov < this.targetFov) {
        fov += (10 * dt);
        if (fov > this.targetFov) {
            fov = this.targetFov;
        }
    }

    if(fov > this.targetFov) {
        fov -= (10 * dt);
        if (fov < this.targetFov) {
            fov = this.targetFov;
        }
    }
    this.entity.camera.fov = fov;

    // more ...
};
~~~

In this sample pressing the spacebar triggers a change in field of view. On the fourth line we `get()` the value of `fov` from the entity that this script is attached to.

In the middle we detect the keypress and update the value of the `fov`.

On the last line we `set()` the `fov` attribute to the new value.

Notice that when you are zoomed out the top and bottom cubes are at the edges of the screen, this matches our expectation from the PlayCanvas Designer where the cubes sit next to the
top and bottom sides of the [frustum][frustum]

## Current Camera

Another way you might want to create interactivity with cameras is by switching between multiple cameras. You can achieve this by adding several camera Entities to your pack; ensure that only one is activated; and then alter which is the current camera at runtime in your script.

~~~javascript~~~
CameraScript.prototype.update = function (dt) {
    // more ...

    // Press the arrow keys to switch between the four corner cameras
    var cameras = {};
    cameras[pc.input.KEY_LEFT] = "Camera one";
    cameras[pc.input.KEY_RIGHT] = "Camera two";

    if (context.keyboard.wasPressed(pc.input.KEY_LEFT)) {
        camera = context.root.findOne(cameras[pc.input.KEY_LEFT]);
        context.systems.camera.current = camera;
    }

    if (context.keyboard.wasPressed(pc.input.KEY_RIGHT)) {
        camera = context.root.findOne(cameras[pc.input.KEY_RIGHT]);
        context.systems.camera.current = camera;
    }
};
~~~

In this sample, pressing the arrow keys sets the current camera to be one of four camera Entities that are in the currently loaded Pack.

First we set up an object containing the names of the four camera Entities that correspond to the four arrow keys.

Next we loop through the arrow keys and if one was pressed then we find the entity by it's name, and we set it to be the current camera using the `setCurrent()` method on the Camera ComponentSystem.

[basic_cameras]: /tutorials/basic/basic-camera
[frustum]: https://en.wikipedia.org/wiki/Frustum

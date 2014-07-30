---
title: Basic Mouse Input
template: tutorial-page.tmpl.html
position: 2
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/input_mouse?overlay=false"></iframe>

*Move the mouse to move the cube around, press the mouse buttons to change the color of the cube*

Mouse handling in the PlayCanvas engine is provided by the `pc.input.Mouse` object. The Mouse object provides a simple interface for detecting when the
mouse is moved or when mouse buttons are pressed. It also removes some of the cross-browser inconsistancies with handling mouse co-ordinates.

Take a look at the input_mouse Pack in the [tutorials project][project]. Here is the code from mouse.js:

~~~javascript~~~
pc.script.create("mouse", function (context) {
    var MouseHandler = function (entity) {
        this.entity = entity;
        this.pos = new pc.Vec3();

        // Disabling the context menu stops the browser displaying a menu when
        // you right-click the page
        context.mouse.disableContextMenu();

        // Use the on() method to attach event handlers.
        // The mouse object supports events on move, button down and
        // up, and scroll wheel.
        context.mouse.on(pc.input.EVENT_MOUSEMOVE, this.onMouseMove, this);
        context.mouse.on(pc.input.EVENT_MOUSEDOWN, this.onMouseDown, this);
    };

    MouseHandler.prototype = {
        initialize: function () {
            this.redMaterial = context.assets.getAssetByName('Red', pc.asset.ASSET_MATERIAL);
            this.greenMaterial = context.assets.getAssetByName('Green', pc.asset.ASSET_MATERIAL);
            this.blueMaterial = context.assets.getAssetByName('Blue', pc.asset.ASSET_MATERIAL);
        },

        onMouseMove: function (event) {
            // Get the current camera Entity
            var cameraEntity = context.systems.camera.current

            // Use the camera component's screenToWorld function to convert the
            // position of the mouse into a position in 3D space
            var depth = 10;
            cameraEntity.camera.screenToWorld(event.x, event.y, depth, this.pos);

            // Finally update the cube's world-space position
            this.entity.setPosition(this.pos);
        },

        onMouseDown: function (event) {
            // If the left mouse button is pressed, change the cube color to red
            if (event.button === pc.input.MOUSEBUTTON_LEFT) {
                this.entity.model.materialAsset = this.redMaterial;
            }

            // If the left mouse button is pressed, change the cube color to green
            if (event.button === pc.input.MOUSEBUTTON_MIDDLE) {
                this.entity.model.materialAsset = this.greenMaterial;
            }

            // If the left mouse button is pressed, change the cube color to blue
            if (event.button === pc.input.MOUSEBUTTON_RIGHT) {
                this.entity.model.materialAsset = this.blueMaterial;
            }
        }
    };

    return MouseHandler;
});
~~~

### `pc.input.Mouse`

Mouse control is managed by the `pc.input.Mouse` object. The [framework][framework] provides an instance of this on the [application context][context] which is available
to all script objects as

~~~javascript~~~
context.mouse
~~~

### Disabling the right-click menu
In the constructor for our script object we disable the right-click menu to stop it popping up when we click the right mouse button.

~~~javascript~~~
context.mouse.disableContextMenu();
~~~

### Binding to events

The `pc.input.Mouse` object allows you to listen to different events corresponding to mouse actions, in the tutorial we are binding the method `onMouseMove` to the move event and `onMouseDown`
to the button down event.

Notice we also pass `this` into the on() method for binding to events. This third argument is the object that is used as `this` in the event callback.

~~~javascript~~~
context.mouse.on(pc.input.EVENT_MOUSEMOVE, this.onMouseMove, this);
context.mouse.on(pc.input.EVENT_MOUSEDOWN, this.onMouseDown, this);
~~~

Events available on `pc.input.Mouse` are:

* `pc.input.EVENT_MOUSEUP` - fires when a mouse button is pressed
* `pc.input.EVENT_MOUSEDOWN` - fires when a mouse button is released
* `pc.input.EVENT_MOUSEMOVE` - fires when the mouse is moved
* `pc.input.EVENT_MOUSEWHEEL` - fires when the mouse wheel is rotated.

Mouse input in browsers is usually implemented by listening to [DOM][dom] events on elements in your page's DOM. The problem is that different browsers implement the events slightly
differently and supply different values. In order to simplify the code you write the PlayCanvas engine allows you to bind your event handlers to the PlayCanvas mouse handler instead of
directly the DOM Element. The engine supplies a `pc.input.MouseEvent` object when the event fires which is consistant across all browsers. If you do need the original DOM event it is available
as the `event` property in `pc.input.MouseEvent`.

### Moving the mouse

The first event handler is `onMouseMove`, this is fired whenever the mouse moves. For a `EVENT_MOUSEMOVE` event the `MouseEvent` object will have the current position of the mouse `x`, and `y` and also the change in position since the last event in `dx` and `dy`. In our tutorial we're using the current position of the mouse and moving the cube to the cursor position.

### Mouse buttons

The second event handler is `onMouseDown`, this is fired whenever one of the three mouse buttons is clicked. In the `EVENT_MOUSEDOWN` and `EVENT_MOUSEUP` events the `MouseEvent` object will
have a `button` property which contains the button that has been pressed/released. It can be one of the following values:

* `pc.input.MOUSEBUTTON_NONE`
* `pc.input.MOUSEBUTTON_LEFT`
* `pc.input.MOUSEBUTTON_MIDDLE`
* `pc.input.MOUSEBUTTON_RIGHT`

In our tutorial we're changing the color of the cube depending on which mouse button was pressed.

### Try it out

Try the tutorial in full screen [here][tutorial] or at the top of the page. Move the mouse to move the cube, and click the left, middle and right mouse button to change the color of the cube.

[project]: http://playcanvas.com/playcanvas/tutorials
[framework]: /user-manual/glossary#framework
[context]: /user-manual/glossary#context
[dom]: /user-manual/glossary#dom
[bind]: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
[tutorial]: http://apps.playcanvas.com/playcanvas/tutorials/input_mouse

---
title: Basic Mouse Input
template: tutorial-page-legacy.tmpl.html
position: 2
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/input_mouse?overlay=false"></iframe>

*Move the mouse to move the cube around, press the mouse buttons to change the color of the cube*

Mouse handling in the PlayCanvas engine is provided by the `pc.Mouse` object. The Mouse object provides a simple interface for detecting when the mouse is moved or when mouse buttons are pressed. It also removes some of the cross-browser inconsistancies with handling mouse co-ordinates.

Take a look at the 'Mouse Input' Scene in the [tutorials project][1]. Here is the code from mouse.js:

~~~javascript~~~
pc.script.attribute("materials", "asset", [], {type: "material"});

pc.script.create("mouse", function (app) {
    var MouseHandler = function (entity) {
        this.entity = entity;
        this.pos = new pc.Vec3();

        // Disabling the app menu stops the browser displaying a menu when
        // you right-click the page
        app.mouse.disableContextMenu();

        // Use the on() method to attach event handlers.
        // The mouse object supports events on move, button down and
        // up, and scroll wheel.
        app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
        app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    };

    MouseHandler.prototype = {
        initialize: function () {
            this.redMaterial = app.assets.getAssetByResourceId(this.materials[0]).resource;
            this.greenMaterial = app.assets.getAssetByResourceId(this.materials[1]).resource;
            this.blueMaterial = app.assets.getAssetByResourceId(this.materials[2]).resource;
        },

        onMouseMove: function (event) {
            // Use the camera component's screenToWorld function to convert the
            // position of the mouse into a position in 3D space
            var depth = 10;
            var cameraEntity = app.root.findByName('Camera');
            cameraEntity.camera.screenToWorld(event.x, event.y, depth, this.pos);

            // Finally update the cube's world-space position
            this.entity.setPosition(this.pos);
        },

        onMouseDown: function (event) {
            // If the left mouse button is pressed, change the cube color to red
            if (event.button === pc.MOUSEBUTTON_LEFT) {
                this.entity.model.model.meshInstances[0].material = this.redMaterial;
            }

            // If the left mouse button is pressed, change the cube color to green
            if (event.button === pc.MOUSEBUTTON_MIDDLE) {
                this.entity.model.model.meshInstances[0].material = this.greenMaterial;
            }

            // If the left mouse button is pressed, change the cube color to blue
            if (event.button === pc.MOUSEBUTTON_RIGHT) {
                this.entity.model.model.meshInstances[0].material = this.blueMaterial;
            }
        }
    };

    return MouseHandler;
});


~~~

### Accessing the mouse

Mouse control is managed by the `pc.Mouse` object. The [framework][2] provides an instance of this on the [application app][3] which is available to all script objects as:

~~~javascript~~~
app.mouse
~~~

### Disabling the right-click menu

In the constructor for our script object we disable the right-click menu to stop it popping up when we click the right mouse button.

~~~javascript~~~
app.mouse.disableContextMenu();
~~~

### Binding to events

The `pc.Mouse` object allows you to listen to different events corresponding to mouse actions. In the tutorial, we are binding the method `onMouseMove` to the move event and `onMouseDown` to the button down event.

Notice how we also pass `this` into the on() method for binding to events. This third argument is the object that is used as `this` in the event callback.

~~~javascript~~~
app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
~~~

Events available on `pc.Mouse` are:

* `pc.EVENT_MOUSEUP` - fires when a mouse button is released
* `pc.EVENT_MOUSEDOWN` - fires when a mouse button is pressed
* `pc.EVENT_MOUSEMOVE` - fires when the mouse is moved
* `pc.EVENT_MOUSEWHEEL` - fires when the mouse wheel is rotated.

Mouse input in browsers is usually implemented by listening to [DOM][4] events on elements in your page's DOM. The problem is that different browsers implement the events slightly differently and supply different values. In order to simplify the code you write the PlayCanvas engine allows you to bind your event handlers to the PlayCanvas mouse handler instead of directly the DOM Element. The engine supplies a `pc.MouseEvent` object when the event fires which is consistant across all browsers. If you do need the original DOM event, it is available as the `event` property in `pc.MouseEvent`.

### Moving the mouse

The first event handler is `onMouseMove`. This is fired whenever the mouse moves. For an `EVENT_MOUSEMOVE` event, the `MouseEvent` object will have the current position of the mouse `x` and `y` and also the change in position since the last event in `dx` and `dy`. In our tutorial we're using the current position of the mouse and moving the cube to the cursor position.

### Mouse buttons

The second event handler is `onMouseDown`. This is fired whenever one of the three mouse buttons is clicked. In the `EVENT_MOUSEDOWN` and `EVENT_MOUSEUP` events, the `MouseEvent` object will have a `button` property which contains the button that has been pressed/released. It can be one of the following values:

* `pc.MOUSEBUTTON_NONE`
* `pc.MOUSEBUTTON_LEFT`
* `pc.MOUSEBUTTON_MIDDLE`
* `pc.MOUSEBUTTON_RIGHT`

In our tutorial, we're changing the color of the cube depending on which mouse button was pressed.

### Try it out

Try the tutorial in full screen [here][5] or at the top of the page. Move the mouse to move the cube and click the left, middle and right mouse button to change the color of the cube.

[1]: https://playcanvas.com/project/186/overview/tutorials
[2]: /user-manual/glossary#framework
[3]: /user-manual/glossary#app
[4]: /user-manual/glossary#dom
[5]: http://apps.playcanvas.com/playcanvas/tutorials/input_mouse


---
title: First Person Movement
template: tutorial-page.tmpl.html
position: 4
---

<iframe src="http://playcanv.as/p/R0ZMNPBw"></iframe>

This is an application that implements first person character movement.

The scene setup for this controller is important as your character must have a rigidbody and collision component in addition to the script attached. In addition, the script supports adding a camera entity as a child of the Player, if no camera entity is present a new entity is created. See the full scene setup in the [Tutorial Project][1].

The script below performs the following functions:

* Listen for mouse and keyboard input
* Update a camera entity from the mouse input
* Apply forces to move the player entity around the scene

Note, the player's velocity is never set directly but he is moved by apply forces. To limit the maximum velocity, we have linear damping applied on the rigidbody component.

~~~javascript~~~
pc.script.attribute("camera", "entity", null); // optional, assign a camera entity, otherwise one is created
pc.script.attribute("power", "number", 5000);
pc.script.attribute("lookSpeed", "number", 0.5);

pc.script.create('first_person_movement', function (app) {
    var force = new pc.Vec3();

    var First_person_movement = function (entity) {
        this.entity = entity;

        this.camera = null;
        this.eulers = new pc.Vec3();
    };

    First_person_movement.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            // Listen for mouse move events
            app.mouse.on("mousemove", this._onMouseMove, this);

            // when the mouse is clicked hide the cursor
            app.mouse.on("mousedown", function () {
                app.mouse.enablePointerLock();
            }, this);

            // Check for required components
            if (!this.entity.collision) {
                console.error("First Person Movement script needs to have a 'collision' component");
            }

            if (!this.entity.rigidbody || this.entity.rigidbody.type !== pc.BODYTYPE_DYNAMIC) {
                console.error("First Person Movement script needs to have a DYNAMIC 'rigidbody' component");
            }
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            // If a camera isn't assigned from the Editor, create one
            if (!this.camera) {
                this._createCamera();
            }

            // Get camera directions to determine movement directions
            var forward = this.camera.forward;
            var right = this.camera.right;

            // movement
            var x = 0;
            var z = 0;

            // Use W-A-S-D keys to move player
            // Check for key presses
            if (app.keyboard.isPressed(pc.KEY_A) || app.keyboard.isPressed(pc.KEY_Q)) {
                x -= right.x;
                z -= right.z;
            }

            if (app.keyboard.isPressed(pc.KEY_D)) {
                x += right.x;
                z += right.z;
            }

            if (app.keyboard.isPressed(pc.KEY_W)) {
                x += forward.x;
                z += forward.z;
            }

            if (app.keyboard.isPressed(pc.KEY_S)) {
                x -= forward.x;
                z -= forward.z;
            }

            // use direction from keypresses to apply a force to the character
            if (x !== 0 && z !== 0) {
                force.set(x, 0, z).normalize().scale(this.power);
                this.entity.rigidbody.applyForce(force);
            }

            // update camera angle from mouse events
            this.camera.setLocalEulerAngles(this.eulers.y, this.eulers.x, 0);
        },

        _onMouseMove: function (e) {
            // If pointer is disabled
            // If the left mouse button is down update the camera from mouse movement
            if (pc.Mouse.isPointerLocked() || e.buttons[0]) {
                this.eulers.x -= this.lookSpeed * e.dx;
                this.eulers.y -= this.lookSpeed * e.dy;
            }
        },

        _createCamera: function () {
            // If user hasn't assigned a camera, create a new one
            this.camera = new pc.Entity();
            this.camera.setName("First Person Camera");
            this.camera.addComponent("camera");
            this.entity.addChild(this.camera);
            this.camera.translateLocal(0, 0.5, 0);
        }
    };

    return First_person_movement;
});
~~~

[1]: https://playcanvas.com/project/359952/overview/tutorial-first-person-movement


---
title: Communication
template: page.tmpl.html
position: 4
---

Communication between different scripts is very straightforward. Script Instances are exposed through the script component on an Entity.

For example,

~~~javascript~~~
// player.js
pc.script.create("player", function (context) {
    var Player = function (entity) {
        this.entity = entity;
    };

    Player.prototype = {
        move: function (x, y) {
            this.entity.translate(x, y, 0);
        }
    };

    return Player;
});


// input.js
pc.script.create("input", function (context) {
    var Input = function (entity) {
        this.entity = entity;
    };

    Input.prototype = {
        update: function (dt) {
            if (context.keyboard.isPressed(pc.input.KEY_LEFT)) {
                // Call the move() method on the player script
                this.entity.script.player.move(-1, 0);
            }

            if (context.keyboard.isPressed(pc.input.KEY_RIGHT)) {
                // Call the move() method on the player script
                this.entity.script.player.move(1, 0);
            }
        }
    };

    return Input;
});
~~~

In the example above we have two scripts: *player.js* and *input.js* are attached to the same Entity. The Input script checks for input on the keyboard and if the left or right arrow key is pressed it tells the Player script to move the player.

This is the line that communicates between script instances

~~~js~~~
this.entity.script.player.move(1,0);
~~~

All scripts attached to a script component are exposed on the script component itself under the name defined in the `pc.script.create()` function.



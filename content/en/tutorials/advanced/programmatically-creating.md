---
title: Programmatically Creating Entities
template: tutorial-page.tmpl.html
position: 2
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/creating_entities?overlay=false" ></iframe>

Usually you will be creating Entities via the PlayCanvas Designer, building up collections of Components and scripts to create the various parts of your game. However, in some cases it is convenient to create Entities in your scripts. This tutorial shows you how.

## Creating an Entity

~~~js
var entity = new pc.Entity(); // Create an Entity

// Add it to the Entity hierarchy
app.root.addChild(entity);
~~~

First you need to create an Entity. This is straightforward, but it is important to add the Entity to the main Entity hierarchy. Only Entities in the hierarchy will have their transforms, Components and scripts updated. In your scripts you can access the root of the Entity hierarchy from the `Application` object which is passed into your script. By convention this is usually named `app` and the hierarchy root is available as `app.root`.

## Adding Components

~~~js~~~
// Create a new Entity
var entity = new pc.Entity();

// Add a new Camera Component with default values
entity.addComponent("camera");

// Add a new Model Component and add it to the Entity.
entity.addComponent("model", {
    type: 'box',
});

// Add it to the Entity hierarchy
app.root.addChild(entity);
~~~

An Entity on it's own doesn't do much, so you will need to add Components in order to add functionality to your Entity. You can use the `addComponent` method of the Entity to create and add a new Component to the Entity.

Each Component type has different properties that can be passed in on the data object, see the [Component's documentation][1] for more detail about which properties are available. The `data` argument can be left out and default values will be used.

## Removing Components

~~~js~~~
var entity = new pc.Entity();

// Attach Camera Component with default values
entity.addComponent("camera");

// Delete the Camera Component
entity.removeComponent("camera");
~~~

Components can be deleted individually from an Entity by calling the `removeComponent` method on the Entity.

## Deleting Entities

~~~js~~~
// Create a new Entity
var entity = new pc.Entity();

// Create a new Camera Component with default values
entity.addComponent("camera");

// Create a new Model Component and add it to the Entity.
entity.addComponent("model", {
    type: 'box',
});

// Add it to the Entity hierarchy
app.root.addChild(entity);

// Delete the Entity and remove it from the hierarchy
entity.destroy();
~~~

When you are finished with an Entity you call the `destroy` method on the Entity. This will delete all Components and remove the Entity from the hierarchy. It will also delete all child Entities in the same way.

## In Action

~~~js~~~
pc.script.attribute("materials", "asset", [], {type: "material"});

pc.script.create('entity_creator', function (app) {

    var MAX_X = 10;
    var MIN_X = -10;
    var MAX_Y = 10;
    var MIN_Y = -10;
    var MAX_Z = 10;
    var MIN_Z = -10;

    var NUM_CUBES = 10;

    var MAX_DURATION = 5;

    var EntityCreator = function (entity) {
        this.entity = entity;
        this.entities = [];
    };

    EntityCreator.prototype = {
        initialize: function () {
        },

        update: function (dt) {
            // Spawn new cubes if there are less than NUM_CUBES
            while (this.entities.length < NUM_CUBES) {
                this.spawnCube();
            }

            // Loop through Entities and delete them when their time is up
            for (i = 0; i < this.entities.length; i++) {
                this.entities[i].timer -= dt;
                if (this.entities[i].timer < 0) {
                    // entity.destroy() deletes all components and removes Entity from the hierarchy
                    this.entities[i].entity.destroy();

                    // Remove from the local list
                    this.entities.splice(i, 1);
                }
            }
        },

        spawnCube: function () {
            var entity = new pc.Entity();

            // Add a new Model Component and add it to the Entity.
            entity.addComponent("model", {
                type: 'box'
            });
            var red = app.assets.getAssetByResourceId(this.materials[0]).resource;
            entity.model.model.meshInstances[0].material = red;

            // Move to a random position
            entity.setLocalPosition(
                pc.math.random(MIN_X, MAX_X),
                pc.math.random(MIN_Y, MAX_Y),
                pc.math.random(MIN_Z, MAX_Z)
            );

            // Add to the Hierarchy
            app.root.addChild(entity);

            // Store in a list for some random duration before deleting
            this.entities.push({
                entity: entity,
                timer: pc.math.random(0, MAX_DURATION)
            });
        }
    };

    return EntityCreator;
});
~~~

This is a complete Entity script which you can see in action at the top of the tutorial. It continually creates and destroys new Entities with a Model Component attached.

See [the full pack here][2].

[1]: /user-manual/packs/components/
[2]: http://playcanvas.com/designer/186/scene/329669

---
title: Editor API
template: usermanual-page.tmpl.html
position: 11
---

<div class="alert alert-info">
The Editor API is a beta feature. Please use caution when using on live projects.
</div>

The Editor has a user accessible API that is currently in beta which can be used to help automate and extend the base functionality.

The API is not yet considered stable and may change in the future as we continue development. However, it is unlikely that API will change a lot from its current state.

Full documentation of the API can be found on [GitHub][github-api].


## Automation Example

The API can be accessed via the browser's devtools console allowing for automation of repetitive tasks. In the example below, we are using the Editor to find all the Entities that have the tag 'red' and disabling them by running code in the browser console.

![][disable-red-boxes-gif]

Editor API code:
```
(function(){
    const entities = editor.entities.root.listByTag('red');
    for (const entity of entities) {
        entity.set('enabled', false);
    }
})();
```


## Extending Editor Functionality

It is possible to add extra functionality to the Editor and create custom interfaces such as adding buttons. This can be done via a number of ways such as browser extensions or [user scripts][user-scripts].

User scripts is the more accessible out of the two which allows you to run custom code on top of the Editor.

Below we have an example where a button has been added to the [Viewport][viewport] to generate and randomly place boxes into the scene.

![][generate-boxes-gif]

The PlayCanvas team are currently using the [Violentmonkey][violentmonkey] open source browser extension to manage user scripts.

Once the browser extension has been installed, adding your own or another developer's user script is very straightforward. Steps can be found in [Violentmonkey's documentation][violentmonkey-docs].

The code for the above user script is:
```
// ==UserScript==
// @name        Example Script
// @namespace   Violentmonkey Scripts
// @match       https://playcanvas.com/editor/scene/*
// @grant       none
// @version     1.0
// @author      -
// @description 20/10/2021, 11:40:21
// ==/UserScript==

(function() {
    async function generateBoxes(count, position, radius) {
        // create box entity
        const box = editor.entities.create({ parent: editor.entities.root });
        // find box material asset
        const boxMaterial = editor.assets.findOne(asset => asset.get('name') === 'boxMaterial');
        // add render component
        box.addComponent('render', {
            type: 'box',
            materialAssets: [boxMaterial.get('id')]
        });

        // add a number of boxes around a point in the scene
        let offset = new pc.Vec3();
        let rotation = new pc.Quat();
        const result = [];

        for (let i = 0; i < count; i++) {
            const boxCopy = await box.duplicate();
            boxCopy.set('name', 'Box ' + (i + 1));
            offset.set(1, 0, 0);
            rotation.setFromEulerAngles(0, pc.math.random(-360, 360), 0);
            offset = rotation.transformVector(offset);
            offset.scale(pc.math.random(-radius, radius));
            boxCopy.set('position', [position.x + offset.x, position.y + offset.y, position.z + offset.z]);

            result.push(boxCopy);
        }

        // delete original box
        box.delete();

        return result;
    }

    function createButton() {
        const btn = new pcui.Button({ text: 'Generate Boxes' });
        btn.style.position = 'absolute';
        btn.style.bottom = '10px';
        btn.style.right = '10px';
        editor.call('layout.viewport').append(btn);

        let boxes;

        btn.on('click', () => {
            // delete existing boxes
            if (boxes) {
                editor.entities.delete(boxes);
                boxes = null;
            }

            generateBoxes(10, new pc.Vec3(), 10).then(result => {
                boxes = result;
            });
        });
    }

    // Wait until the Editor is available before adding the button
    editor.once('load', () => createButton());
})();
```

Let's break down the important areas of the script:

At the top is the informational header about the script if you do share the script with other users. The important line is the `@match` attribute which controls which URLs the script is loaded on. In this case, it is set to load on any PlayCanvas scene. More information on how to change this can be found in [Violentmonkey's documentation][violentmonkey-matching].
```
// ==UserScript==
// @name        Example Script
// @namespace   Violentmonkey Scripts
// @match       https://playcanvas.com/editor/scene/*
// @grant       none
// @version     1.0
// @author      -
// @description 20/10/2021, 11:40:21
// ==/UserScript==
```

This is private Editor API to wait for an event when the Editor has fully loaded. Using the event ensures that the Editor API is accessible before the code to extend Editor features is ran.
```
    // Wait until the Editor is available before adding the button
    editor.once('load', () => createButton());
```

The button created is from the [PCUI][pcui] framework library that the Editor is also using. Again, there is some private API use to get the Viewport DOM to attach the button to.
```
    function createButton() {
        const btn = new pcui.Button({ text: 'Generate Boxes' });
        btn.style.position = 'absolute';
        btn.style.bottom = '10px';
        btn.style.right = '10px';
        editor.call('layout.viewport').append(btn);

        let boxes;

        btn.on('click', () => {
            // delete existing boxes
            if (boxes) {
                editor.entities.delete(boxes);
                boxes = null;
            }

            generateBoxes(10, new pc.Vec3(), 10).then(result => {
                boxes = result;
            });
        });
    }
```

[disable-red-boxes-gif]: /images/user-manual/editor/editor-api/disable-red-boxes.gif
[github-api]: https://github.com/playcanvas/editor-api/blob/master/docs/modules.md#playcanvas-editor-api
[user-scripts]: https://en.wikipedia.org/wiki/Userscript
[viewport]: /user-manual/designer/viewport
[violentmonkey]: https://violentmonkey.github.io/
[violentmonkey-docs]: https://violentmonkey.github.io/guide/creating-a-userscript/
[violentmonkey-matching]: https://violentmonkey.github.io/api/matching/
[generate-boxes-gif]: /images/user-manual/editor/editor-api/generate-random-boxes.gif
[pcui]: https://github.com/playcanvas/pcui

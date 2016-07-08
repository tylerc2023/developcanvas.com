---
title: Custom Post Effects
template: tutorial-page-legacy.tmpl.html
position: 4
---

<iframe src="https://playcanv.as/p/vQBffMnK" ></iframe>

*This tutorial uses a custom post effect to create an effect in GLSL*

## Overview

You can create your own post effects in PlayCanvas, with a bit of Javascript and GLSL. Post effects are shaders that operate on the 2D rendered image from a camera. You can apply multiple post effects to your image - each effect uses the output of the previous effect as its input.

In the next paragraphs we will demonstrate how to create your own post effects. You can see examples of existing post effects [here][1].

## The script

First we need to create a new script. This script will contain the [Shader Definition][2] for our post effect and also code that will add the post effect to the camera. This script needs to be attached to an Entity with a [Camera component][3]. We'll call this script posteffect_example.js:

```javascript
pc.script.create('posteffect_example', function (app) {
    var Posteffect_example = function (entity) {
        this.entity = entity;
    };

    Posteffect_example.prototype = {
        initialize: function () {
        }
    };

    return Posteffect_example;
});
```

## The effect

Now we need to create a new class for our post effect. This class will derive from [pc.posteffect.PostEffect][4]. We will define this class inside our posteffect_example.js script just before the script definition:

```javascript
pc.extend(pc, function () {
    // Constructor - Creates an instance of our post effect
    var ExamplePostEffect = function (graphicsDevice, vs, fs) {
        // this is the shader definition for our effect
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: vs,
            fshader: fs
        });
    };

    // Our effect must derive from pc.PostEffect
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.PostEffect);

    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {
        // Every post effect must implement the render method which
        // sets any parameters that the shader might require and
        // also renders the effect on the screen
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // Set the input render target to the shader. This is the image rendered from our camera
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);

            // Draw a full screen quad on the output target. In this case the output target is the screen.
            // Drawing a full screen quad will run the shader that we defined above
            pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        ExamplePostEffect: ExamplePostEffect
    };
}());
```

## Wrap up

We now have all the required components for our post effect. All we need to do is add an instance of the ExamplePostEffect that we defined above to our camera's [post effect queue][5]:

```javascript
pc.script.create('posteffect_example', function (app) {

    var Posteffect_example = function (entity) {
        this.entity = entity;
    };

    Posteffect_example.prototype = {
        initialize: function () {
            // create an instance of our effect
            var vert = app.assets.get(this.vertexShaderAssetId);
            var frag = app.assets.get(this.fragShaderAssetId);
            this.effect = new pc.ExamplePostEffect(app.graphicsDevice, vert.resource, frag.resource);
        },

        onEnable: function () {
            // when the script is enabled add our effect to the camera's postEffects queue
            this.entity.camera.postEffects.addEffect(this.effect, false);
        },

        onDisable: function () {
            // when the script is disabled remove our effect from the camera's postEffects queue
            this.entity.camera.postEffects.removeEffect(this.effect);
        }
    };

    return Posteffect_example;
});
```

And that's it! Here is the full script:

```javascript
pc.script.attribute("vertexShaderAssetId", "asset", null, {type: "shader", max: 1, displayName: "Vertex Shader"});
pc.script.attribute("fragShaderAssetId", "asset", null, {type: "shader", max: 1, displayName: "Fragment Shader"});

//--------------- POST EFFECT DEFINITION------------------------//
pc.extend(pc.posteffect, function () {
    // Constructor - Creates an instance of our post effect
    var ExamplePostEffect = function (graphicsDevice) {
        // this is the shader definition for our effect
        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: [
                "attribute vec2 aPosition;",
                "",
                "varying vec2 vUv0;",
                "",
                "void main(void)",
                "{",
                "    gl_Position = vec4(aPosition, 0.0, 1.0);",
                "    vUv0 = (aPosition.xy + 1.0) * 0.5;",
                "}"
            ].join("\n"),
            fshader: [
                "precision " + graphicsDevice.precision + " float;",
                "",
                "uniform sampler2D uColorBuffer;",
                "",
                "varying vec2 vUv0;",
                "",
                "void main() {",
                    "vec4 texel = texture2D(uColorBuffer, vUv0);",
                    " texel.g = vUv0.x * vUv0.x / vUv0.y;",
                    "gl_FragColor = vec4(texel.rgb, texel.a);",
                "}"
            ].join("\n")
        });
    }

    // Our effect must derive from pc.posteffect.PostEffect
    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.posteffect.PostEffect);

    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {
        // Every post effect must implement the render method which
        // sets any parameters that the shader might require and
        // also renders the effect on the screen
        render: function (inputTarget, outputTarget, rect) {
            var device = this.device;
            var scope = device.scope;

            // Set the input render target to the shader. This is the image rendered from our camera
            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);

            // Draw a full screen quad on the output target. In this case the output target is the screen.
            // Drawing a full screen quad will run the shader that we defined above
            pc.posteffect.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);
        }
    });

    return {
        ExamplePostEffect: ExamplePostEffect
    };
}());

//--------------- SCRIPT DEFINITION------------------------//
pc.script.create('posteffect_example', function (app) {

    var Posteffect_example = function (entity) {
        this.entity = entity;
        // create an instance of our effect
        this.effect = new pc.posteffect.ExamplePostEffect(app.graphicsDevice);
    };

    Posteffect_example.prototype = {
        onEnable: function () {
            // when the script is enabled add our effect to the camera's postEffects queue
            this.entity.camera.postEffects.addEffect(this.effect, false);
        },

        onDisable: function () {
            // when the script is disabled remove our effect from the camera's postEffects queue
            this.entity.camera.postEffects.removeEffect(this.effect);
        }
    };

    return Posteffect_example;

});
```

For more tutorials on custom shaders look [here][6].

See the [Custom Post Effects project here][7].

[2]: /api/pc.Shader.html
[4]: /api/pc.PostEffect.html
[3]: /user-manual/packs/components/camera
[1]: https://github.com/playcanvas/engine/tree/master/extras/posteffects
[6]: /tutorials/legacy/advanced/custom-shaders
[5]: /api/pc.CameraComponent.html#postEffects
[7]: https://playcanvas.com/project/388378/overview/tutorial-custom-post-effect


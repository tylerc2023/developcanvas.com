---
title: Shadows
template: usermanual-page.tmpl.html
position: 3
---

Shadows are a great way to add realism to your games.

![Characters with shadow casting][1]

The PlayCanvas engine implements a shadowing algorithm called shadow mapping. It is completely cross-platform and so is guaranteed to work on both mobile and the desktop. Furthermore, shadows are free for everybody to use - you don't need a Pro account to make your game look great.

## Enabling Shadows

<img src="/images/user-manual/scenes/components/component-light-directional.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

Enabling shadows is easy. First of all, indentify which lights in your scene you want to cast shadows.

Select the lights in the Hierarchy and check the 'Cast Shadows' option in the Inspector panel:

<img src="/images/user-manual/scenes/components/component-model.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

Now you need to specify which graphical objects in your scene cast and receive shadows. By default, all model components receive shadows but do not cast them. Therefore, in order to see an entity cast shadows, select it in the Pack Explorer, locate the model component and check the 'Cast Shadows' option:

Shadows should now be visible in the Editor's 3D view.

## Tuning Shadows

The shadow mapping technique used by PlayCanvas has only finite resolution. Therefore, you may need to tune some values to make them look as good as possible. The following properties can be found in the [light component UI].

### Shadow Distance

The shadow distance is the distance from the viewpoint beyond which directional light shadows are no longer rendered. The smaller this value, the crisper your shadows will be. The problem is that the viewer will be able to see the shadows suddenly appear as the viewpoint moves around the scene. Therefore, you should balance this value based on how far the player can see into the distance and generally what looks good.

### Shadow Resolution

Every light casts shadows via a shadow map. This shadow map can have a resolution of 256x256, 512x512, 1024x1024 or 2048x2048 and this value is also set in the light component's interface. The higher the resolution, the crisper the shadows. However, higher resolution shadows are more expensive to render so be sure to balance performance against quality.

### Shadow Bias

Shadow mapping can be prone to rendering artifacts that can look very ugly. If you notice bands of shadow or speckled patches where you do not expect, you should try tuning the shadow bias to resolve the problem.

### Normal Offset Bias

'Shadow acne' artifacts are a big problem and the shadow bias can eliminate them quite effectively. Unfortunately, this always introduces some level of 'Peter Panning', the phenomenon where shadows make a object appear to be floating in mid-air.

The Normal Offset Bias solves this problem. In addition to using the depth bias, we can avoid both shadow acne and Peter Panning by making small tweaks to the UV coordinates used in the shadow map look-up. A fragment's position is offset along its geometric normal. This "Normal Offset" technique yields vastly superior results to a constant shadow bias only approach.

## Soft Shadows vs Hard Shadows

The outline of a shadow is called the penumbra. This is a transition from dark to light which gives shadows a soft edge. Softening shadow edges is the default in PlayCanvas but you can change this setting if you wish to achieve hard edged shadows. See below for a comparison of soft and hard edged shadows:

![Hard vs soft shadows][2]

Soft shadows are achieved by performing more samples of the shadowmap on the GPU. The algorithm used is called Percentage Closest Filtering or PCF for short. This algorithm reads 9 localized samples (a 3 by 3 matrix) from the shadowmap instead of just one as is used for hard shadows.

The shadow sampling type is specified per material and so the option can be found in the Material Editor in the Other section.

## Performance Considerations

Enabling shadows has performance implications:

* For each shadow casting directional or spot light, the scene must be rendered once into a shadowmap every frame. Point light shadows are far more expensive since the scene is rendered six times per light (the shadowmap is stored as a 6-sided cube map). Rendering the scene into shadowmaps places load on both the CPU and the GPU.
* Using a greater shadowmap resolution with generate crisper shadows but the GPU must fill more shadowmap pixels and therefore this may affect frame rate.
* Selecting soft shadows (PCF3x3) for the shadow sample type on a shadow receiving material is more expensive on the GPU versus the hard shadows option.

[1]: /images/user-manual/graphics/shadows/doom3_shadows.jpg
[2]: /images/user-manual/graphics/shadows/hard_vs_soft.jpg

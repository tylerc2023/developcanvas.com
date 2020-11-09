---
title: Post Effects
template: usermanual-page.tmpl.html
position: 6
---

PlayCanvas supports the adding post-processing effects to your projects. Post effects modify the final rendered image and provide an easy way for you to add some visual flare to your application.

We have implemented post effects as scripts that you can add to an Entity that has a [Camera][1] component attached. To add post effects to a camera, do the following:

1. Visit the [Asset Store][2] and add the required scripts to your project. The post effects available in the Asset Store include:
  * [Bloom][3]
  * [Brightness-Contrast][4]
  * [Hue-Saturation][5]
  * [FXAA][6]
  * [Sepia][7]
  * [Vignette][8]
2. Add a [Script][9] component to the Entity representing your camera.
3. Assign the desired post effect scripts to the camera entity's Script component. Note that the order in which the post effect script are listed in the Script component determine the order in which they are applied.

You can also create your own post effects. You can find the source for the above post effects (plus some additional ones) on [GitHub][10].

[1]: /user-manual/packs/components/camera
[2]: https://store.playcanvas.com/?tags=script
[3]: /user-manual/graphics/posteffects/bloom
[4]: /user-manual/graphics/posteffects/brightness_contrast
[5]: /user-manual/graphics/posteffects/hue_saturation
[6]: /user-manual/graphics/posteffects/fxaa
[7]: /user-manual/graphics/posteffects/sepia
[8]: /user-manual/graphics/posteffects/vignette
[9]: /user-manual/packs/components/script
[10]: https://github.com/playcanvas/engine/tree/master/examples/assets/scripts/posteffects

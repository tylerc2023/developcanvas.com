---
title: Animation
template: usermanual-page.tmpl.html
position: 9
---

An Animation asset is used to play a single animation on a 3D model. Animations are imported by uploading 3D scenes (such as FBX files) which contain animation data. The animation data is extracted from the uploaded file by the [asset pipeline][asset_pipeline] and a [Target Asset][target_asset] is created to use in game.

## Animation Import Settings

<div class="alert alert-info">
Note: This is an experimental feature. Please let us know your feedback in the <a href="http://forum.playcanvas.com/" target="_blank">forums</a>.
</div>

When importing animations, there are settings that can be tweaked to adjust the animation quality against the file size.

They can be found in the Project Settings under Asset Tasks.

![Animation Import Settings][animation_import_settings]

### Sample rate

Available for both JSON and GLB export formats. The higher the rate, the higher detail and fidelity the animation at the cost of size. If you would like to keep the keyframes that have been set and defined in the original animation, select Disabled.

### Curve tolerance

Available for both JSON and GLB export formats. Normally a value between 0 and 1 where the higher number, the smaller the file size but at cost of losing information in the animation. It's a lossy compression of the animation with the idea that a saving in file size can be made with little or no noticeable difference

0.01 or 0.02 is considered to be good starting point.

### Cubic curves.

Only available for GLB export formats. If you wish to keep the easing in the animation curves from the original animation. However, this will mean that the file will have extra information per keyframe and increase the size.

If enabling this option, it is recommended that Sample rate is disabled and Curve tolerance is set to 0.

[asset_pipeline]: /user-manual/glossary#asset_pipeline
[target_asset]: /user-manual/glossary#target_asset
[animation_import_settings]: /images/user-manual/assets/animation/animation-import-settings.png

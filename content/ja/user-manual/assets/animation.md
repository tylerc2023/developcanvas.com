---
title: Animation
template: usermanual-page.tmpl.html
position: 4
---

アニメーションアセットは3Dモデルで一つのアニメーションを再生するために使用されます。アニメーションは、アニメーションデフォルトを含む3Dシーン (FBXファイルなど)をアップロードすることでインポートされます。アニメーションデータは [asset pipeline][asset_pipeline] でアップロードされたファイルから摘出され、ゲーム内で使用する[Target Asset][target_asset] が作成されます。

## Animation Import Settings

<div class="alert alert-info">
Note: This is an experimental feature. Please let us know your feedback in the <a href="http://forum.playcanvas.com/" target="_blank">forums</a>.
</div>

When importing animations, there are settings that can be tweaked to adjust the animation quality against the file size.

They can be found in the Project Settings under Asset Tasks.

![Animation Import Settings][animation_import_settings]

### Naming Strategy

Only available for GLB export format. When importing an animation, the generated asset name can either be set from the 'Take Name' in the animation file, or use the animation filename instead.

This is useful with assets that are brought/taken from a store such as [Mixamo][1] where all the take names are 'mixamo.com' and using the filename as the asset name is clearer.

### Sample rate

Available for both JSON and GLB export formats. The higher the rate, the higher detail and fidelity the animation at the cost of size. If you would like to keep the keyframes that have been set and defined in the original animation, select Disabled.

### Curve tolerance

Available for both JSON and GLB export formats. Curve tolerance controls a lossy compression setting of the animation import with the idea that a saving in file size can be made with little or no noticeable difference.

This is a value between 0 and 100 where the higher number, the smaller the file size but at cost of losing information in the animation. 0 would be no compression and 100 would lose all information.

1 or 2 is considered to be good starting point.

### Cubic curves.

Only available for GLB export formats. Enable this option if you wish to keep the easing in the animation curves from the original animation. However, this will mean that the file will have extra information per keyframe and increase the size.

If enabling this option, it is recommended that Sample Rate is disabled and Curve Tolerance is set to 0.

[asset_pipeline]: /user-manual/glossary#asset-pipeline
[target_asset]: /user-manual/glossary#target-asset
[animation_import_settings]: /images/user-manual/assets/animation/animation-import-settings.png

 [1]: https://www.mixamo.com/


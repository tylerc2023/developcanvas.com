---
title: Animation
template: usermanual-page.tmpl.html
position: 2
---

The Animation component enables an entity to specify which animations can be applied to the model assigned to its Model component.

The Animation component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the component will play the assigned animation.

![Animation component][1]

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Assets</td><td>The animation assets that can be utilized by this entity. Multiple animations can be assigned via the picker control.</td></tr>
    <tr><td>Speed</td><td>A multiplier for animation playback speed. 0 will freeze animation playback, and 1 represents the normal playback speed of the asset.</td></tr>
    <tr><td>Activate</td><td>If checked, the component will start playing the animation on load.</td></tr>
    <tr><td>Loop</td><td>If checked, the animation will continue to loop back to the start on completion. Otherwise, the animation will come to a stop on its final frame.</td></tr>
</table>

## Scripting Interface

You can control an Animation component's properties using a [script component][2]. The Animation component's scripting interface is [here][3].

[1]: /images/user-manual/scenes/components/component-animation.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.AnimationComponent.html


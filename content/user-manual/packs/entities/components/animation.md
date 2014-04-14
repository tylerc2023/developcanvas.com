---
title: Animation Component
template: page.tmpl.html
---

The 'animation' component enables an entity to specify which animations can be applied to the model assigned to its model component.

![Component Interface](/images/platform/component_animation.png)

## Properties

<table class="table">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Asset</td><td>The animation assets that can be utilized by this entity. Multiple animations can be assigned via the picker control.</td></tr>
    <tr><td>Speed Factor</td><td>A multiplier for animation playback speed. 0 will freeze animation playback, and 1 represents the normal playback speed of the asset.</td></tr>
    <tr><td>Loop</td><td>If checked, the animation will continue to loop back to the start on completion. Otherwise, the animation will come to a stop on its final frame.</td></tr>
    <tr><td>Activate</td><td>If checked, the component will start playing the animation on load.</td></tr>
</table>

## Scripting Interface

You can control an animation component's properties using a [script component](/tools/designer/components/script.html). The animation component's scripting interface is [here](/engine/api/stable/symbols/pc.fw.AnimationComponent.html).
---
title: Audio Source Component
template: page.tmpl.html
---

The 'audiosource' component specifies the listener's position in 3D space. All 3D audio playback will be relative to this position.

![Component Interface](/images/platform/component_audiosource.png)

## Properties

<table class="table">
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Assets</td><td>The audio assets that can be played from this audio source. Multiple audio assets can be specified by the picker control.</td></tr>
    <tr><td>Volume</td><td>The volume of the audio assets played back by the component.</td></tr>
    <tr><td>Loop</td><td>If checked, the component will loop played audio assets continuously. Otherwise, audio assets are played once to completion.</td></tr>
    <tr><td>Activate</td><td>If checked, the first audio asset specified by the Assets property will be played on load. Otherwise, audio assets will need to be played using script.</td></tr>
    <tr><td>3d</td><td>If checked, the component will play back audio assets as if played from the location of the entity in 3D space.</td></tr>
    <tr><td>Min Distance</td><td>The distance at which the volume of playback begins to fall from its maximum.</td></tr>
    <tr><td>Max Distance</td><td>The distance at which the volume of playback falls to zero.</td></tr>
    <tr><td>Roll-off Factor</td><td>The rate at which volume fall-off occurs.</td></tr>
</table>

## Scripting Interface

You can control an audiosource component's properties using a [script component](/tools/designer/components/script.html). The audiosource component's scripting interface is [here](/engine/api/stable/symbols/pc.fw.AudioSourceComponent.html).
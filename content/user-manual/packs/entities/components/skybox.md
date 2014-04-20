---
title: Skybox Component
template: page.tmpl.html
skip: true
---

The 'skybox' component attaches a skybox to an entity.

![Component Interface](/images/platform/component_skybox.png)

## Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>POSX</td><td>The image asset to use for the world-space positive X face of the skybox.</td></tr>
    <tr><td>NEGX</td><td>The image asset to use for the world-space negative X face of the skybox.</td></tr>
    <tr><td>POSY</td><td>The image asset to use for the world-space positive Y face of the skybox.</td></tr>
    <tr><td>NEGY</td><td>The image asset to use for the world-space negative Y face of the skybox.</td></tr>
    <tr><td>POSZ</td><td>The image asset to use for the world-space positive Z face of the skybox.</td></tr>
    <tr><td>NEGZ</td><td>The image asset to use for the world-space negative Z face of the skybox.</td></tr>
</table>

## Scripting Interface

You can control an skybox component's properties using a [script component][script_component]. The skybox component's scripting interface is [here][docs].

[script_component]: /user-manual/packs/entities/components/script
[docs]: /engine/api/stable/symbols/pc.fw.SkyBoxComponent.html

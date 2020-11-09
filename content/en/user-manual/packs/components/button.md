---
title: Button
template: usermanual-page.tmpl.html
position: 3
---

The Button Component is a convenient shortcut for creating User Interface buttons for use with [Screen][1] and [Element][2] Components.

The Button Component can be used in two Transition Modes. *Sprite Swap*, which uses a different sprite or frame for each button state or *Tint*, which tints a single sprite with a different color for each state.

## Common Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Active</td><td>When enabled the button will respond to and fire event. When disabled the button is set to the Inactive State.</td></tr>
    <tr><td>Image</td><td>The Image Element Entity that is used to detect input events.</td></tr>
    <tr><td>Hit Padding</td><td>Additional space around the Image Element that will be included when testing for input events.</td></tr>
    <tr><td>Transition Mode</td><td>The type of effect to use when transitioning between states. Either Sprite Swap or Tint.</td></tr>
</table>

## Sprite Swap Properties

![Sprite Swap Button][3]

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Hover Sprite</td><td>The Sprite Asset used when the button is in the Hover State.</td></tr>
    <tr><td>Hover Frame</td><td>The Sprite Frame to display when the button is in the Hover State.</td></tr>
    <tr><td>Pressed Sprite</td><td>The Sprite Asset used when the button is in the Pressed State.</td></tr>
    <tr><td>Pressed Frame</td><td>The Sprite Frame to display when the button is in the Pressed State.</td></tr>
    <tr><td>Inactive Sprite</td><td>The Sprite Asset used when the button is not active.</td></tr>
    <tr><td>Inactive Frame</td><td>The Sprite Frame used when the button is not active.</td></tr>
</table>

## Tint Properties

![Tint Button][4]

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Hover Tint</td><td>The color to tint the Image Element with when the button is in the Hover State.</td></tr>
    <tr><td>Pressed Tint</td><td>The color to tint the Image Element with when the button is in the Pressed State.</td></tr>
    <tr><td>Inactive Tint</td><td>The color to tint the Image Element with when the button is in the Inactive State.</td></tr>
    <tr><td>Fade Duration</td><td>The time in milliseconds to blend between the different state colors</td></tr>
</table>

## Scripting Interface

You can control the properties of a Button component using a [script component][5]. The scripting interface for the Button component is [here][6].

[1]: /user-manual/packs/components/screen
[2]: /user-manual/packs/components/element
[3]: /images/user-manual/scenes/components/component-button-swap.jpg
[4]: /images/user-manual/scenes/components/component-button-tint.jpg
[5]: /user-manual/packs/components/script
[6]: /en/api/pc.ButtonComponent.html

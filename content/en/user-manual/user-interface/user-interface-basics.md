---
title: User Interface Basics
template: usermanual-page.tmpl.html
position: 1
---

User Interfaces are built from two elements in PlayCanvas. A [Screen Component][1] describes the area that contains all the user interfaces elements and then multiple entities with [Element Components][2] are attached below the Screen Entity in the hierarchy. The Screen defines the area of the User Interface and how it is rendered (in 2D space or in the 3D world). The Elements make up the images and text components of the interface.

## Layout and Positioning

One big difference between regular Entities and Entities that use an Element Component as part of a Screen is the way in which they are positioned with respect to their parents. Element Components have two properties that alter they way that their final position is calculated. The `anchor` property determines how the child is positioned relative to it's parent and the `pivot` property determines where the center point of the element is. Read more on the [Element][3] page.

## Draw Order

The graphical portions of the user interface, Image and Text Elements, are drawn in the order that they appear in the hierarchy, i.e. the first child is drawn first, it's child is drawn next. A child that is draw later will appear on top of one that is draw earlier.

To change the draw order you simply re-order the entities in the Editor hierarchy. You can re-order elements programmatically by calling `entity.reparent(...)`. Though, note, that this forces the draw order to be recalculated for the entire Screen component.

## 9-slicing

9-slices (or 9-patches) are a graphical technique for creating scalable user-interface elements from bitmap graphics. You can setup 9-slicing using the Texture Atlas and Sprite Assets. [Read more][5].

## Input

There is an additional way of handling input for UI Elements. An instance of the `pc.ElementInput` is provided on the Application object, usually accessible as `this.app.elementInput`. This allows you to listen for input directly on the element components, e.g. `this.entity.element.on('click', ...)`. Read more on the [Input][4] page.

## Localization

PlayCanvas has a built-in localization system which supports localized Text Elements. Read more [here][6].


[1]: /user-manual/user-interface/screens
[2]: /user-manual/user-interface/elements
[3]: /user-manual/user-interface/elements
[4]: /user-manual/user-interface/input
[5]: /user-manual/2D/9-slicing
[6]: /user-manual/user-interface/localization

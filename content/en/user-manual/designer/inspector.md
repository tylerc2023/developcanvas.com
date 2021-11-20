---
title: Inspector
template: usermanual-page.tmpl.html
position: 3
---

<img src="/images/user-manual/editor/inspector/inspector.png" style="float: right; padding: 20px; padding-top: 0px;" width="320"></img>

The Inspector panel shows attribute values for the currently selected item.

Depending on what you have selected, you will see different inspector panels. Some available selections are:
* **Entity/Component Inspector**
* **Texture Inspector**
* **Material Inspector**
* **Cubemap Inspector**

Modifying these values is how you specify how your [Entity][1] behaves. For example, you can set which model to render for a Model Component, or what color a light is.

Some attributes are simple text or numbers in which case a standard text field or slider control will be used. Other values may require a more specialized input method. For example, choosing an Asset highlights available Assets in the asset panel. Some values can be manipulated via the viewport, for example, the Translate, Rotate and Scale values can be edited by moving and Entity dragging the relevant [Gizmo][2] around in the viewport.

When running both a game and the Editor simultaneously changes to attributes will be transmitted to Entities in the running application. An excellent way of iterating on values is to launch your game using the Play button, then place the Editor and the game tabs side by side and tweak values in the Editor as you watch and play the game.

[1]: /user-manual/glossary#entity
[2]: /user-manual/glossary#gizmo

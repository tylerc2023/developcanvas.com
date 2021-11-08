---
title: Preview Pane
template: shader-editor-page.tmpl.html
position: 6
---

The Preview Pane displays the currently selected graph or material and supports various lighting environments and shapes.

![Preview Pane][1]

| How To |  |
|---|---|
| Rotate the view | Left click and drag. |
| Zoom the view | Use the mouse scroll wheel. |
| Pan the view | Right click and drag. |
| Preview custom model | Drag and drop a glTF/glb model on the preview pane. |
| Preview custom environment | Drag and drop an equirectangle HDR image on the preview pane. |

### Toolbar

The toolbar offers control over the lighting environment and preview shape. The toolbar is shown below with the controls numbered and brief description of each.

![Preview Pane Toolbar][2]

| Controls | |
|---|---|
| 1 | Play toggle. When enabled, the preview window updates continuously and steps engine time forward. Enable this when previewing animated effects.
| 2 | Direct lighting toggle. |
| 3 | Environment lighting toggle. |
| 4 | Show environment background toggle. |
| 5 | Fullscreen toggle. |

### Custom environment lighting

The Preview Pane comes with a set of lighting environments, however custom environments are also supported.

To use a custom lighting environment, drag and drop an HDR image file, in equirectangular format, onto the Preview Pane. The environment will be shown as an option in the toolbar environment selector.

### Custom shapes

The Preview Pane comes with a set of simple shapes on which to preview materials, however custom shapes are also supported.

To use a custom shape, drag and drop a glTF or glb model file onto the Preview Pane. The custom model will be an option in the toolbar shape selector.

[1]: /images/shader-editor/preview-pane.png
[2]: /images/shader-editor/preview-pane-toolbar.png
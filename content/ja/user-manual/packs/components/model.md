---
title: モデル
template: usermanual-page.tmpl.html
position: 7
---

The Model component enables an entity to render a primitive shape or a model asset.

The Model component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the model will be added to the scene and rendered.

![Model component][1]

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Type</td><td>The type of the model to be rendered. Can be:<ul><li>Asset</li><li>Box</li><li>Capsule</li><li>Sphere</li><li>Cylinder</li><li>Cone</li></ul></td></tr>
    <tr><td>Asset</td><td>The model asset rendered by this model component. Only applies to models of type 'asset'. Only a single model can be rendered per model component.</td></tr>
    <tr><td>Cast Shadows</td><td>If enabled, the model rendered by this component will cast shadows onto other models in the scene.</td></tr>
    <tr><td>Receive Shadows</td><td>If enabled, the model rendered by this component will receive shadows cast by other models in the scene.</td></tr>
</table>

## スクリプティングインターフェイス

You can control a Model component's properties using a [script component][2]. The Model component's scripting interface is [here][3].

## 素材のカスタマイズ

モデルのマテリアルをカスタマイズする方法については、[こちら][4]を参照してください。

[1]: /images/user-manual/scenes/components/component-model.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.ModelComponent.html
[4]: /user-manual/assets/materials/#assigning-materials


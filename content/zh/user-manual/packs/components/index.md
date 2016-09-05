---
title: 组件
template: usermanual-page.tmpl.html
position: 2
---

组件定义了附加了该组件的实体的实体行为。一个实体实际上是一个组件的容器。

PlayCanvas 引擎定义了多种不同的组件。你可以通过 PlayCanvas 编辑器向实体添加组件。当选中一个实体时，组件的参数展示将会通过编辑器的属性编辑工具呈现出来。

<table class="table table-striped">
    <tbody>
        <tr>
            <th>Component</th>
            <th>Description</th>
        </tr>
    <tr>
        <td>[Animation][1]</td>
        <td>Specifies the animation assets that can run on the model specified by the entity's model component.</td>
    </tr>
    <tr>
        <td>[Audio Listener][2]</td>
        <td>Specifies the location of the listener for 3D audio playback.</td>
    </tr>
    <tr>
        <td>[Camera][3]</td>
        <td>Renders the scene from the location of the entity.</td>
    </tr>
    <tr>
        <td>[Collision][4]</td>
        <td>Assigns a collision volume to the entity.</td>
    </tr>
    <tr>
        <td>[Light][5]</td>
        <td>Attach a dynamic light source to the Entity.</td>
    </tr>
    <tr>
        <td>[Model][6]</td>
        <td>Renders a 3D model at the location of the entity.</td>
    </tr>
    <tr>
        <td>[Particle System][7]</td>
        <td>Attach a particle system to the Entity.</td>
    </tr>
    <tr>
        <td>[Rigid Body][8]</td>
        <td>Adds the entity to the scene's physical simulation.</td>
    </tr>
    <tr>
        <td>[Script][9]</td>
        <td>Allows the entity to run JavaScript fragments to implement custom behavior.</td>
    </tr>
    <tr>
        <td>[Sound][10]</td>
        <td>Plays audio assets.</td>
    </tr>
</tbody></table>

[1]: /user-manual/packs/components/animation
[2]: /user-manual/packs/components/audiolistener
[3]: /user-manual/packs/components/camera
[4]: /user-manual/packs/components/collision
[5]: /user-manual/packs/components/light
[6]: /user-manual/packs/components/model
[7]: /user-manual/packs/components/particlesystem
[8]: /user-manual/packs/components/rigidbody
[9]: /user-manual/packs/components/script
[10]: /user-manual/packs/components/sound


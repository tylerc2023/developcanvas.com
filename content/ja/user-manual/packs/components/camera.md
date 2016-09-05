---
title: Camera
template: usermanual-page.tmpl.html
position: 3
---

The Camera component enables an entity to render a scene from a certain viewpoint.

The Camera component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the camera will render the scene every frame.

![カメラコンポーネント][1]

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>Description</th></tr>
    <tr><td>Clear Buffers</td><td>カメラのレンダリングターゲットとなるバッファをどのように毎フレームクリアするかを設定します。カメラは二種類のバッファを使用します。ひとつはカラーバッファで、これは実際に見える画像を保持します。もう一つはデプスバッファで、描画されるそれぞれのピクセルのカメラ位置からの遠さを保持します。これらのバッファはそれぞれ独立にクリアすることができます。
        <ul>
            <li>Color: これが選択された場合、シーンのレンダリングを行う前に、カメラはレンダリングターゲットを指定された色でクリアします。</li>
            <li>Depth: これが選択された場合、シーンのレンダリングを行う前に、カメラはデプスバッファを明示的にクリアします。</li>
        </ul>
    </td></tr>
    <tr><td>Clear Color</td><td>カメラのレンダリングターゲットをクリアする際に使用する色です。この項目は'Clear Color Buffer'が選択されたときのみ表示されます。</td></tr>
    <tr><td>Projection</td><td>カメラの投影方法を選択します。選択可能な方法は以下のとおりです:
        <ul>
            <li>Perspective - 透視射影</li>
            <li>Orthographic - 正射影</li>
        </ul>
    </td></tr>
    <tr><td>Frustum Culling</td><td>これが選択された場合、カメラは軸に平行なバウンディングボックスがカメラの視野錐体に交差するものだけをレンダリングします。選択されていない場合には、見えるか見えないかにかかわらず全シーンがレンダリングされます。</td></tr>
    <tr><td>Field of View</td><td>透視射影カメラの上部と下部のクリッピング平面の角度です。この項目は'Projection'が'Perspective'に設定された時だけ表示されます。</td></tr>
    <tr><td>Ortho Height</td><td>正射影カメラの上部と下部のクリッピング平面の距離です。この項目は'Projection'が'Orthographic'に設定された時だけ表示されます。</td></tr>
    <tr><td>Near Clip</td><td>カメラ座標系における、カメラ位置からニアクリッピング平面までの距離です。</td></tr>
    <tr><td>Far Clip</td><td>カメラ座標系における、カメラ位置からファークリッピング平面までの距離です。</td></tr>
    <tr><td>Priority</td><td>どのカメラのビューが優先してレンダリングされるかを決める数字です。小さい数字が優先的にレンダリングされます。</td></tr>
    <tr><td>Viewport</td><td>ビューポートをカメラに割り当てられたレンダリングターゲットに割り当てる長方形を指定します。これを使うことで、分割スクリーンやピクチャインピクチャのような効果を実装することができます。この値は以下のような0から1の範囲の正規化された座標で指定されます:
        <ul>
            <li>x: 左下頂点のx座標</li>
            <li>y: 左下頂点のy座標</li>
            <li>w: 長方形の幅</li>
            <li>h: 長方形の高さ</li>
        </ul>
    </td></tr>
</table>

## スクリプティングインターフェイス

You can control a Camera component's properties using a [script component][2]. The Camera component's scripting interface is [here][3].

[1]: /images/user-manual/scenes/components/component-camera.png
[2]: /user-manual/packs/components/script
[3]: /en/api/pc.CameraComponent.html


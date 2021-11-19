---
title: イメージベースの照明
template: usermanual-page.tmpl.html
position: 2
---

PlayCanvasで物理ベースレンダリングを使用する際に最良の結果を得るには、イメージベースライティングまたはIBLというテクニックを使用します。事前レンダリングされたイメージデータをアンビエントおよび反射光のソース情報として使用できます。

このテクニックは、キューブを構成する6つのテクスチャ(面)で構成され、完全なサラウンドテクスチャカバレッジを持つ環境マップである[CubeMap][3]に依存しています。

## HDR

画像データはLDRまたはHDR(高ダイナミックレンジ)色空間に保存することができ、単一チャンネルで0.0〜1.0(256階調)以上の保存が可能です。HDRでは、ガンマ補正、トーンマッピング、露光などの環境要因の組み合わせにより、1.0以上の(白色と見なされます)を保存できます。これにより、より詳細な光の詳細を含めることができ、光の品質などのアーティストが望む結果を得られるようコントロールできます 。

![画像ベースレンダリングのためのHDR対LDR CubeMap][9]
*テクスチャの明るい部分がLDRを使用してクランプされていることに注意してください*

## エネルギーの保全

この概念は、拡散光および反射光が全て素材に当たる光から来るという事実から得られ、拡散光および反射光の合計は、素材に当たる総光量より大きくすることはできません。実際には、表面が非常に反射的である場合、表示される拡散色が非常に少ないことを意味します。逆に、素材が明るい拡散色を有する場合、あまり反映しません。

自然界では、滑らかな表面はより鮮明な反射を有し、粗い表面はぼやけます。その理由は、基本的に粗い表面はより大きく、より顕著なマイクロファセットを有するため光を多くの方向に反射し、滑らかな表面は主に一方向に反射する傾向があるからです。異なる視点から来る光が小さな視点の中で平均化されると、結果はぼやけて見え、省エネルギーのおかげで比較的明るくなりません。PlayCanvasは照明のために自動的に動作する光沢パラメータでこの動作をシミュレートしますが、IBLの場合は事前に正確なぼかし応答を事前に計算する必要があります。これはプレフィルターボタンの機能です。

**Prefilter**ボタンはインスペクターのCubeMapアセットで使用できますが、CubeMapを使用して物理的マテリアルでIBLを有効にする必要があります。

## 環境マップのオーサリング

環境地図には、等角投影、CubeMap(面のリスト)、方位角など多くの異なる投影があります。WebGLとGPUは面のリストで動作します - キューブ - CubeMapの側面を表す6つのテクスチャのセット。環境マップが他の投影法の場合、6つのテクスチャに変換する必要があります。

投影間で変換するには、さまざまなツールを使用できます。その1つは、クロスプラットフォームのオープンソースのCubeMapフィルタリングツール[cmftStudio][0]です。

CubeMapsはCGIでレンダリングしたり、写真から組み立てたり、HDR環境マップをウェブサイトからダウンロード/購入することもできます。実験のための良い情報源には：[sIBL Archive][6]、[No Emotion HDR's][10]、[Open Footage][11]、[Paul Debevec][12]などがあります。環境マップは、上述のcmftStudioによって等角投影法とコンバーチブル法が可能です。

## CubeMapのレンダリング

CubeMapは6面で構成され、各面は立方体の正方形の面を表します。正方形のビューポートカメラを使用して、90度の視野で異なる90度の方向に回転させてレンダリングすることができます。

![CubeMapの面][13]

一般的な3Dモデリングツール、または写真と360 画像ソフトウェアを使用できます。これは線形ガンマ空間でレンダリングされるべきであり、[Lightmapping ガンマ補正セクション][1]で説明されている色補正を行うべきではありません。

[このような][2]3D Studio Maxのプラグインの１つを使って、VRay CubeMapの面をレンダリングして、PlayCanvas Editorにアップロードすることができます。

## IBLの適用

これには2つの方法があります：
1. CubeMapをシーン設定のSkyboxとして使用します。
2.素材の環境マップとしてCubeMapを直接使用します。

## ボックスのプロジェクションマッピング

この技術は、環境マップの投影を変更して、CubeMapがその境界に対応するように空間内でボックスを指定できるようにします。最も一般的な用途は、ルームスケール環境内の表面上の反射をシミュレートすることです。

![素材CubeMapボックスプロジェクション][4]

## 例

CubeMap Box Projectionを使用したシーンの[例][7]と[プロジェクト][8]です。窓に映る木の床の反射と天井に映る僅かな反射や、右の壁の金属のPlayCanvasロゴに映る部屋の反射をご確認ください。これは動的なエフェクトであり、非常に現実的な反射を作成し、アーティストが部屋の環境をどのように映し出すか制御することを可能にします。

[![環境ボックスプロジェクションマッピング][5]][7]
*このシーンのライティングは、ライトマップとAOテクスチャとボックス投影IBL(反射)*を使用して実装されます

[0]: https://github.com/dariomanesku/cmftStudio
[1]: /user-manual/graphics/lighting/lightmapping/#gamma-correction
[2]: http://www.scriptspot.com/3ds-max/scripts/vray-cubemap-generator-for-unity
[3]: /user-manual/assets/cubemaps/
[4]: /images/user-manual/graphics/physical-rendering/cubemap-box-projection.png
[5]: /images/user-manual/lighting/lightmaps/playcanvas-lightmapping-scene.jpg
[6]: http://www.hdrlabs.com/sibl/archive.html
[7]: https://playcanv.as/p/zdkARz26/
[8]: https://playcanvas.com/project/446587/overview/archviz-example
[9]: /images/user-manual/graphics/physical-rendering/ibl-hdr-ldr.jpg
[10]: http://noemotionhdrs.net/
[11]: https://www.openfootage.net/?tag=hdri
[12]: https://www.pauldebevec.com/Probes/
[13]: /images/user-manual/graphics/physical-rendering/cubemap-faces.jpg


---
title: アセット
template: usermanual-page.tmpl.html
position: 6
---

アセットパネルは、プロジェクトで利用可能なすべてのアセットを管理します。ここから、アセットの作成、アップロード、削除、検査が行えます。

![アセットパネル][1]

## フォルダ階層

フォルダパネルから、フォルダのツリーにアセットを整理することができます。

新しいフォルダを作成するには、Add Asset (+) ボタンをクリック、Folderを選択します。また、新しいフォルダを作成する場所を右クリックして、New Asset> Folderを選択します。

フォルダの名前を変更するには、階層パネルでそれをダブルクリックして、InspectorのName フィールドを編集します。

フォルダを削除するには、階層でそれをダブルクリックしてdeleteを押します。また、削除したいフォルダを右クリックして、コンテキストメニューからDeleteを選択します。

フォルダの構成を整理するにはフォルダを互いの中にドラッグすることができます。

## アセットの作成とアップロード

コンピューターのファイルシステムからアセットパネルにファイルをドラッグして新しいアセットを作成することができます。Editorがアセットをアップロード及びインポートします。

Add Asset (+) アイコンを使用して特定のアセットタイプを作成することもできます。

アセットを選択してDelete Assetアイコンをクリックすると、削除できます。

## アセットの編集

次の特定のテキストベースのアセットはPlayCanvas Script Editorで開いて編集することができます：text, json, shader, html, css, script asset。これを行うには、アセットのサムネイルをダブルクリックします。

## アセットの調査

任意のアセットの詳細を確認するには、アセットパネルのサムネイルを選択します。アセットの詳細がInspectorに表示されます。

## フィルタリング

フィルタドロップダウンから表示させるアセットの種類を選択して表示されているアセットをフィルタします。

## 検索

検索ボックスを使用して、プロジェクト内のアセットのグローバル検索を実行することができます。ボックスに入力し始めると、Editorは一致する結果を動的にアセットパネルで表示します。

The Search box supports wildcards. For example, *. will list every asset in your project.

## ドラッグ＆ドロップ

アセットは、メインパネルからフォルダ階層内のフォルダにドラッグして別のフォルダに移動することができます。アセットは複数選択に対応しています。CTRL+ Aで、現在選択されているフォルダ内のすべてのアセットを選択します。

アセットパネルから、[Inspector][2]でハイライトされたスロットにアセットをドラッグすることもできます。Inspectorのスロットは、コンポーネントのアセット属性またはアセットタイプのスクリプト属性のどちらかになります。

モデル、素材、キューブマップなどのアセットを直接 [ビューポート][3]にドラッグすることもできます。

* ビューポートにモデルアセットをドラッグすると、モデルアセットが割り当てられたモデルコンポーネントを有する新しいエンティティが作成されます。ビューポートのカメラは自動的に新しく作成されたエンティティにズームします。
* ビューポート内の特定のメッシュインスタンスの上に素材をドラッグすると、素材は(プレビューとして)ドラッグされる素材に切り替えられます。素材の変更を保持するには、素材をドロップします。
* ビューポートでシーンの背景の上にキューブマップをドラッグすると、キューブマップはシーンのスカイボックスのキューブマップとして割り当てられます。プロパティは[Scene Settings][4]からも設定することができます。

## Checking References

Sometimes it's useful to know where assets are being used (or referenced) within a particular scene. If the Editor cannot detect any references for an asset, a small dot will be displayed on its thumbnail:

![Unreferenced Asset][5]

<div class="alert alert-info">
Note that the Editor cannot detect references to assets that are made in code. So think carefully before you delete an asset based on this indicator!
</div>

If an asset does have references, you can check them via the References content menu item:

![Asset References][6]

Selecting a reference will load it into the Inspector panel.

[1]: /images/user-manual/editor/assets-panel.png
[2]: /user-manual/designer/inspector
[3]: /user-manual/designer/viewport
[4]: /user-manual/designer/settings
[5]: /images/user-manual/editor/assets-panel/unreferenced-asset.png
[6]: /images/user-manual/editor/assets-panel/asset-references.png


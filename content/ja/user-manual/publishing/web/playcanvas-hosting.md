---
title: PlayCanvas ホスティング
template: usermanual-page.tmpl.html
position: 1
---

最も速く簡単で便利にゲームを公開できる方法はplaycanvas.comへのパブリッシュです。

2つの簡単なステップでPlayCanvasに公開できます：

1.新規 **ビルド**の公開
2. ビルドを**プライマリビルド**に設定

公開するにはプロジェクトに最低ひとつのシーンが必要です。

## 新規ビルドの公開

* プロジェクトに移行してEditorを開く。
* 左側のツールバーの<span class="pc-icon" style="font-size">&#57911;</span>ボタンをクリックするか左上メニューからPublishingをクリック。

![Publish ボタン][1]

* This will open up the Publishing dialog. Here you can publish a build or download a build for self-hosting.

![公開][2]

* Click the PUBLISH button next to "Publish on PlayCanvas".

![新しいビルドの公開][3]

*次に、新しいビルドに関するいくつかの詳細を記入する必要があります。使用可能なフィールドは以下のとおりです：

  * *Image*: 画像をクリックして、必要に応じてアップロードしてください。ソーシャルメディア上でビルドを共有するために使用されます。
  * *Title*: ビルドのタイトル。
  * *Description*: ビルドの説明。ソーシャルメディア上でビルドを共有するために使用されます。
  * *Version*: ビルドを区別するためにバージョンを使用します。分かりやすい値を使用してください。
  * *Release Notes*: ビルドに加えた変更を述べます。バージョンのように、ビルドの管理のために表示します。

![シーンの選択][4]

* Select the Scenes you want to include in your build from the list. Notice that the Primary Scene (the one with the active banner icon), will be loaded first when your build is launched if you include it in the build.
* Click 'PUBLISH NOW'
* You will see a new build created in the BUILDS tab. Wait until it finishes processing.
* Your web app is now live! Feel free to tweet it and share to Facebook right from the published URL.

ビルドは次の形式で永久的にリンクを与えられます： `http://playcanv.as/b/BUILD_ID` 。このリンクはビルドを削除しない限り有効です。ゲームへのリンクをシェアしたい場合は、以下に説明する公開されたプロジェクトリンクを使用することを推奨します。

## Existing Builds

Click Builds on the same popup.

![Builds][5]

Here you can see a list of existing published builds.

Here you can also set the Primary Build for your project, by clicking on the banner icon on the left of each build. This will be the build that users play when they click on the PLAY button in the Dashboard Header.

ゲームの最新版を参照する単一のリンクがあると便利です。古いビルドの削除により壊れたリンクを心配する必要がなくなります。各プロジェクトにPrimary Buildリンクが用意されているのはこの理由のためです。常に次の形式になります： `http://playcanv.as/p/PROJECT_ID`

<div class="alert alert-info">
ゲームへのリンクをシェアする場合は、Primary Buildリンクを使用するべきです。これにより、再公開する際にリンクが変更される心配がなくなります。
</div>

初めてビルドを公開する際、それは自動的にPrimary Buildになります。その後のビルドにおいては、Primary Buildを指定するタイミングを選択することができます。最終的にPrimary Buildに設定する前にビルドを公開して検証することができます。

プロジェクトのPrimary Buildを設定するには、ビルドの左側にあるPrimaryマーカーをクリックします。これが、ユーザーがDashboard HeaderでPLAYボタンをクリックした際にプレイするAppになります。

[1]: /images/user-manual/editor/publishing-toolbar.jpg
[2]: /images/user-manual/editor/publishing.jpg
[3]: /images/user-manual/editor/publishing-new-top.jpg
[4]: /images/user-manual/editor/publishing-new-bottom.jpg
[5]: /images/user-manual/publishing/web/builds.jpg


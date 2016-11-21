---
title: PlayCanvas Hosting
template: usermanual-page.tmpl.html
position: 1
---

The fastest, easiest, most convenient way to publish your game is to publish it to playcanvas.com.

Publishing to PlayCanvas consists of two simple steps:

1. Publish a new **Build**
2. Set the build as the **Primary Build**

To publish you will need to have at least one scene in your project.

## Publishing a new Build

* Go to your Project and open the Editor.
* Click on the <span class="pc-icon" style="font-size">&#57911;</span> button in the left hand side toolbar or click Publishing in the top left Menu

![Publish Button][1]

* This will open up the Publishing dialog. Here you can publish a build or download a build for self-hosting.

![Publish][2]

* Click the PUBLISH button next to "Publish on PlayCanvas".

![Publish New Build][3]

* You will then have to fill out some details about your new build. The available fields are:

  * *Image*: Click on the image to upload a different one if you want. This will be used when sharing the build on Social Media.
  * *Title*: The title of your build.
  * *Description*: The description of your build. This will be used when sharing the link of your build on Social Media.
  * *Version*: The version is there to help you distinguish one build from another. Use a value that makes sense to you.
  * *Release Notes*: Enter any new changes you made for this build. Again like the Version, this will only be shown to you so that you keep better track of your builds.

![Select scenes][4]

* Select the Scenes you want to include in your build from the list. Notice that the Primary Scene (the one with the active banner icon), will be loaded first when your build is launched if you include it in the build.
* Click 'PUBLISH NOW'
* You will see a new build created in the BUILDS tab. Wait until it finishes processing.
* Your web app is now live! Feel free to tweet it and share to Facebook right from the published URL.

Builds are given permanent link in the form `http://playcanv.as/b/BUILD_ID`. This link will be valid until you delete the build. If you want to share a link to your game, you should probably use the published project link explained below.

## Existing Builds

Click Builds on the same popup.

![Builds][5]

Here you can see a list of existing published builds.

Here you can also set the Primary Build for your project, by clicking on the banner icon on the left of each build. This will be the build that users play when they click on the PLAY button in the Dashboard Header.

It's useful to have a single link that will always refer to the latest version of your game. That way you don't have to worry about broken links when you delete old builds. This is why we each project has a Primary Build link. This will always be in the form `http://playcanv.as/p/PROJECT_ID`

<div class="alert alert-info">
If you are sharing a link to your game you should use the Primary Build link. That means you know it won't change when you re-publish.
</div>

The first time you publish a build it will automatically become the Primary Build. For subsequent builds you can choose when to assigned the Primary Build. This means you can publish builds and test them before finally setting them as the Primary Build.

To set the Primary Build for your project, click the Primary marker to the left of build. This will be the app that users play when they click on the PLAY button in the Dashboard Header.

[1]: /images/user-manual/editor/publishing-toolbar.jpg
[2]: /images/user-manual/editor/publishing.jpg
[3]: /images/user-manual/editor/publishing-new-top.jpg
[4]: /images/user-manual/editor/publishing-new-bottom.jpg
[5]: /images/user-manual/publishing/web/builds.jpg


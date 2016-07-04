---
title: Introduction
template: usermanual-page.tmpl.html
position: 1
---

## What is PlayCanvas?

PlayCanvas is a visual development platform for 3D web content. Both the tools and the web apps you build are powered by HTML5. The entire software platform is web hosted so there's nothing to install and you can access your work from any device that runs one of the supported web browsers.

## The PlayCanvas Workflow

Building 3D web apps with PlayCanvas is easy. To get the best out of PlayCanvas, you will need to write some code (specifically some JavaScript, the language of the web). However, the PlayCanvas toolset is designed to allow you to visually edit your project and publish it with incredible simplicity.

Let's take a look at the high level workflow:

<table class="table">
    <tr>
        <td>
            <img alt="Create artwork" width="320" src="/images/platform/workflow/workflow_art.jpg"></img>
        </td>
        <td>
            <h2>1 - Create and Upload Assets</h2>
            <ul>
                <li>Generate 3D models using industry standard applications.</li>
                <li>Export models to FBX.</li>
                <li>Upload FBX to PlayCanvas using a simple drag and drop control.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <img alt="Create game entities" width="320" src="/images/platform/workflow/workflow_design.jpg"></img>
        </td>
        <td>
            <h2>2 - Build Game Entities</h2>
            <ul>
                <li>Create game entities in PlayCanvas Editor.</li>
                <li>Add components to determine an entity's behavior.</li>
                <li>Set a component's attributes to fine tune an entity.</li>
                <li>Preview your changes live in-game using a live link.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <img alt="Tag scripts on entities" width="320" src="/images/platform/workflow/workflow_scripting.jpg"></img>
        </td>
        <td>
            <h2>3 - Script Game Entities</h2>
            <ul>
                <li>Tag any entity with modular scripts.</li>
                <li>Edit scripts in the PlayCanvas in-browser code editor or work in your choice of editor via a local HTTP server.</li>
                <li>Synchronize code with Github or Bitbucket.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <img alt="Publish game" width="320" src="/images/platform/workflow/workflow_publish.jpg"></img>
        </td>
        <td>
            <h2>4 - Publish Game</h2>
            <ul>
                <li>Export your game at any time.</li>
                <li>Quickly publish your game to PlayCanvas' application servers.</li>
                <li>Download your zipped exported game and host it on any web server.</li>
            </ul>
        </td>
    </tr>
</table>

## Assets

Your projects are created and managed in the cloud by PlayCanvas. As you build your web app, you will want to start incorporating 3D assets (a car, a spaceship, an animated character, etc). The PlayCanvas Platform allows you to import assets that have been exported from just about any 3D content creation tool, including 3D Studio Max, Maya, SketchUp and Blender. Once these assets are imported into your asset library, you can quickly deploy them into your app.

The other major asset type in a PlayCanvas project is code. PlayCanvas offers the developer a wide variety of pre-baked functional components that can be bolted together to construct game entities. But it is possible to customize and extend the default behaviour of these components through the writing of scripts. For example, you might write a script that defines the handling of a vehicle or the AI of a non-player character. The code can be developed and served from a local web server or pulled from a linked repository hosted by BitBucket or GitHub.

## Publishing

Lastly, you will want to publish your PlayCanvas game. You have complete freedom and control over how and where your game is published. The options are:

* Publish to playcanvas.com with the click of a button.
* Download your game as a zip archive. You can then host the game yourself or deploy it to mobile app stores or web portals such as the Chrome Web Store.

Find out more in the [publishing][1] section.

## Supported Browsers

PlayCanvas was always designed to be plugin free, running natively in the browser. The client-side codebase is 100% JavaScript and built entirely on HTML5 and related APIs (such as WebGL). Why was this important?

* Mobile/tablet devices do not permit plugin installation and continue to improve support for HTML5.
* PlayCanvas web apps load seamlessly without a plugin install or plugin load step.
* PlayCanvas web apps run in a standard [DOM][2] element (a canvas) and you can composite it on the page or transform it via CSS.
* No dependency on a third-party plugin technology which may change over time. The only dependency is on the browser itself.

So obviously this is all very good news, but you want your web app to run everywhere. Any device, any browser. At the time of writing, HTML5 continues to be adopted on more and more devices in more and more browsers. The browser requirements are currently as follows:

<table class="table table-striped table-bordered">
    <tr><th>Browser</th><th>Version</th><th>Win</th><th>MacOS X</th><th>Linux</th><th>Chrome OS</th><th>Android</th><th>iOS</th></tr>
    <tr><td style="text-align:center"><a href="http://www.google.com/chrome/">Chrome</a></td><td style="text-align:center">9.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.mozilla.org/firefox/">Firefox</a></td><td style="text-align:center">4.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">IE</a></td><td style="text-align:center">11.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="https://www.microsoft.com/en-gb/windows/microsoft-edge">Edge</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.apple.com/safari/">Safari</a></td><td style="text-align:center">5.1+</td>
        <td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.opera.com/">Opera</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td>
    </tr>
</table>

If you are in doubt as to whether your browser supports WebGL (required to run PlayCanvas), visit [this page][3]. If you see a spinning cube, you are all set!

[1]: /user-manual/publishing
[2]: /user-manual/glossary/#dom
[3]: http://get.webgl.org/

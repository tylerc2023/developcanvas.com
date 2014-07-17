---
title: Getting Started
template: page.tmpl.html
---

In order to learn the basics of PlayCanvas Platform, let's build the following simple 3D web app:

<iframe id='cube-frame' src="http://apps.playcanvas.com.s3-website-eu-west-1.amazonaws.com/playcanvas/tutorials/cube/"></iframe>

## Your Profile

![Profile][profile]

Once you've signed in you will be greeted with your profile page. Your profile page shows you all the projects you have access to, this includes all projects you have created and any that you have been given permission to access.

![Project List][project_list]

A Project is a collection of:

* **Packs** - An collection Entities used to build up a part of your game. A Pack could be a single level or your entire game. It depends.
* **Assets** - 3D Models, textures, images, sound files and anything other assets you use in your game.
* **Code** - Your source code. You can either write code using the PlayCanvas built-in code editor, or you can sync to your project using code-hosting services like Github or Bitbucket.
* **Exports** and **Apps** - Your applications can be exported to archives ready to be deployed, or published directly to PlayCanvas servers.

## Creating a New Project

On your profile page, press the "+" button to create a new Project. This takes you to a page where you set the details of your new project:

* **Starter Kit** - Starter kits are great ways to get a project up and running quickly. If you want to create a platformer or simply display a 3D model that you've made, you can use a starter kit.
* **Name** - The name is used to build the URL for your project. For example, if user 'joebloggs' created a project called 'spacewar', the project can be found at http://playcanvas.com/joebloggs/spacewar
* **Description** - A short description of your project that will appear on the main project page.
* **Private** - The project visibility. By default, new projects are public allowing other community members to check out your work. Checking this option will allow you to work in private but note that you will need a [Pro account](https://playcanvas.com/plans) to use this feature.

Choose "No Starter kit" and set a name and description for your project. Then click the "Create" button and you are taken to the project home page.

## A Simple Example: Spinning Cube

Now we're ready to build a simple 3D web app: a spinning box!

The first thing to do is create a new pack. A pack represents the data required to start up the PlayCanvas engine. It could represent an entire game or perhaps a single level of a game. It's up to you, but you will require at least one pack. Therefore, on the project home page, select the 'New Pack' button at the top right of the 'designer' tab. This opens a new browser tab and fires up the visual editor: PlayCanvas Designer.

### Packs, Entities and Components

A PlayCanvas Pack is effectively a collection of 'things' that make up your app. We call these things Entities and they represent the functional objects in your app: a vehicle, a character, a light, a camera, etc. Entities are shown in the 'Pack Explorer' panel in the Designer's interface. It's represented by a tree control because entities are hierarchical. You can parent one to another and if the parent moves, the children move with it.

![Pack Explorer][pack_explorer]

Entities are built from Components. A Component powers an Entity with a particular piece of functionality. For example, a Component can add a graphical model to an Entity, it can animate the model, it can add a light source to an Entity, it can add an audio source, and so the list goes on.

Let's begin by naming our new Pack:

* Select the root node 'Untitled' in the Pack Explorer.
* In the Attribute Editor below the Pack Explorer, rename the Untitled root node to something more meaningful such as 'Box Test' and hit Enter.

Now, for our spinning box experiment, we will need 3 Entities:

* A box.
* A camera (to view the box).
* A light (to give some definition to the box).

Fortunately, Designer automatically creates a directional light and a camera for you when a new pack is created. So here are the steps to create the box:

* Select 'New Entity' -> 'New Box' from the 'Entity' menu. This creates a new child box entity of 'Box Test' in the Pack Explorer.

Now let's set up the camera so that it is viewing the box properly:

* Select the camera entity, entitled 'Camera', in the Pack Explorer to activate the Attribute Editor.
* In the Attribute Editor, set 'Position:' to 0, 0, 5.

Finally, let's set up the light to light the box from an angle:

* Select the light entity, entitled 'Directional Light', in the Pack Explorer to activate the Attribute Editor.
* In the Attribute Editor, set 'Rotation:' to 45, -30, 0 to reorient the light.

You should now have someone similar to the following in the 3D View:

<img alt="Box in 3D View" width="640" src="/images/platform/designer_cube.png"></img>

### Save your work

Now would seem to be a good time to save your work, right? In actual fact, PlayCanvas Designer continually updates your project on the server and therefore there is no need for a save button. Your work is preserved should you decide to close the Designer tab at any point.

### Previewing Your Work

From Designer, you can quickly preview your work at any time. To do this, press either the 'Launch' or 'Launch Local' button (more on these later) on the toolbar.

![Launch Buttons][launch_buttons]

This will open a new tab and fire up your web app. Based on the steps above, you should see something similar to what is shown below:

<img alt="Cube in engine" width="640" src="/images/platform/designer_cube_preview.jpg"></img>

Once you are done with previewing your pack, you can switch back to Designer and stop your application. The Launch option will display a Stop icon while the app is running, or you can simply close the application's tab.

### Scripting Entities

So far, we've managed to render a box. Now, let's animate it.

The real power and versatility of PlayCanvas comes from the ability to assign scripted behaviour to individual entities. This is done by assigning a script component to an entity and then specifying the JavaScript file that executes in relation to that entity. In order to get the box to spin, we need to write some code that executes every frame, rotating the box on its vertical axis by a small amount at a time.

#### Hosted or Local code?

There are two main ways of writing code for PlayCanvas. The first and simplest is to use the PlayCanvas built-in code editor, which saves directly to our servers. The second is to edit code in you favourite text editor and run a local web-server.

For this tutorial we're going to stick to editing code using PlayCanvas, but for more details see our [Scripting Workflow](http://developer.playcanvas.com/engine/workflow.html) page.

First we need to create a script component and create a new script to edit.

* Select the entity called 'Box' in the Pack Explorer.
* Select the following menu item: 'Entity' -> 'Add Component' -> 'script'.
* In the Script section of the Attribute Editor, click the top line of the URLs field to edit the filename. Set the URL attribute of the script component to 'spinner.js' and hit Enter.
* Click on the name of the script 'spinner.js' and the PlayCanvas code editor will open in a new tab.

In the code editor update the script template to match the code below (you just need to fill in the body of the update function):

~~~javascript~~~
pc.script.create("spinner", function (context) {

    var Spinner = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
    };

    Spinner.prototype = {
        update: function (dt) {
            // Rotate 90 degrees around the world Y axis every second
            this.entity.rotate(0, 90 * dt, 0);
        }
    };

    return Spinner;
});
~~~

Once you've edited the code, press the "Save" button in the code editor and switch back to the Designer tab.

With that done, you can select the Launch button from the toolbar once again. This time, you should see your box rotating on the spot. Congratulations, you have built your first PlayCanvas app!

[profile]: /images/platform/profile.jpg "Profile"
[project_list]:  /images/platform/project_list.jpg "Project List"
[collaborators]: /images/platform/collaborators.png "Collaborators"
[pack_explorer]: /images/platform/pack_explorer.png "Pack Explorer"
[launch_buttons]: /images/platform/launch_buttons.png "Launch Buttons"

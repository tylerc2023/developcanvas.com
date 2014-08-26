---
title: Basic Materials
template: tutorial-page.tmpl.html
---

Materials are what define the appearance of the surfaces of a 3D Model. At its very simplest a Material sets the color of the polygons, at its most complex a material can simulate the surface of an ocean or the way that light passes through glass.

In this tutorial, we'll walk through how you create a Material, assign it to a primitive shape, and edit the Material's properties. Before starting you'll first create a Project and a new Pack, just like in the [Getting Started][getting_started] guide.

## Step 1 - Add a cube to your scene

Select the root Entity of your Pack. At the start this will be called "Untitled". In the Attribute Editor rename the Entity to something meaningful, like "Material Tutorial".

Select 'New Entity' -> 'New Box' from the 'Entity' menu. This creates a new child box Entity in the Pack Explorer.

## Step 2 - Create a new Material

Create new material directly from the PlayCanvas Designer interface. Bring up the Asset Explorer (Press A or select Toggle Asset Explorer from the View menu) and press the + button next to the materials filter.

![Add Material][add_material]

This creates a new Material Asset and opens up the Material Editor on the right-hand side of the screen. In the Material Editor rename the Material to "Box Material".

## Step 3 - Select the existing cube material

There are two ways to select a Material from a model in the 3D view. The first way is to right-click on the the model in the 3D view, and select "Edit Material". The second is to left-click once to select the Entity, and then left-click again on the Material which you wish to edit.

When selected, the Material Editor will appear in the left column of the Designer.

![Assign Material][assign_material]

When you first select a primitive object, the Material slot will be empty like this.

## Step 4 - Assign the material to the mesh

Click the + button in the Asset picker and select your new material. The Material Editor will show a preview of the Material and some attribute options for you to edit. The Material created in PlayCanvas is what is known as a "Phong" Material. This is the most common type of Material used in 3D modelling programs.

## Step 5 - Change the color of the material

To change the color of the Material we will want to edit the *Diffuse* property of the material.

With the Material selected, open the Diffuse attribute section and modify the color to be a nice shade of red.

![Diffuse Color][diffuse_color]

You'll see the color of the cube change as you edit the color of the diffuse property

## Bonus - Other material properties

The diffuse color isn't the only property you can edit. Try editing the **specular color** and the **emissive color** and see what effects you can achieve.

## Bonus - Add textures to the material

Change the color of the material is a good start, but you'll quickly want more detail than a flat color. That is where texture maps come in.

Download & save these sample textures:

<a href="/downloads/proto_orange.png"><img style="float:left; margin-right: 32px;" src="/downloads/proto_orange.png" width="128px"/></a>
<a href="/downloads/proto_gray_n.png"><img src="/downloads/proto_gray_n.png" width="128px"/></a>

Then upload them to your project by dragging the files into the Designer.

Once they're uploaded it's time to assign them to texture slots on the Material. Select the Material as before and open up the Diffuse section. Instead of modifing the color, open the Texture picker and assign the `proto_orange` texture. Then open the Normal section and in the Texture slot assign the `proto_gray_n` texture.

You'll see something that looks a little like this:

![Cube][diffuse_normal_cube]

Try modifying the **Tiling** and **Offset** properties to effect the way the texture is wrapped around the cube.

See the [Basic Materials project pack here][pack] in the [PlayCanvas tutorials project][tutorials]. Left-click the 'Box' item in the Pack Explorer and press F to focus if the view is zoomed-out too far.

[getting_started]: /getting-started
[add_material]: /images/content_creation/add_material.png
[assign_material]: /images/content_creation/assign_material.png
[diffuse_color]: /images/content_creation/material_editor.png
[diffuse_normal_cube]: /images/content_creation/diffuse_normal_cube.jpg
[pack]: http://playcanvas.com/playcanvas/tutorials/designer/pack/14ebeca6-1d5f-11e4-9fba-22000a4a0339
[tutorials]: https://playcanvas.com/playcanvas/tutorials

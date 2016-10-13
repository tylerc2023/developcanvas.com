---
title: 制作一个简单的游戏 - Part 2
template: tutorial-page.tmpl.html
position: 11
---

<iframe src="https://playcanv.as/p/KH37bnOk?overlay=false"></iframe>

*你可以在这里找到[完整项目] [16]。 如果你还没有看过[第1部分] [1]请先阅读它。

## 材质设置

我们保证这个游戏的图形需求非常简单，因此没有太多的设置，但我们还是不得不位球、背景和前景设置一些材质资源。

### 什么是材质?

材质是PlayCanvas中的一种资源，它描述了3D模型表面在呈现到屏幕时的外观的方式。 材质决定了模型表面的颜色，也决定了表面与光相互作用的方式。 例如，您可以将材质设置为光滑金属或粗糙橡胶。 PlayCanvas有一个内置的材质，称为物理材质，它可以覆盖90％的材质用例。 当你需要更高级的效果，可以选择通过使用GLSL着色器代码来编写创建自己的材质。

### 立方体贴图

在我们转到材质之前，我们先进行立方体贴图资源的设置。 立方体贴图是由多维数据集表面上的6个纹理组成的资源。 你可以认为这是远离你的场景的环境。 PlayCanvas物理材质可以使用立方体贴图做基于图像的照明。 这使用立方体地图中的颜色来点亮场景中的材质。 例如在我们的场景中，立方体贴图有一个蓝色的天空和一个绿色的草地表面。 所以我们的球将从上面点亮蓝色，从下面点亮绿色。你可以在我们的文档中 [阅读更多] [7]。

![立方体贴图][8]

要设置立方图，首先从新建资源菜单创建立方体资源，分配6个纹理到立方体贴图的每个面。 当您的立方体地图分配了所有6个面时，按下“预过滤器”按钮。 **所需的预滤波使立方体地图正常工作！**

## 足球实体

![足球][3]

足球是我们从[PlayCanvas素材库] [2]导入的3D模型。 足球材料已经将主要部分为你设置好了，但你可能需要做一些简单的更改。 让我们看看足球使用的每个贴图。

#### 漫反射

![漫反射][4]

漫反射贴图定义了材质表面的颜色。 在本案例中，它是足球的黑白图案。

#### 环境

![环境][9]

我们将快速地跳转到环境部分，因为在这里我们需要看到的镜面变化的影响。 要设置环境，请在材质中的立方体贴图的插槽上拖入Cubemap资源。

#### Specular

![Specular][5]

The specular section determines how the material interacts with lights. There are two "workflows" for specular, the "Metalness workflow" and the "Specular workflow", you can find more information in our [documentation][6]. For the football we are using Metalness, so be sure to check the "Use Metalness" box. Our football is not made of metal, so we slide the metalness slider all the way down to 0. Then we use the glossiness slider to set our rough/smooth the material should be. We've set this to about halfway which gives a nice shine to the ball, but not completely smooth.

#### Normal

![Normal][10]

The final texture map we apply is the normal map. The normal map is used to add details to the model. In this case, the separate patches of the football are not modelled in the geometry (which is smooth sphere) but they are in the normal map. This means the ball will be correctly lit as if the patches were there, but without the overhead of lots of extra polygons.

## Backdrop Material

![Backdrop][11]

The backdrop material is much simpler, we have only one texture map.

#### Emissive

![Emissive][12]

The emissive map sets the color at the surface as if it was emitting light of that color. This means that lights in the scene don't effect how bright an emmissive surface is. Note, an emissive material doesn't affect any other objects in your scene, there is no light actually emitted.

In this case, we don't want the background to be lit, it is just a static scene. So we use the emissive map to do that.

## Overlay Material

![Overlay][13]

The overlay material is even simpler than the backdrop. In this case all we are doing is setting the color off the emissive property

![Emissive][14]

Continue on to [Part 3][15].

[1]: /tutorials/beginner/keepyup-part-one
[2]: http://store.playcanvas.com/
[3]: /images/tutorials/beginner/keepyup-part-two/ball-material.jpg
[4]: /images/tutorials/beginner/keepyup-part-two/ball-diffuse.jpg
[5]: /images/tutorials/beginner/keepyup-part-two/ball-spec.jpg
[6]: /user-manual/graphics/physical-rendering/physical-materials/
[7]: /user-manual/assets/cubemaps/
[8]: /images/tutorials/beginner/keepyup-part-two/cubemap-preview.jpg
[9]: /images/tutorials/beginner/keepyup-part-two/ball-env.jpg
[10]: /images/tutorials/beginner/keepyup-part-two/ball-normal.jpg
[11]: /images/tutorials/beginner/keepyup-part-two/backdrop-material.jpg
[12]: /images/tutorials/beginner/keepyup-part-two/backdrop-emissive.jpg
[13]: /images/tutorials/beginner/keepyup-part-two/overlay-material.jpg
[14]: /images/tutorials/beginner/keepyup-part-two/overlay-emissive.jpg
[15]: /tutorials/beginner/keepyup-part-three
[16]: https://playcanvas.com/project/406050


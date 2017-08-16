---
title: Screens
template: usermanual-page.tmpl.html
position: 2
---

The [Screen Component][1] defines the area that the User Interface is built inside. It's primary responsibilty is to determine how the contents of the Screen (child Entities with Element components) are rendered.

## Screen Space or World Space

The primary choice in render mode for a screen is whether it is rendered in Screen Space or World Space.

![Screen Space][2]

A screen space Screen Component does not follow the normal transform hierarchy. Instead it is rendered as an overlay the camera. This is useful for creating 2D interfaces, HUDs or other game interfaces. There is an option to create a screen space screen in the menu by adding a *2D Screen*.

![World Space][3]

If the Screen Space option is disabled, the Screen is instead rendered using the regular transform hierarchy. Elements are still positioned relative to the screens co-ordinate system, but the screen appears in the 3D world.

## Resolutions and Scaling

As PlayCanvas applications can be viewed on many devices and at many resolutions. For Screen Space components it's important to think about how your user interface will be viewed on different screen sizes.

The simplest way to render the elements is with no scaling.

![iPad No Scaling][4]

In this case, the user interface works well on an iPad resolution. However, what happens when we view this same scene on an iPhone.

![iPhone No Scaling][6]

Because of the smaller resolution of the phone, the user interface runs off the sides of the screen and is unusable.

The Screen component features a Scaling Mode property which is available for Screen Space components. If this is set to *Blend*, then the screen scales the interface to fit the resolution of the screen that it is displayed on. Here is the same interface using Blending on the iPad:

![iPad Scaling][5]

and on the iPhone

![iPhone Scaling][7]

You can see that the user interface now works at both resolutions.

### How is the scale factor calculated?

We use the *Reference Resolution* property of the Screen component as the "ideal" resolution. If your application is displayed at a large resolution that the reference, then it is scaled up. If it is displayed at a smaller resolution than the reference it is scaled down. Because applications may need to respond differently to horizontal or vertical changes we also expose the Scale Blend property which determines which axis to use. Scale Blend of 0 only uses the horizontal resolution, Scale Blend of 1 only uses the vertical resolution, Scale Blend of 0.5 uses both in equal quantities

In these examples you can see how changing the Scale Blend property affects how the interface responds to rotating from Portrait to Landscape

![Scale Blend 0][8]
With a value of 0 the increase in horizontal resolution makes the button too large

![Scale Blend 1][10]
With a value of 1 the decrease in vertical resolution makes the button too small

![Scale Blend 0.5][9]
With a value of 0.5 the two changes are balanced and the button stays the same size


[1]: /user-manual/packs/components/screen
[2]: /images/user-manual/user-interface/screens/screen-space-viewport.png
[3]: /images/user-manual/user-interface/screens/world-space-viewport.png
[4]: /images/user-manual/user-interface/screens/ipad-no-scaling.png
[5]: /images/user-manual/user-interface/screens/ipad-scaling.png
[6]: /images/user-manual/user-interface/screens/iphone-no-scaling.png
[7]: /images/user-manual/user-interface/screens/iphone-scaling.png
[8]: /images/user-manual/user-interface/screens/scale-blend-0.png
[9]: /images/user-manual/user-interface/screens/scale-blend-0.5.png
[10]: /images/user-manual/user-interface/screens/scale-blend-1.png


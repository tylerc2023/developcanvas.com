---
title: User Interface
template: usermanual-page.tmpl.html
position: 9
---

User Interfaces present a unique challenge for graphical applications. There are several options for building User Interfaces in PlayCanvas. 

## Screen & Element Components - Recommended

![Intro][1]

PlayCanvas implements two components which can form the building blocks of a user interface system that runs directly inside your WebGL canvas. The [Screen Component][2] is the user interface container, and the [Element Component][3] is used to add user interface elements. The primary advantage is that your user interface exists in the same context as the rest of your game. This allows interactions between the application and the user interface.

## DOM, HTML & CSS

Web browsers have spent years building effective and optimized systems for rendering complex interfaces to users. For some use cases using the HTML, CSS and the browser DOM are a good fit for yoru user interface. 

The primary downside of using the DOM is performance. The DOM is not designed to be run in a high framerate, real time setting. Page reflows and garbage collection can causes stutters in your application. If you're aiming for a consistent 60fps in your application this is not the best option.

---

The rest of this user guide will focus on the Screen and Element component system and using them to build user interfaces in PlayCanvas.

[1]: /images/user-manual/user-interface/user-interface-intro-sq.png
[2]: /packs/components/screen
[3]: /packs/components/element
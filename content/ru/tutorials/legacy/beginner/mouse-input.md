---
title: Основы управления мышью
template: tutorial-page-legacy.tmpl.html
position: 2
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/input_mouse?overlay=false"></iframe>

*Перемещайте мышь чтобы двигать куб вокруг, нажимайте кнопки мыши для смены цвета куба.

Управление мышью в движке PlayCanvas предоставляется объектом  `pc.Mouse`. Объект мыши предоставляет простой интерфейс для обнаружения движения и нажатия кнопок. Он так же устраняет некоторые несоответствия между браузерами в обработке координат мыши.

Взгляните на сцену 'Mouse Input' в [уроке][1]. Исходный код из файла mouse.js:

~~~javascript~~~
pc.script.attribute("materials", "asset", [], {type: "material"});

pc.script.create("mouse", function (app) {
    var MouseHandler = function (entity) {
        this.entity = entity;
        this.pos = new pc.Vec3();

        // Disabling the app menu stops the browser displaying a menu when
        // you right-click the page
        app.mouse.disableContextMenu();

        // Use the on() method to attach event handlers.
        // The mouse object supports events on move, button down and
        // up, and scroll wheel.
        app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
        app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    };

    MouseHandler.prototype = {
        initialize: function () {
            this.redMaterial = app.assets.getAssetByResourceId(this.materials[0]).resource;
            this.greenMaterial = app.assets.getAssetByResourceId(this.materials[1]).resource;
            this.blueMaterial = app.assets.getAssetByResourceId(this.materials[2]).resource;
        },

        onMouseMove: function (event) {
            // Use the camera component's screenToWorld function to convert the
            // position of the mouse into a position in 3D space
            var depth = 10;
            var cameraEntity = app.root.findByName('Camera');
            cameraEntity.camera.screenToWorld(event.x, event.y, depth, this.pos);

            // Finally update the cube's world-space position
            this.entity.setPosition(this.pos);
        },

        onMouseDown: function (event) {
            // If the left mouse button is pressed, change the cube color to red
            if (event.button === pc.MOUSEBUTTON_LEFT) {
                this.entity.model.model.meshInstances[0].material = this.redMaterial;
            }

            // If the left mouse button is pressed, change the cube color to green
            if (event.button === pc.MOUSEBUTTON_MIDDLE) {
                this.entity.model.model.meshInstances[0].material = this.greenMaterial;
            }

            // If the left mouse button is pressed, change the cube color to blue
            if (event.button === pc.MOUSEBUTTON_RIGHT) {
                this.entity.model.model.meshInstances[0].material = this.blueMaterial;
            }
        }
    };

    return MouseHandler;
});


~~~

### Доступ к мыши

Управление мышью регулируется объектом  `pc.Mouse`. [Фреймворк][2] предоставляет экземпляр класса [приложение][3], который доступен для всех сценариев объектов как:

~~~javascript~~~
app.mouse
~~~

### Отключение меню правой кнопки мыши

В конструкторе нашего сценария для объекта мы отключаем меню, чтобы остановить его появление при нажатии правой кнопки мыши.

~~~javascript~~~
app.mouse.disableContextMenu();
~~~

### Привязка к событиям

Объект  `pc.Mouse` позволяет прослушивать различные события, соответствующие действиям мыши. В этом уроке мы свяжем метод `onMouseMove` для события движения и  `onMouseDown` с событием нажатия кнопки.

Отметьте, в метод для связки событий on() мы передаём `this`. Третий аргумент в объекте используется для события обратного вызова.

~~~javascript~~~
app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
~~~

События доступные для `pc.Mouse`:

* `pc.EVENT_MOUSEUP` - срабатывает при отпускании кнопки мыши
* `pc.EVENT_MOUSEDOWN` - срабатывает при нажатии кнопки мыши
* `pc.EVENT_MOUSEMOVE` - срабатывает на движение мыши
* `pc.EVENT_MOUSEWHEEL` - срабатывает на прокрутку колеса мыши.

Ввод с мыши в браузерах обычно реализуется прослушиванием [DOM][4] событий в элементах Вашей странице. Проблема в том, что в разных браузерах реализация событий немного различается и предоставляет разные данные. Для того, чтобы упростить код, который Вы пишете, движок PlayCanvas позволяет связать обработчик событий с обработчиком мыши вместо прямого использования DOM элемента. Движок поставляет объект `pc.MouseEvent`, когда срабатывает событие, совместимое со всеми браузерами. Если Вам нужно первоначальное событие DOM, оно доступно как свойство `event`  в `pc.MouseEvent`.

### Движение мыши

Первое событие обработчика - это `onMouseMove`. Оно срабатывает всякий раз, когда мышь перемещается. В событии `EVENT_MOUSEMOVE` объект `MouseEvent` будет иметь текущие координаты мыши  `x` и `y` и также изменение позиции с последнего события в `dx` и `dy`. В нашем уроке мы используем текущие координаты мыши и двигаем куб в позицию курсора.

### Кнопки мыши

Второе событие обработчика - `onMouseDown`. Оно срабатывает всегда, когда одна из трёх кнопок мыши нажата. В событиях `EVENT_MOUSEDOWN`  и `EVENT_MOUSEUP` объект `MouseEvent будет иметь свойство `button`, оно содержит кнопку, которая была нажата/отпущена. Может быть одно из следующих значений:

* `pc.MOUSEBUTTON_NONE`
* `pc.MOUSEBUTTON_LEFT`
* `pc.MOUSEBUTTON_MIDDLE`
* `pc.MOUSEBUTTON_RIGHT`

В нашем уроке мы изменяем цвет куба в зависимости от нажатой кнопки.

### Попробуйте

Попробуйте запустить урок в полноэкранном режиме [тут][5] или наверху этой страницы. Двигайте мышь чтобы смещать куб и нажимайте левую, среднюю и правую кнопки мыши для изменения цвета.

[1]: https://playcanvas.com/project/186/overview/tutorials
[2]: /user-manual/glossary#framework
[3]: /user-manual/glossary#app
[4]: /user-manual/glossary#dom
[5]: http://apps.playcanvas.com/playcanvas/tutorials/input_mouse


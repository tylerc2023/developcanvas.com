---
title: Manipulating Entities
template: tutorial-page.tmpl.html
tags: basics
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg
---

В этом уроке мы Вам покажем как можно изменять положение сущности, её ориентацию в пространстве и размер.

Сущности - это базовая форма для большинства приложений созданных в PlayCanvas. Сущность может представлять собой что угодно, персонажа героя, пули, врага, или просто точку в пространстве.

Сущности - это узлы графа, они могут наследовать своё поведение из `pc.GraphNode`. Все манипуляции, которые мы будем применять ниже, также могут применяться на узлы графа.

Одна из основных операций, которую Вы должны будете выполнить над сущностями - это изменение матрицы преобразования. Свойство локальной трансформации определяет позицию, ориентацию и размер сущности, также влияет на все дочерние сущности. Изучение того, как использовать трансформации необходимо чтобы делать интересные интерактивные приложения.

### Локальные и мировые координаты

Важная часть понимания, как манипулировать сущностями - знание локальных и мировых координатных систем. Мировая координатная система едина для всех сущностей, она имеет начало в `(0,0,0)` и фиксированную ориентацию вверх - `(0,1,0)`. Локальная система координат относится к самой сущности. Так, локальное начало - позиция сущности, и ориентация - это ориентация сущности в пространстве.

<img src="/images/tutorials/world.jpg" style="float:left;" alt="World co-ordinates"/>
<img src="/images/tutorials/local.jpg" style="float:right;" alt="Local co-ordinates"/>
<div style="clear:both" />
*Мировые и локальные координатные системы*
<br />

### Иерархия

Важная часть понимания системы сущностей, это понимание графа сущностей, или иерархии. Так как сущности - узлы графа, которые собраны вместе в графе, или иерархии, состоящей из родителей и детей. Каждая сущность может иметь один родительский объект, и несколько дочерних. Дочерняя сущность наследует информацию о трансформации родительской. Мировая матрица преобразований сущности является результатом умножения локальной трансформации на мировую от родительского объекта. Например, если дочерняя сущность имеет локальное перемещение `(1,0,0)` и родитель имеет локальные координаты в `(0,1,0)`, позиция в мировых координатах дочернего объекта будет - `(1,1,0)`.

## Позиция

Получение позиции сущности

~~~js~~~
// Получаем позицию сущности, относительно координатной системы родителя
var lp = entity.getLocalPosition();

// Получаем позицию в мировом пространстве
var wp = entity.getPosition();
~~~

Оба метода возвращают pc.Vec3`  (вектор, состоящий из массива [x,y,z]).

Установка положения сущности.

~~~js~~~
// Устанавливаем позицию, относительного координатной системы родителя
entity.setLocalPosition(x, y, z);

// Устанавливаем позицию в мировом пространтсве
entity.setPosition(x, y, z);
~~~

### Перемещение сущности

Чтобы передвигать сущность, Вы можете прибавить к позиции значение, или используйте вспомогательные функции и 'translateLocal'.

~~~js~~~
// Переместить сущность на 1 единицу по оси X в мировом пространстве
entity.translate(1, 0, 0);

// Сместить объект на 1 единицу по оси Z локально
entity.translateLocal(0, 0, 1);
~~~

## Ориентация

Для установки ориентации сущности вы можете либо применить абсолютное вращение, либо добавочное вращение.

Установка абсолютного значения поворота может быть достигнута использованием либо [углов Эйлера][1], либо [кватернионов][2]. Объяснения в Википедии этих двух математических представлений поворота немного трудны для понимания, однако основные пункты просты. Вот важные факты:

** Углы Эйлера **

* Углы Эйлера это набор трёх углов вокруг осей X, Y и Z в координатной системе в *определённом порядке*.
* Если смотреть вниз оси координат , положительный угол Эйлера приведет к вращению против часовой стрелки вокруг этой оси.
* Углы Эйлера легки в понимании, так как Вы можете визуализировать этот эффект в голове.

** Кватернионы **

* Кватернионы хранятся как 4 числа и представляют любую ориентацию в 3D пространстве.
* Их сложно задавать напрямую, но можно установить через углы Эйлера, матрицы поворота или через представление ось-угол.
*  Несмотря на то, что их трудно визуализировать, они полезны, так как являются надежными и могут быть быстро интерполированны (при анимации вращения).

При программировании сущностей наиболее вероятно, что Вы захотите использовать поворот объекта используя углы Эйлера. Например:

~~~js~~~
// Поворот на 30 градусов против часовой стрелки вокруг оси X родительской 
// координатной системы, на 45 градусов вокруг её оси Y и, наконец, на 60 градусов 
//вокруг оси Z
entity.setLocalEulerAngles(30, 45, 60);

// Поворот на 30 градусов против часовой стрелки вокруг оси X мировой системы 
// координат, на 45 градусов вокруг Y и наконец, 60 градусов вокруг мировой оси Z
entity.setEulerAngles(30, 45, 60);
~~~
Тем не менее, если Вы хотите, чтобы установить вращение сущности в форме кватернионов, можете использовать следующие функции:

~~~js~~~
// Создаём переменную для поворота
var q = new pc.Quat();
// Устанавливаем сущности тот же поворот, что и у родителя, эквивалент:
// entity.setLocalEulerAngles(0, 0, 0)
entity.setLocalRotation(q);

// Устанавливаем сущности отсутствие вращения в мировой координатной системе
// эквивалент: entity.setEulerAngles(0, 0, 0)
entity.setRotation(q);
~~~

Чтобы вращать сущность постепенно по отношению к мировому пространству Вы можете использовать 'rotate ' или же 'rotateLocal' для вращения по отношению к локальным осям Вашего объекта.

Для примера, вращение сущности на 180 градусов вокруг мировой оси вверх:

~~~js~~~
entity.rotate(0, 180, 0);
~~~

Или поворот сущности на 90 градусов вокруг локальной оси X:

~~~js~~~
entity.rotateLocal(90, 0, 0);
~~~

## Масштаб

Чтобы масштабировать сущность Вы просто должны вызвать следующую функцию:

~~~js~~~
// Масштабировать сущность по оси Y в 2 раза
entity.setLocalScale(1, 2, 1);
~~~

И здесь немного более интересный пример:

~~~js~~~
// Масштабирование сущности используя функцию синуса
this.timer += deltaTime;
var s = Math.sin(this.timer) + 1;
entity.setLocalScale(s, s, s);
~~~

Обратите внимание, что Вы  не можете устанавливать масштаб сущности в мировом пространстве.

[1]: http://en.wikipedia.org/wiki/Euler_angles
[2]: http://en.wikipedia.org/wiki/Quaternion

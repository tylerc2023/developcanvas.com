---
title: Templates
template: usermanual-page.tmpl.html
position: 7.4
---

Templates (or prefabs) allow you to speed up your development by creating Entities that are reusable. You can place multiple instances of a Template in your Scene and if you make any changes and apply them to the Template Asset, all instances of that Template will be updated.

<iframe width="560" height="315" src="https://www.youtube.com/embed/2HV8Ib6wYRc" frameborder="0" allowfullscreen></iframe>

## Creating Templates

To create a new Template Asset you can right-click on any Entity in your Scene and select Template &rarr; New Template. This will create a new Template Asset and add it to your currently selected folder in the Asset Panel. The Entity you right clicked will become an instance of that new Template Asset automatically.

## Adding Templates in your Scene

You can drag & drop a Template Asset in your scene or right click under an Entity in the Hierarchy and select Template &rarr; Add Instance. Then you can select the Template Asset and that will an instance of it under the clicked Entity.

When an Entity is an instance of a Template it will have a slightly difference appearence in the Hierarchy:

![Template Instance][1]

The root Entity of the Template Instance and all its children will have a different icon showing that they are part of the same Template.

When you select the root of the Template Instance you will notice the following properties in the Entity Inspector:

![Template Inspector][2]

## Updating Templates

In order to make changes to a Template Asset you first have to add an instance of it in the Editor. Then you can change the instance as you see fit and in the end apply the changes to the Template Asset.

### Template Overrides

When you make changes to a Template instance or its children this will generate Template Overrides. There are various types of overrides:
* *Field override*: An override where the value of a field of the Entity or its Components differs to the one in the Template Asset.
* *New Entity override*: An Entity that you have added as a child to the Template instance that does not exist in the Template Asset.
* *Deleted Entity override*: An child Entity that you have deleted from the Template instance.

When you apply overrides to the Template Asset then they stop being overrides and become part of the Template Asset.

You can see the summary of the overrides by selecting the root of the Template Instance and looking at the Entity Inspector:

![Overrides][3]

Also notice the little dot on the right of the field that has been overriden. You can also see a more detailed list of all the overrides by clicking View Diff. See [Overrides Diff View][4] for more information.

### Applying Overrides

To apply overrides select the root of the Template Instance and click Apply All on the Entity Inspector. You can also right click on the root of the Template Instance and select Template &rarr; Apply To Template.

Alternatively you can open the [Override Diff View][4] and apply overrides from there too.

Any overrides you apply to the Template Asset will propagate to other instances of the Template Asset in any scene that these might be.

*Note: You cannot currently undo the action of applying overrides to a Template Asset.*

### Reverting Overrides

To revert all overrides select the root of the Template Instance and click Revert All on the Entity Inspector.

You can also revert indidual overrides in the same way that you can apply individual overrides above.

### More details on Overrides

When you create an override then the property that it overrides gets protected from updates to the Template Asset. For example. say your Template Instance looks like so:

![Template Instance][1]

You modify the position of Tree1/Sphere. This creates an override on the position of the Sphere entity. You then create another instance of the Template Asset and you change the position of the Sphere to something else. If you apply the override from the second instance then that will not update the position of the first instance since it is overridden and protected. In order for the first instance to pick up position changes for the Sphere Entity you have to revert the override first.

## Instantiating At Runtime

You can instantiate Template Assets at runtime like so:

```javascript
var templateAsset = this.app.assets.get(templateAssetId);
var instance = templateAsset.resource.instantiate();
this.app.root.addChild(instance);
```

You can also use Script Attributes to pass Template Assets to your scripts instead of searching for them by ID.

[1]: /images/user-manual/templates/hierarchy.png
[2]: /images/user-manual/templates/inspector.png
[3]: /images/user-manual/templates/override.png
[4]: /user-manual/templates/diff

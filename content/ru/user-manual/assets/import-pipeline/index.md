---
title: Asset Import Pipeline
template: usermanual-page.tmpl.html
position: 2
---

Some assets are uploaded in source format and need to be converted into a "target" format before they can be used in a game at runtime. This process is called *Importing*. For example, a 3D model can be uploaded as an FBX file, but must be converted into a PlayCanvas compatible model file before it can be loaded in the game.

Some assets don't need to be imported before they can be used. For example a PNG image can be used as a texture immediately.

## Asset Tasks

When a source asset is uploaded that needs to be imported. PlayCanvas starts an Asset Task to perform this import process on our server. You can see the asset tasks that you are currently running in the Asset Panel.

![asset tasks][1]

There are a variety of options available to tune the behavior of the import pipeline to suit your needs.

<img src="/images/user-manual/assets/import-pipeline/asset-tasks.png" width="360px">

### Search related assets

When you update an source asset by uploading a new version of the file. There are two possible behaviors for how we update the target assets that are created by the import pipeline.

* If **Search related assets** is enabled, the pipeline will update target assets no matter what folder they are located in.
* If **Search related assets** is not enabled, the pipeline will only look for the target assets in the same folder as the source asset.

So, if you leave this enabled, you are able to organize your source and target assets into folders and be sure that when you update a source assets it will update all related assets.

### Assets default to preload

Newly created assets will automatically be set to [preload][2] or not depending on whether this option is enabled or not. The exception to this are JavaScript script files which will always be set to preloaded when created.

## Texture Import Settings

These options only affect the importing of images and textures.

### Texture POT (Power of Two)

When this option is enabled textures that are not a power of two will be converted to the nearest power of two resolution when they are imported.

### Create Atlases

Images that are uploaded will be imported as a texture atlas instead of a normal texture asset. This is a useful time saver when uploading many spritesheets or UI assets.

## Model Import Settings

These options only affect the importing of model or scene files (e.g. FBX, Collada, obj, etc)

### Preserve material mappings

When a model file is updated or reimported, the Editor will try to preserve the material mappings that were set on it.

### Overwrite Models

When a model file is updated or reimported this option determines whether or not the target model file is overwritten. The default behavior is to overwrite with the new model.

### Overwrite Animations

When a model file is updated or reimported this option determines whether or not a animations created from the model are overwritten. The default behavior is to overwrite with the new animations.

### Overwrite Materials

When a model file is updated or reimported this option determines whether or not materials created from the model are overwritten. The default behavior is to leave existing materials.

### Overwrite Textures

When a model file is updated or reimported this option determines whether or not textures created from the model are overwritten. The default behavior is to overwrite with the new textures.

### Convert to GLB

Enabled by default on new projects, imported models and animations will create GLB model and animation assets instead of the older, deprecated JSON format.

### Import Hierarchy

Only available if using [Convert to GLB](#convert-to-glb) option. When a model file is imported, a template asset is created that contains the full hierarchy of the model as entities allowing to you to manipulate them directly in the Editor. See more information about this feature [here][3].

## Animation Import Settings

Please refer to the [Animation section][4] for more details.

[1]: /images/user-manual/assets/import-pipeline/asset-tasks-full.jpg
[2]: /user-manual/assets/preloading-and-streaming/
[3]: /user-manual/assets/import-pipeline/import-hierarchy/
[4]: /user-manual/assets/animation/


---
title: Hosting using a CDN
template: usermanual-page.tmpl.html
position: 8
---

When deploying your PlayCanvas application for self-hosting it is often necessary to separate the location your application is served from (the index.html) from the assets that the application loads. For example, a Content Delivery Network (CDN) is used to make sure that assets are delivered from a server that is geographically close to the user's computer. This makes your application load much more quickly. This guide will show you how to configure your PlayCanvas application to use a separate location for your assets.

The first step is to download a web build of your application following the steps in [the publishing guide][1]. Then we start by making changes to the `index.html` file in the downloaded build.

## Serving Assets from another location

The simplest change to make is to load all assets from a different location. This is done by setting the `ASSET_PREFIX` property in your index.html

![index.html][2]

The `ASSET_PREFIX` will be prepended to all request that are made for an asset (including a scene) both during the preload phase and during runtime. For example, you should set this to the root folder of your CDN asset store.  In the above example, previously an asset that would had a URL like `files/123456/1/texture.jpg` will now be loaded from `http://keepy-up-cdn.example.com/files/123456/1/texture.jpg`.

## Additional URLs

There are a few remaining files that are referenced directly by the `index.html`. In particular, the style sheet, the PlayCanvas javascript engine, the application `config.json` and the `__loading__.js` and `__start__.js` application scripts. Update your index.html as seen below.

![index.html][3]

## Copy Files to CDN

Next you should copy all the required files into the new location on your server. These files are loaded using the `ASSET_PREFIX`:

`__game_scripts.js`, scene json (e.g. `123456.json`), assets (everything inside the `files` folder) and `logo.png` the default loading screen logo.

And these files are referenced by the index.html: `playcanvas-stable.min.js`, `config.json`, `__loading__.js`, `__start__.js` and `styles.css`.

![CDN files][4]

You should copy all these files onto your CDN hosting service.

## Setting up CORS

Your application is now ready to load files from a separate server. The final step to tackle is to ensure your server is correctly set up to serve Cross-Origin Resource Sharing (CORS) headers. CORS is a security feature of the browser which means that by default a web page on `http://example.com` can't download files from a web page on `http://keepy-up-cdn.example.com/` because they have a different "origin". To get around this, you must set the server at `http://keepy-up-cdn.example.com/` to serve CORS headers that tell the browser that other pages are allowed to download the content.

Setting up CORS is different depending on which CDN or server you are using. You will need to check the documentation of your server or CDN provider to find out how to set up CORS header. For example, the page for Amazon Web Services CORS settings is [here][5]

[1]: /user-manual/publishing/web/self-hosting
[2]: /images/user-manual/publishing/web/cdn-index.jpg
[3]: /images/user-manual/publishing/web/cdn-more.jpg
[4]: /images/user-manual/publishing/web/cdn-files.jpg
[5]: http://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html

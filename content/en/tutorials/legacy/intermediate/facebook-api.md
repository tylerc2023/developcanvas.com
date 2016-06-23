---
title: Facebook API
template: tutorial-page-legacy.tmpl.html
---

<iframe src="http://playcanv.as/p/W0bjEQW2"></iframe>
*Log in with facebook to see your photos in a 3D sculpture*

PlayCanvas is a perfect partner for building WebGL Facebook games and applications. Facebook is a great place to find a large audience for your games and PlayCanvas lets you create fast and performant games that are optimized for the web.

In this tutorial we'll show you how to integrate the Facebook API into your PlayCanvas application. Once you have access to the Facebook API there are many possibilities. For example, sharing games with friends, posting stories to Facebook and more.

## Facebook Plugin

There is a plugin to help you integrate Facebook available [on github][1]. This simplifies the work of loading the Facebook javascript SDK. Just attach the plugin script `lib/facebook-setup.js` to an entity in your scene and listen for the `fb:init` event and you'll know the API is ready. More instruction are available on the [github page][1].

```javascript
  app.on("fb:init", function () {
    // use API
    FB.login();
  }, this);`
```

## Login to Facebook

In this example we've implemented a user interface to let you log in and log out of your Facebook account in the application. This is the code in `fb-ui.js`.

```javascript
pc.script.create('fb_ui', function (app) {
    var Fb_ui = function (entity) {
        this.entity = entity;
    };

    Fb_ui.prototype = {
        initialize: function () {
            var self = this;
            this._ready = false;

            // When FB SDK is ready start by checking log in status
            app.on("fb:init", function () {
                this._ready = true;
                FB.getLoginStatus(self.loginChangeFn);
            }, this);

            this._loginHandler = null;
            this._logoutHandler = null;

            this.loginChangeFn = this.loginChangeFn.bind(this);
        },

        // This method is called when ever the log in status is checked or changed
        loginChangeFn: function (response) {
            if (response.status === "connected") {
                this.showLogout();
                this.hideLogin();
                app.fire("app:fblogin");
            } else {
                this.showLogin();
                this.hideLogout();
                app.fire("app:fblogout");
            }
        },

        // Show the dialog with a login button
        showLogin: function () {
            var self = this;

            var login = document.querySelector(".fb-login");
            if (login) {
                login.style.display = "block";
                if (!this._loginHandler) {
                    // log in to FB when the buttons is clicked
                    this._loginHandler = function () {
                        FB.login(self.loginChangeFn, {
                            scope: 'public_profile, user_photos'
                        });
                    };
                    var button = login.querySelector(".fb-button");
                    button.addEventListener("click", this._loginHandler);
                }
            }
        },

        // Hide the dialog with a login button
        hideLogin: function () {
            var login = document.querySelector(".fb-login");
            if (login) {
                login.style.display = "none";
            }
        },

        // Show the dialog with a logout button
        showLogout: function () {
            var self = this;
            var logout = document.querySelector(".fb-logout");
            if (logout) {
                logout.style.display = "block";
                // log out of FB when the button is clicked
                if (!this._logoutHandler) {
                    this._logoutHandler = function () {
                        FB.logout(self.loginChangeFn);
                    };
                    var button = logout.querySelector(".fb-button");
                    button.addEventListener("click", this._logoutHandler);
                }
            }
        },

        // Hide the dialog with a logout button
        hideLogout: function () {
            var logout = document.querySelector(".fb-logout");
            if (logout) {
                logout.style.display = "none";
            }
        }
    };

    return Fb_ui;
});
```

In the initialize step of this code we're listening for the `fb:init` event from the Facebook plugin. Once this has been fired we know that the Facebook SDK has been loaded and is ready to be used. We use three Facebook SDK functions. `FB.getLoginStatus()` reports back whether the user has already logged into Facebook through your application, `FB.login()` pops up a login dialog for the user and `FB.logout()` logs the user out of your application and of Facebook.

<div class="alert alert-info">
It is important to notice here is that `FB.login()` must be called in response to a user action like clicking on a button, otherwise the user will see a pop-up warning.
</div>

The function `loginChangeFn` is a callback which is used to respond to changes in logged in state and using the four show/hide functions we show the correct dialog box depending on the state.

Note, also we fire our own application events `app:fblogin` and `app:fblogout` to tell other parts of the application that the Facebook status has changed.


### Accessing the Facebook API

The file `face-photo.js` uses the Facebook API to retrieve a list of photos from the user and display them in the 3D world.

```javascript
pc.script.attribute("template", "entity", null);

pc.script.create('face_photo', function (app) {
    // Creates a new Face_photo instance
    var Face_photo = function (entity) {
        this.entity = entity;

        this.textures = [];

        // Set the texture loader up so that it can request cross-origin images
        app.loader.getHandler("texture").crossOrigin = "anonymous";

    };

    Face_photo.prototype = {
        initialize: function () {
            // listen for the event that signals we've been logged into facebook
            app.on("app:fblogin", this.reset, this);
        },

        reset: function () {
            var self = this;
            var path = pc.string.format("{0}/photos", FB.getUserID());

            var done = function () {
                var camera = app.root.findByName("Camera");
                if (camera && camera.script.camera) {
                    camera.script.camera.setBestCameraPositionForModel();
                }
            };

            // request the most recent photos from user's facebook account
            FB.api(path, function (lists) {
                for (var i = 0; i < lists.data.length; i++) {
                    count = lists.data.length;
                    var photoId = lists.data[i].id;
                    path = pc.string.format("/{0}?fields=images", photoId);

                    // request more information including source URL of the photos
                    FB.api(path, function (photo) {

                        // create a texture asset using the image URL
                        var asset = new pc.Asset(photo.id, "texture", {
                            url: photo.images[0].source
                        });

                        app.assets.load(asset);

                        asset.ready(function (asset) {
                            self.createPhoto(asset.resource);
                            count--;
                            done();
                        });
                    });
                }
            });
        },

        createPhoto: function(texture) {
            // clone the image template entity
            var e = this.template.clone();
            e.enabled = true;
            var mesh = e.model.model.meshInstances[0];

            // override the emissive map on the mesh instance to display the photo texture
            mesh.setParameter("texture_emissiveMap", texture);

            app.root.addChild(e);
            var MIN = -2.5;
            var MAX = 2.5;

            // randomly position the photo and set the aspect ratio to the same as the texture
            e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));
            e.rotate(90, 0, 0);

            var aspect = texture.width / texture.height;
            e.setLocalScale(aspect, 1, 1);
        }
    };

    return Face_photo;
});
```

Some key parts of this script.

```javascript
app.loader.getHandler("texture").crossOrigin = "anonymous";
```

This line is required to ensure that the resource loader can load textures from a different origin (URL) than the location where the application is hosted (i.e. `playcanv.as).

```javascript
app.on("fb:login", this.reset, this);
```

This line listens for the login event from our `fb-ui.js` file. When the user logs in, we start the process of loading the photos.

```javascript
// request the most recent photos from user's facebook account
FB.api(path, function (lists) {
    for (var i = 0; i < lists.data.length; i++) {
        count = lists.data.length;
        var photoId = lists.data[i].id;
        path = pc.string.format("/{0}?fields=images", photoId);

        // request more information including source URL of the photos
        FB.api(path, function (photo) {

            // create a texture asset using the image URL
            var asset = new pc.Asset(photo.id, "texture", {
                url: photo.images[0].source
            });

            app.assets.load(asset);

            asset.ready(function (asset) {
                self.createPhoto(asset.resource);
                count--;
                done();
            });
        });
    }
});
```

In this section of code we are using the Facebook API to access their [Graph API][2]. In this case, we're loading a list of photos from the logged in user, and then querying each photo to get the URL of the image.

Once we have the URL, we create a new `texture` asset and we load the image.

```javascript
createPhoto: function(texture) {
    // clone the image template entity
    var e = this.template.clone();
    e.enabled = true;
    var mesh = e.model.model.meshInstances[0];

    // override the emissive map on the mesh instance to display the photo texture
    mesh.setParameter("texture_emissiveMap", texture);

    app.root.addChild(e);
    var MIN = -2.5;
    var MAX = 2.5;

    // randomly position the photo and set the aspect ratio to the same as the texture
    e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));
    e.rotate(90, 0, 0);

    var aspect = texture.width / texture.height;
    e.setLocalScale(aspect, 1, 1);
}
```

Finally, once we have loaded the texture asset, we create a new Photo entity and we override the emissive texture with our newly loaded photo texture.

### More ideas

This tutorial shows you how you can load the Facebook API and access Facebook data from within your PlayCanvas application. There are loads more things for you to try using the Facebook API. For example, try sharing Facebook Stories when game events occur, like breaking a high score. Or use the user's friend list to get them to challenge their friends to a game.

Our game SWOOOP shows some of these in action. Try it on [Facebook][4] now.

[1]: http://github.com/playcanvas/playcanvas-facebook
[2]: https://developers.facebook.com/docs/graph-api
[3]: https://developers.facebook.com/docs/javascript
[4]: https://apps.facebook.com/swooop-playcanvas/

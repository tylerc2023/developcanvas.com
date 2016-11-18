var handlebars = require("handlebars");
var request = require("request");

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

var tags;

var generateSlug = function (title) {
    var slug = '';
    var allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -';
    for (var i = 0; i < title.length; i++) {
        var ch = title[i];
        if (allowed.indexOf(ch) >= 0) {
            slug += ch;
        }
    }
    slug = slug.toLowerCase().replaceAll(' ', '-');
    return slug;
};

// Get tagged projects from the public API
var getTaggedProjects = function (done) {
    var tagged = {};
    request('http://playcanvas.com/api/apps?limit=32&tags=tutorial', function (err, response, body) {
        if (err) {
            console.error(err);
            return;
        }

        var samples = JSON.parse(body).result;

        for (var i = 0; i < samples.length; i++) {
            var appUrl = samples[i].url;
            var editorUrl = 'https://playcanvas.com/editor/project/'+samples[i].project_id;
            var projectUrl = 'https://playcanvas.com/project/'+samples[i].project_id+'/overview';
            var name = samples[i].name;
            var tags = samples[i].tags || [];
            tags.splice(tags.indexOf('tutorial'),1); // remove tutorial
            var slug = generateSlug(name);

            // var path = 'en/tutorials/'+slug;
            var url = '/tutorials/'+slug;
            var path = 'en'+url;

            tagged[path] = {
                title: name,
                url: url,
                path: path,
                tags: tags,
                slug: slug,
                appUrl: appUrl,
                editorUrl: editorUrl,
                projectUrl: projectUrl
            };
        }

        done(tagged);
    });
};

var getTags = function (done) {
    request('https://playcanvas.com/api/tags', function (err, response, body) {
        var json = JSON.parse(body).result;
        var tags = json.filter(function (tag) {return tag.kind === 'app'});
        done(tags);
    });
}

module.exports = function makePlugin(dir) {
    // compile the template used to generate pages for tagged projects
    handlebars.registerPartial("template-tagged-project", fs.readFileSync("templates/partials/tutorial-tagged-project.tmpl.html", "utf-8"));
    taggedProjectTemplate = handlebars.compile(handlebars.partials["template-tagged-project"]);

    return function (opts) {
        return function (files, metalsmith, done) {
            var langs = ['en', 'ru', 'ja', 'zh'];

            var index = {}; // index object of tutorials
            var tags = [];
            var tagSet = {};

            for (var i = 0; i < langs.length; i++) {
                var lang = langs[i];
                index[lang] = {};
                // get all tutorials and insert into index
                for (var filepath in files) {
                    if (filepath.indexOf('.DS_Store') >= 0) continue;

                    var file = files[filepath];

                    if (filepath.startsWith(lang+'/'+dir)) {
                        // separate tags
                        var tags = file.tags || '';
                        file.tags = tags.split(',').filter(function (tag) {return !!tag;}).map(function (tag) {return tag.trim()}) || [];
                        // file.tags.forEach(function (tag) {tagSet[tag]=true;});

                        index[lang][filepath] = {
                            title: file.title,
                            url: filepath.replace(lang, '').replace('index.html',''),
                            tags: file.tags
                        }
                    }
                }
            }

            getTags(function (tags) {
                getTaggedProjects(function (tagged) {
                    // add tagged projects into main index
                    for (var key in tagged) {

                        for (var i = 0; i < langs.length; i++) {
                            var lang = langs[i];

                            // insert tagged project into index
                            index[lang][key] = tagged[key];

                            // create a new output file for each tagged project
                            var file = {
                                title: tagged[key].title,
                                template: 'tutorial-page.tmpl.html',
                                tags: tagged[key].tags,
                                mode: '0644',
                                path: lang + tagged[key].url,
                                locale: lang,
                                en: true,
                                contents: new Buffer(taggedProjectTemplate(tagged[key]))
                            }
                            // add tags
                            // file.tags.forEach(function (tag) {tagSet[tag]=true;});

                            files[file.path+'/index.html'] = file;
                        }
                    }

                    var context = {
                        pages: {},
                        tags: tags
                    };
                    console.log(tags);

                    for (var lang in index) {
                        context.pages[lang] = [];
                        for (var key in index[lang]) {
                            context.pages[lang].push(index[lang][key]);
                        }

                        context.pages[lang].sort(function (a,b) {
                            if (a.title && b.title) {
                                var _a = a.title.toLowerCase();
                                var _b = b.title.toLowerCase();
                                if (_a < _b) return -1;
                                if (_a > _b) return 1;
                            }
                            return 0;
                        });

                    }

                    // tutorial navigation
                    // render a new template using the template's template(!) and the content from the file tree
                    var contentsTemplatePartialName = 'template-tutorial-contents';
                    handlebars.registerPartial(contentsTemplatePartialName, fs.readFileSync("templates/partials/tutorial-contents.tmpl.html", "utf-8"));
                    var contentsTemplate = handlebars.compile(handlebars.partials[contentsTemplatePartialName])
                    var contents = contentsTemplate(context);

                    // registry the generated contents template as the partial used in the tutorial pages
                    handlebars.registerPartial('tutorials-navigation', contents);;

                    // tutorial navigation
                    // render a new template using the template's template(!) and the content from the file tree
                    var listTemplatePartialName = 'template-tutorial-list';
                    handlebars.registerPartial(listTemplatePartialName, fs.readFileSync("templates/partials/tutorial-list.tmpl.html", "utf-8"));
                    var listTemplate = handlebars.compile(handlebars.partials[listTemplatePartialName])
                    var contents = listTemplate(context);

                    // generate pages for tagged projects

                    // registry the generated list template as the partial used in the tutorial pages
                    handlebars.registerPartial('tutorials-list', contents);;

                    done();
                });

            });
        };
    };
};

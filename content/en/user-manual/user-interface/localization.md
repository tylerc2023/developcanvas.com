---
title: Localization
template: usermanual-page.tmpl.html
position: 9
---

This page describes how to localize your Text Elements to different languages.

## Localization Files

For each language you want to support you will need to add a JSON asset that contains the translated phrases for that language. PlayCanvas supports a specific format for the JSON asset. Open the Editor Settings and under LOCALIZATION click CREATE NEW ASSET to generate a new JSON asset in the expected format.

The JSON asset looks like so:

```javascript
{
    "header": {
        "version": 1
    },
    "data": [
        {
            "info": {
                "locale": "en-US"
            },
            "messages": {
                "key": "Single key translation",
                "key plural": [
                    "One key translation",
                    "Translation for {number} keys"
                ]
            }
        }
    ]
}
```

You can specify a different locale in the `info` part of the JSON file. The `messages` section contains key - value pairs for each localized phrase. The key is the identifier for that phrase and the text is the translated text for that key.

PlayCanvas also supports plural forms for each locale. To specify plural forms for each phrase you need to pass an array of strings for each plural form instead of a single string. Each language has different plural forms which you can find [here][1]. Each array element corresponds to a plural form for that language. For example for English:

```javascript
"key plural": [
    "One item", // plural form ONE
    "Not one" // plural form OTHER
]
```

For Arabic:

```javascript
"key plural": [
    "Zero items", // plural form ZERO
    "One item", // plural form ONE
    "Two items", // plural form TWO
    "Few items", // plural form FEW
    "Many items", // plural form MANY
    "Rest", // plural form OTHER
]
```

Refer to the language tables [here][1] to determine the rules for each language.

After you have created your localization JSON assets you need to add them to the Editor Settings under LOCALIZATION.

## Localizing Text Elements

Enable the `Localized` checkbox for a Text Element in order to use the Localization Files to translate its text. The text you enter in the `Key` field of the Text Element should match the key in the localization file.

To test your localization you can change the `Locale` field under the Editor Settings. That should update your Editor viewport to that locale and also this will update the locale used when you launch your application. This field is not used when you publish or download a build.

## Localizing Numbers

Different locales will have different rules on how numbers should be formatted. For example, English (UK and US) would format `1000000` as `1,000,000` and Dutch would format with a decimal instead `1.000.000`.

JavaScript provides a built in function to do this formatting based on the locale code, [`Number.protoype.toLocaleString()`][5].

An example of usage:

```javascript
var numberOfItems = 1000;
var currentLocale = this.app.i18n.locale;
var localeNumberString = numberOfItems.toLocaleString(currentLocale);

console.log(localeNumberString);
// expected output assuming currentLocale is en-US: "1,000"
```

## Localized Fonts

Often you will find that different languages might require different fonts to be used. In order to define a different font for a specific language select the primary font Asset you are using for your Text Element and towards the bottom of the Asset Attributes you will find the Localization section for that font Asset. Type the desired locale and assign a new font Asset for that locale.

At runtime when the application switches to a different locale it will load the font Asset you defined for that locale.

## Language Notes

There are some languages that require specific workflows or considerations that are listed below.

### Thai

For word wrapping to work correctly in UI Text Elements with Thai text, [zero width characters (Unicode U+200B)][7] need be added between words by the translators.

The Thai language has no spaces between words and the same run of glyphs can be split into different combinations of words depending on the context of the sentence.

Being able to split Thai text correctly computationally is still an [unsolved problem][6] and usually done via a dictionary based approach which can be expensive to do at runtime.

The [thai-language.com site also has a separate tool][8] to add the zero width characters between words using a dictionary based approach if you have existing text.

## Engine

To retrieve the text from a key in script, use the APIs:

* [pc.I18n#getText][3] To retrieve the a non-plural or first text string in a plural list
* [pc.I18n#getPluralText][4] To retrieve a plural text string based on the number

For the complete engine API reference for localization see [this page][2].

[1]: https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
[2]: https://developer.playcanvas.com/en/api/pc.I18n.html
[3]: https://developer.playcanvas.com/en/api/pc.I18n.html#getText
[4]: https://developer.playcanvas.com/en/api/pc.I18n.html#getPluralText
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
[6]: http://www.thai-language.com/ref/breaking-words
[7]: https://en.wikipedia.org/wiki/Zero-width_space
[8]: http://www.thai-language.com/?nav=zwsp
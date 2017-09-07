## TranslateJS

Simple translation library.

# Usage

To make an element translatable use the `data-translate` attribute with the value
being the string you want to translate.


```html
<p data-translate="wheel"></p>
<p data-translate="banana"></p>
<p data-translate="yellow"></p>
<p data-translate="red"></p>
```
    
Create an instance of TranslateJS passing the target language and the translations
json object.
    
```js
var T = new Translate('en', {
    "en": {
        "wheel": "wheel",
        "banana": "banana"
    },
    "es": {
        "wheel": "rueda",
        "banana": "platano",
        "yellow": "amarillo",
        "red": "rojo"
    }
});
```

TranslateJS will retrieve all translatables and inject the targetted translation
if available in the json object. If no translation is present for the targetted
language it will use the value passed in the data-translate attribute.

# Search for untranslated contents

TranslateJS have a `scan()` method that will return an Array of elements without
the respective target language translation. You can then console.log them or
change styles to make then more visible

```js
T.scan().forEach(function (orphan) {
    orphan.style = "color: red";
    console.log(orphan);
});
```
function queryString(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var content = {
	"en": {
		"howToTitle": "How to",
		"howToText": "To make an element translatable use the data-translate attribute with the translation path as value. <br /> Ex: <code>data-translate=\"intro\"</code>.",
		"fallbackTitle": "Fallback",
		"fallbackText": "TranslateJS will retrieve all translatables and inject the target translation if available. If no translation is present for the target language it will fallback to the fallback language.",
		"scanTitle": "Scan",
		"scanText": "TranslateJS have a <code>scan()</code> method that will return an Array of elements without the respective target language translation. Console.log them or change their styles to make then more visible. This example have no traductions for the IT language."
	},
	"es": {
		"howToTitle": "Cómo",
		"howToText": "Para hacer un elemento traducible utilice el atributo data-translate con el path de la traduccion como valor. <br /> Ejemplo: <code> data-translate=\"intro\"</code>.",
		"fallbackTitle": "Fallback",
		"fallbackText": "TranslateJS busquerá todos los translatables e inyectará la traducción deseada si está disponible. Si no hay traducción para el idioma de destino, volverá al lenguaje de fallback.",
		"scanTitle": "Scan",
		"scanText": "TranslateJS tiene un método <code>scan()</code> que devolverá una Array de elementos sin respectiva traducción del idioma de destino. Use Console.log o cambie los estilos para que sean más visibles. En este ejemplo no hai traducciones para la lengua IT."
	},
	"it": {
	}
};

var language = queryString('language');

var T = new Translate(language, 'en', content);

T.scan().forEach(function (orphan) {
	orphan.style = "color: red";
	console.log(orphan);
});
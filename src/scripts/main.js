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
	},
	"es": {
		"howToTitle": "Cómo",
		"howToText": "Para hacer un elemento traducible utilice el atributo data-translate con el path de la traduccion como valor. <br /> Ejemplo: <code> data-translate=\"intro\"</code>.",
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
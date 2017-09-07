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
		"wheel": "wheel",
		"banana": "banana"
	},
	"es": {
		"wheel": "rueda",
		"banana": "platano",
		"yellow": "amarillo",
		"red": "rojo"
	}
};

var language = queryString('language');

var T = new Translate(language, content);

T.scan().forEach(function (orphan) {
	orphan.style = "color: red";
	console.log(orphan);
});
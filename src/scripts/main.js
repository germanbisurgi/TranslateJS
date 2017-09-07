// Usage.

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

// Search for transatables without translations.

T.scan().forEach(function (orphan) {
	orphan.style = "color: red";
	console.log(orphan);
});
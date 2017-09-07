var Translate = function (language, content) {
	'use strict';
	var self = this;

	self.language = language;
	self.content = content;


	self.getTranslation = function (path) {
		return self.content[self.language][path] || false;
	};

	self.translate = function () {
		var translatables = self.getTranslatables();
		translatables.forEach(function (translatable) {
			var originalText = translatable.dataset.translate;
			var translatedText = self.getTranslation(originalText);
			if (translatedText) {
				translatable.innerText = translatedText;
			} else {
				translatable.innerText = originalText;
			}

		});
	};

	self.getTranslatables = function () {
		return Array.prototype.slice.call(document.querySelectorAll('[data-translate]'), 0);
	};

	self.scan = function () {
		var orphans = [];
		var translatables = self.getTranslatables();
		translatables.forEach(function (translatable) {
			var originalText = translatable.dataset.translate;
			var translatedText = self.getTranslation(originalText);
			if (!translatedText) {
				orphans.push(translatable);
			}

		});
		return orphans;
	};

	self.translate();

};
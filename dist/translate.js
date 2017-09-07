var Translate = function (language, fallbackLanguage, content) {
	'use strict';
	var self = this;

	self.language = language;
	self.fallbackLanguage = fallbackLanguage;
	self.content = content;


	self.getTranslation = function (path) {
		var translation = {
			status: null,
			content: ''
		};

		if (self.content[self.language][path]) {
			translation.status = 1;
			translation.content = self.content[self.language][path];
		} else if (self.content[self.fallbackLanguage][path]) {
			translation.status = 2;
			translation.content = self.content[self.fallbackLanguage][path];
		} else {
			translation.status = 3;
			translation.content = 'undefined';
		}

		return translation;
	};

	self.translate = function () {
		var translatables = self.getTranslatables();
		translatables.forEach(function (translatable) {
			var path = translatable.dataset.translate;
			var translation = self.getTranslation(path);
			translatable.innerHTML = translation.content;

		});
	};

	self.getTranslatables = function () {
		return Array.prototype.slice.call(document.querySelectorAll('[data-translate]'), 0);
	};

	self.scan = function () {
		var orphans = [];
		var translatables = self.getTranslatables();
		translatables.forEach(function (translatable) {
			var path = translatable.dataset.translate;
			var translation = self.getTranslation(path);
			if (translation.status === 3) {
				orphans.push(translatable);
			}

		});
		return orphans;
	};

	self.translate();

};
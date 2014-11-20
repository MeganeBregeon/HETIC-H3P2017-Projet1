"use strict";

var clicksearch = document.getElementById('formajax');
clicksearch.addEventListener('submit', searchtweet, false);

function searchtweet(e){
	e.preventDefault();
	var keywords = document.querySelector("input[name='key']").value;
	//var keywords = document.ajax.key.value;	// récupère le texte saisi dans le formulaire

	console.log('keyword = '+keywords);

	model.getTWEET(keywords, function(tweetback){
		model.selectTWEET(tweetback, function(mediatweet){
			ui.displaytweet(mediatweet);
		});
	});
};
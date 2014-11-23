"use strict";

var clicksearch = document.getElementById('formajax');
clicksearch.addEventListener('submit', searchsocial, false);

var celebrity=document.getElementById('celebrity');
celebrity.addEventListener('submit', searchcelebrity, false);


function searchsocial(e){
	e.preventDefault();
	var keywords = document.getElementById('key').value;
	console.log(keywords);
	var result_type = document.querySelector("select[name='result_type']").value;


	model.getTWEET(keywords, result_type, function(tweetback){
			model.selectTWEET(tweetback, function(mediatweet){
				model.getINSTAGRAM(keywords, mediatweet, function(tableau_results){
		    		
    			});
			});
	});
}


function searchcelebrity(e){
	e.preventDefault();

	
	


	//var keywords = document.getElementById('key').value;
}
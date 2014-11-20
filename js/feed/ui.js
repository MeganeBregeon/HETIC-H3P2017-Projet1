"use strict";

var ui = {
	displaytweet : function(mediatweet){

		var numcol = 0;
		var colums0=document.createElement('div');
		var colums1=document.createElement('div');
		var colums2=document.createElement('div');
		var colums3=document.createElement('div');
		colums0.setAttribute('class','colums');
		colums1.setAttribute('class','colums');
		colums2.setAttribute('class','colums');
		colums3.setAttribute('class','colums');

		var colums = document.querySelectorAll('.colums');
		

		for (var i=0;i<mediatweet.length;i+2){
			
			var div=document.createElement('div');
			div.classList.add('item');

		// Image :
			var image=document.createElement('img');							// crée l'élément html img
			image.setAttribute('src',mediatweet[i].entities.media[0].media_url);	// assigne l'url de l'image
			image.setAttribute('alt',"image tweet");							// assigne le texte alternatif
			image.setAttribute('class','image_tweet');							// assigne la classe image_event
			div.appendChild(image);												// place l'image dans la div_event

			var text=document.createTextNode(mediatweet[i].text); // j'appel le contenu
			var textSpan=document.createElement('span'); //je cree l'élement html ou je vais inclure le contenu
			textSpan.classList.add('content'); //content que j'appel en CSS
			textSpan.appendChild(text);// je mets le texte dans le span
			div.appendChild(textSpan);

			var jstwitter=document.getElementById('jstwitter');
			console.log(colums);
			colums[numcol].appendChild(div);
			numcol++;

			if (numcol==4) {
			numcol=0;
			}
			else {}
		}
				jstwitter.appendChild(colums1);
				jstwitter.appendChild(colums2);
				jstwitter.appendChild(colums3);
				jstwitter.appendChild(colums4);
	}
}
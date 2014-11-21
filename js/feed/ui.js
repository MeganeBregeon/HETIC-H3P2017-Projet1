"use strict";

var ui = {

	displaytweet : function(mediatweet){

		var numcol = 0;

		var jstwitter=document.getElementById('jstwitter');
		
		var col0=document.createElement('div');
		var col1=document.createElement('div');
		var col2=document.createElement('div');
		var col3=document.createElement('div');

		col0.setAttribute('class','colums');
		col1.setAttribute('class','colums');
		col2.setAttribute('class','colums');
		col3.setAttribute('class','colums');

				jstwitter.appendChild(col0);
				jstwitter.appendChild(col1);
				jstwitter.appendChild(col2);
				jstwitter.appendChild(col3);

				

		var colums = document.querySelectorAll('.colums');


		for (var i=0;i<mediatweet.length;i++){

			var div=document.createElement('div');
			div.classList.add('item');

		// Image :
			var image=document.createElement('img');															// crée l'élément html img
			image.setAttribute('src',mediatweet[i].entities.media[0].media_url);	// assigne l'url de l'image
			image.setAttribute('alt',"image tweet");															// assigne le texte alternatif
			image.setAttribute('class','image_tweet');														// assigne la classe image_event
			div.appendChild(image);																								// place l'image dans la div_event

			var text=document.createTextNode(mediatweet[i].text); 								// j'appel le contenu
			var textSpan=document.createElement('span'); 													//je cree l'élement html ou je vais inclure le contenu
			textSpan.classList.add('content'); 																		//content que j'appel en CSS
			textSpan.appendChild(text);																						// je mets le texte dans le span
			div.appendChild(textSpan);

			
			console.log(colums);
			colums[numcol].appendChild(div);
			numcol++;

			if (numcol==4) {
				numcol=0;
			}
			else {}
		}
				
	}
}

"use strict";

var ui = {

	displaysocial : function(mediatweet, instas){

		var numcol = 0;

		var longueur_min;



		if(mediatweet.length<instas.length){
			longueur_min=mediatweet.length;
		}
		else{
			longueur_min=instas.length;
		}		
		
		console.log('Twe',mediatweet);
		console.log('In',instas);
		
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


		for (var i=0;i<longueur_min;i++){

//TWITTER
		// div .item
			var div=document.createElement('div');
			div.classList.add('item');

			// div .content
				var content=document.createElement('div');
				content.classList.add('content');
				
				div.appendChild(content);	
		
				// img .img_tweet
					var img=document.createElement('img');
					img.setAttribute('src',mediatweet[i].entities.media[0].media_url);
					img.setAttribute('alt',"img tweet");
					img.setAttribute('class','img_tweet');

					content.appendChild(img);																								// place l'image dans la div_event
				
				// div .mask 
					var mask=document.createElement('div');
					mask.setAttribute('class','mask');

					content.appendChild(mask);

//INSTAGRAM
		// div .item
			var divinsta=document.createElement('div');
			divinsta.classList.add('item');

			// img .
			var img_instagram=document.createElement('img');															// crée l'élément html img
			img_instagram.setAttribute('src',instas[i].images.standard_resolution.url);	// assigne l'url de l'image
			img_instagram.setAttribute('alt',"img_instagram");															// assigne le texte alternatif
			img_instagram.setAttribute('class','img_instagram');														// assigne la classe image_event
			
			divinsta.appendChild(img_instagram);				


		// Text :
			// var text=document.createTextNode(mediatweet[i].text); 								// j'appel le contenu
			// var textSpan=document.createElement('span'); 													//je cree l'élement html ou je vais inclure le contenu
			// textSpan.classList.add('content'); 																		//content que j'appel en CSS
			// textSpan.appendChild(text);																						// je mets le texte dans le span
			// div.appendChild(textSpan);
			colums[numcol].appendChild(div);
			colums[numcol].appendChild(divinsta);
			numcol++;

			if (numcol==4) {
				numcol=0;
			}
			else {}
		}
				
	}
}





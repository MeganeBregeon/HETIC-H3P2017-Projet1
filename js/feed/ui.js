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
		col0.setAttribute('id','colums0');

		col1.setAttribute('class','colums');
		col1.setAttribute('id','colums1');

		col2.setAttribute('class','colums');
		col2.setAttribute('id','colums2');

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
			div.setAttribute('id','item_id');

			colums[numcol].appendChild(div);


			// div .content
				var content=document.createElement('div');
				content.classList.add('content');
				
				div.appendChild(content);	
				
				// div .mask
					var mask=document.createElement('div');
					mask.classList.add('mask');
					mask.setAttribute('id','mask_id');

					content.appendChild(mask);

						// p .author
						var author=document.createElement('p');
						author.setAttribute('class', 'author');
						mask.appendChild(author);

							// Par (txt)
							var by=document.createTextNode("Par ");
							author.appendChild(by);

							// User URL
							var userlink=document.createElement('a');
							userlink.setAttribute('target', 'blanck');
							userlink.setAttribute('href','http://www.twitter.com/mediatweet[i].user.name');
							userlink.setAttribute('class','userlink');

							author.appendChild(userlink);

								// User Name
								var text=document.createTextNode(mediatweet[i].user.name);
								userlink.appendChild(text);	

				// img .img_tweet
					var img=document.createElement('img');
					img.setAttribute('src',mediatweet[i].entities.media[0].media_url);
					img.setAttribute('alt',"img tweet");
					img.setAttribute('id',"tweet");
					img.setAttribute('class','img_tweet');

					content.appendChild(img);

mask.style.height = document.getElementById('tweet').offsetHeight+"px";
console.log(mask.style.height);
mask.style.width = document.getElementById('tweet').offsetWidth+"px";
console.log(mask.style.width);

					// var longeur = document.getElementById("tweet").offsetHeight;
					// console.log(longeur);
					
					// var taille = document.getElementById("tweet").offsetHeight;
   		// 			// var obj = document.getElementById("mask_id");
    	// 			mask.style.width = taille;   																			// place l'image dans la div_event
					// console.log(div.offsetHeight);
					// console.log(div.css('height'));
				    // console.log(div.offsetHeight);
				        
				    //    document.getElementById('item_id').offsetHeight;
					
				        


//INSTAGRAM
		// div .item
			var divinsta=document.createElement('div');
			divinsta.classList.add('item');

			colums[numcol].appendChild(divinsta);

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
			numcol++;

			if (numcol==4) {
				numcol=0;
			}
			else {}


		}
	
	}
}





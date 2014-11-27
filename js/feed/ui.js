"use strict";

var ui = {

	playloader : function(){
		if(document.getElementById('video')){
			var video = document.getElementById('video');
			video.parentNode.removeChild(video);
		}
		var divloader = document.getElementById('loader');
		var loader = document.createElement('video');
		loader.setAttribute('src', 'src/video/loader.mp4');
		loader.setAttribute('id', 'video');
		loader.autoplay = true;
		loader.load();
		divloader.appendChild(loader);


	},

	stoploader : function(){
		var video= document.getElementById('video');
		video.parentNode.removeChild(video);
	},


	display_social : function(mediatweet, instas){

		var numcol = 0;
		var longueur_min;

		if(mediatweet.length<instas.length){
			longueur_min=mediatweet.length;
		}
		else{
			longueur_min=instas.length;
		}		
		
		var columns = document.querySelectorAll('.columns');


		for (var i=0;i<longueur_min;i++){

//TWITTER
		// div .item
			var div=document.createElement('div');
			div.classList.add('item');

			// div .content
				var content=document.createElement('div');
				content.classList.add('content');
				
				div.appendChild(content);	
				
				// div .mask
					var mask=document.createElement('div');
					mask.classList.add('mask');

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
							userlink.setAttribute('href','http://www.twitter.com/'+mediatweet[i].user.name);
							userlink.setAttribute('class','userlink');

							author.appendChild(userlink);

								// User Name
								var text=document.createTextNode(mediatweet[i].user.name);
								userlink.appendChild(text);

						//p .count
						var count=document.createElement('p');
						count.setAttribute('class', 'count');
						mask.appendChild(count);

							// span .retweet
							var iconretweet = document.createElement('span');
							iconretweet.setAttribute('class', 'icon');
							count.appendChild(iconretweet);
								
								// icone Retweet
								var texticonretweet=document.createTextNode('R');
								iconretweet.appendChild(texticonretweet);

							//
							var retweet=document.createTextNode(mediatweet[i].retweet_count);
							count.appendChild(retweet);

							//span .favorite
							var iconfavorite = document.createElement('span');
							iconfavorite.setAttribute('class', 'icon');
							count.appendChild(iconfavorite);

								// icone favorite
								var texticonfavorite=document.createTextNode('F');
								iconfavorite.appendChild(texticonfavorite);

							//p
							var favorite=document.createTextNode(mediatweet[i].favorite_count);
							count.appendChild(favorite);


				// img .img_tweet
					var img=document.createElement('img');
					img.setAttribute('src',mediatweet[i].entities.media[0].media_url);
					img.setAttribute('alt',"img tweet");
					img.setAttribute('id',"tweet");
					img.setAttribute('class','img_tweet');


					content.appendChild(img);


//INSTAGRAM
		// div .item
			var divinsta=document.createElement('div');
			divinsta.classList.add('item');

			//div .content
			var contentinsta=document.createElement('div');
			contentinsta.classList.add('content');	
			divinsta.appendChild(contentinsta);

				// div .mask
				var mask=document.createElement('div');
				mask.classList.add('mask');
				mask.setAttribute('id','mask_id');

				contentinsta.appendChild(mask);
					
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
						userlink.setAttribute('href','http://instagram.com/'+instas[i].user.username);
						userlink.setAttribute('class','userlink');

						author.appendChild(userlink);

						// User Name
						var text=document.createTextNode(instas[i].user.username);
						userlink.appendChild(text);

					//p .count
					var count=document.createElement('p');
					count.setAttribute('class', 'count');
					mask.appendChild(count);

						// span .icon
						var icon = document.createElement('span');
						icon.setAttribute('class', 'icon');
						count.appendChild(icon);
							
							// icone Like
							var icon_like=document.createTextNode('L');
							icon.appendChild(icon_like);

						//
						var like=document.createTextNode(instas[i].likes.count);
						count.appendChild(like);

						//span .icon
						var icon = document.createElement('span');
						icon.setAttribute('class', 'icon');
						count.appendChild(icon);

							// icone comment
							var icon_comment=document.createTextNode('C');
							icon.appendChild(icon_comment);

						//
						var comment=document.createTextNode(instas[i].comments.count);
						count.appendChild(icon_comment);


			// img .img_instagram
			var img_instagram=document.createElement('img');															// crée l'élément html img
			img_instagram.setAttribute('src',instas[i].images.standard_resolution.url);	// assigne l'url de l'image
			img_instagram.setAttribute('alt',"img_instagram");															// assigne le texte alternatif
			img_instagram.setAttribute('class','img_instagram');														// assigne la classe image_event
			
			contentinsta.appendChild(img_instagram);				

//je fais le count
		//comments.count
		//likes.count

			columns[numcol].appendChild(div);
			columns[numcol].appendChild(divinsta);
			numcol++;

			if (numcol==4) {
				numcol=0;
			}
			else {}
		}
	},

	clear_columns : function(callback){		
		var jstwitter=document.getElementById('jstwitter');					// select columns		

		while (jstwitter.firstChild) {									// tant que les col contiennent des elmts
			jstwitter.removeChild(jstwitter.firstChild);				// on kill le premier enfant présent
		}																// à la fin du while, js twitter est vidé		

			// CREATION DES COLONNES :																
				var col1=document.createElement('div');
				var col2=document.createElement('div');
				var col3=document.createElement('div');
				var col4=document.createElement('div');
			// ASSIGNE CLASSE .COLUMNS :
				col1.setAttribute('class','columns');
				col2.setAttribute('class','columns');
				col3.setAttribute('class','columns');
				col4.setAttribute('class','columns');
			// ASSIGNE LES ID :
				col1.setAttribute('id','col1');
				col2.setAttribute('id','col2');
				col3.setAttribute('id','col3');
				col4.setAttribute('id','col4');
			// PLACE LES COL DANS LA DIV JS TWITTER :
				jstwitter.appendChild(col1);
				jstwitter.appendChild(col2);
				jstwitter.appendChild(col3);
				jstwitter.appendChild(col4);
			// LA DIV JS TWITTER EST 'PROPRE'
		callback.call(this);
	},

	filter_selected : function(filter_selected,callback){
		
		var see_all=document.getElementById('see_all');
		var celebrities=document.getElementById('celebrities');
		var creators=document.getElementById('creators');
		var styles=document.getElementById('styles');

		see_all.style.borderBottom='1px solid #EDE9E9';	
		celebrities.style.borderBottom='1px solid #EDE9E9';	
		creators.style.borderBottom='1px solid #EDE9E9';	
		styles.style.borderBottom='1px solid #EDE9E9';	

		see_all.style.fontWeight='200';
		celebrities.style.fontWeight='200';
		creators.style.fontWeight='200';
		styles.style.fontWeight='200';

		see_all.style.color='#000000';
		celebrities.style.color='#000000';
		creators.style.color='#000000';
		styles.style.color='#000000';

		filter_selected.style.borderBottom='1px solid #08E9A0';								// sytlise le filtre sélecitonné
		filter_selected.style.fontWeight='500';												// sytlise le filtre sélecitonné
		filter_selected.style.color='black';												// sytlise le filtre sélecitonné
		
	},

	replace_form : function(filtre,callback){
		var form=document.getElementById('formajax');
		
		// si clique sur see_all, on reconstruit les inputs s'ils sont pas déjà là et supprime la liste 2 si elle existe
		// si clique pas sur see_all, on delete les inputs s'ils sont là, on détruit la liste 2 si elle existe déjà 
		// et on reconstruit la liste 2 correspondante au filtre cliqué : celebrities / creators / styles

		if (filtre=='see_all'){
			if(document.getElementById('submit_input')){}				// si input déjà là on fait rien (ou on actualise ?)
			else{
				var champ_input=document.createElement('input');		// sinon on crée le champ input text 
				champ_input.setAttribute('type','text');
				champ_input.setAttribute('placeholder','Texte Ici');
				champ_input.setAttribute('id','key');					// id = key, ce sera le keywords
				champ_input.setAttribute('value','fashion');
				champ_input.setAttribute('class','input_text');

				form.appendChild(champ_input);

				var submit_input=document.createElement('input');		// on crée aussi le submit du formulaire
				submit_input.setAttribute('type','submit');
				submit_input.setAttribute('value',"&#128269;");
				submit_input.setAttribute('class','input_search');
				submit_input.setAttribute('id','submit_input');

				form.appendChild(submit_input);

				if(document.getElementById('liste_imposee')){
					var liste_imposee=document.getElementById('liste_imposee');
					liste_imposee.parentNode.removeChild(liste_imposee);	// delete element	
				}
			}
		}

		else{
				// ––––––––– SUPPRESSION DES INPUTS de 'see_all' SI EXISTANTS –––––––––––––			
				if(document.getElementById('key')){								// si l'input existe 
					var champ_input=document.getElementById('key');				// on le get
					champ_input.parentNode.removeChild(champ_input);			// pour le supprimer
				}
				if(document.getElementById('submit_input')){					// si le submit existe 
					var submit_input=document.getElementById('submit_input');	// on le get
					submit_input.parentNode.removeChild(submit_input);			// pour le supprimer
				}

				// ––––––––– SUPPRESSION LISTE IMPOSEE SI EXISTANTE –––––––––––––––––––––––			
				if(document.getElementById('liste_imposee')){					// si la liste existe 
					var liste_imposee=document.getElementById('liste_imposee');	// on la get
					liste_imposee.parentNode.removeChild(liste_imposee);		// pour la supprimer
				}

				// ––––––––– RECONSTRUCTION LISTE IMPOSEE SELON LE FILTRE CLIQUÉ –––––––––––––
				if(filtre=='celebrities'){
						var liste_imposee=document.createElement('select');
						liste_imposee.setAttribute('name','liste_imposee');
						liste_imposee.setAttribute('type','button');
						liste_imposee.setAttribute('id','liste_imposee');
						liste_imposee.setAttribute('onchange','liste_imposee_change()');

						form.appendChild(liste_imposee);

						var celebrities=["AngelinaJolie","ScarlettJohansson","MilaKunis","EvaLongoria",
						"Anna Mouglalis",
"Catherine Deneuve",
"Cécile Cassel",
"Claudia Schiffer",
"Courtney Love",
"Dita Von Teese",
"Emma De Caunes",
"Janet Jackson",
"Julie Depardieu",
"Justin Timberlake",
"Kanye West",
"Kate Moss",
"Keira Knightley",
"Kim Kardashian",
"Lenny Kravit",
"Lily Allen",
"Micky Green",
"Milla Jovovich", 
"Nathalie Baye",
"Orlando Bloom",
"RachidaBrakni ",
"SalmaHayek",
"VanessaParadis",
"VirginieEfira",
"VirginieLedoyen"
];

						for (var i=0;i<celebrities.length;i++){
							var cel=document.createElement('option');
							cel.setAttribute('value',celebrities[i]);
							cel.innerHTML=celebrities[i];
							liste_imposee.appendChild(cel);		
						}						
				}
				else if(filtre=='creators'){
						var liste_imposee=document.createElement('select');
						liste_imposee.setAttribute('name','liste_imposee');
						liste_imposee.setAttribute('type','button');
						liste_imposee.setAttribute('id','liste_imposee');
						liste_imposee.setAttribute('onchange','liste_imposee_change()');

						form.appendChild(liste_imposee);

						var creators=["Jacquemus","Carven","IsabelMarant","AndrewGn","AcneStudios","Jean-PaulGaultier","LeonardParis","ElieSaab","IrisVanHerpen","RahulMishra","Anrealage","Aganovich","ChristinePhung","CorrieNielsen"];

						for (var i=0;i<creators.length;i++){
							var crea=document.createElement('option');
							crea.setAttribute('value',creators[i]);
							crea.innerHTML=creators[i];
							liste_imposee.appendChild(crea);		
						}						
				}
				else if(filtre=='styles'){
						var liste_imposee=document.createElement('select');
						liste_imposee.setAttribute('name','liste_imposee');
						liste_imposee.setAttribute('type','button');
						liste_imposee.setAttribute('id','liste_imposee');
						liste_imposee.setAttribute('onchange','liste_imposee_change()');

						form.appendChild(liste_imposee);

						var styles=["streetstyle","2eme_style","3eme_style","4eme_style"];

						for (var i=0;i<styles.length;i++){
							var sty=document.createElement('option');
							sty.setAttribute('value',styles[i]);
							sty.innerHTML=styles[i];
							liste_imposee.appendChild(sty);		
						}				
				}
				else{}
		}
		callback.call(this);
	}
}

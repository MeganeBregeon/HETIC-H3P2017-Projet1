"use strict";

var UI = {

	//Affichage video sur la page live

		affiche_video_a_la_une : function(most_recent_video,callback_video){

			var video_on_play = document.getElementById('video_on_live');

			//création l'élément vidéo
			var element_video = document.createElement('video');
			element_video.classList.add('livestream');
			video_on_play.appendChild(element_video);
			element_video.setAttribute('id','video');					



			//SRC FICHIERS VIDEOS		
			element_video.setAttribute('src',most_recent_video.video_mp);
			// element_video.setAttribute('src',most_recent_video.video_webm);			
			// element_video.setAttribute('src',most_recent_video.video_ogv);	

							

			////////////////// PLAYER VIDEO ORIGINE A GARDER EN CAS DE PROBLEMES ! //////////////
			element_video.setAttribute('class','video_event');							
			// assigne la classe video_event
			element_video.autoplay = true;
			element_video.controls = true;
			element_video.load(); 
			callback_video.call(this);

		},


	//affichage events video sur la page live

	affiche_liste_events : function(data,callback_final){

		for (var i=0;i<data.events.length;i++){



			var div_a_remplir=document.getElementById('liste_live');

			// Div pour chaque event :
			var div_event=document.createElement('div');						// crée la div de l'event
			div_event.classList.add('event');									// assigne la classe event à cette div
			div_a_remplir.appendChild(div_event);								// place la div dans la fenêtre

			// // Image :
			var image=document.createElement('img');							// crée l'élément html img
			image.setAttribute('src',data.events[i].defile);						// assigne l'url de l'image
			image.setAttribute('alt',"image de l'évènement");					// assigne le texte alternatif
			image.setAttribute('class','image_event');							// assigne la classe image_event
			div_event.appendChild(image);										// place l'image dans la div_event

		
			// Titre :
			var texte_titre=document.createTextNode(data.events[i].titre);		// récup. le texte du titre
			var titre=document.createElement('h3');								// crée l'élément html h3 pour le titre
			titre.appendChild(texte_titre);										// place le texte titre dans <h3>...</h3>
			titre.setAttribute('class','titre_event');							// assigne la classe Titre_event au Titre
			div_event.appendChild(titre);										// place le Titre dans la div_event

			// Sous Titre:lieu
			var texte_lieu=document.createTextNode(data.events[i].lieu);		// récup. le texte
			var lieu=document.createElement('h6');	// crée l'élément html h6 pour le texte
			lieu.appendChild(texte_lieu);										// place le texte dans <h6>...</h6>
			lieu.setAttribute('class','sous_titre_event');						// assigne la classe
			div_event.appendChild(lieu);										// place le sous titre dans la div_event


		// Temps restant :
			var texte_temps=document.createTextNode(model.calcul_temps_restant(data.events[i].timestamp));
			var temps=document.createElement('h5');								// crée l'élément html h6 pour le texte
			temps.appendChild(texte_temps);										// place le texte dans <h6>...</h6>
			temps.setAttribute('class','temps_restant_event');					// assigne la classe
			div_event.appendChild(temps);										// place le tempsdans la div_event

		}
		callback_final.call(this);
	},

	


}// fin UI

"use strict";

var UI = {

	affiche_liste_events : function(data,callback_final){

		for (var i=0;i<data.events.length;i++){

			var div_a_remplir=document.getElementById('liste_live');

			// Div pour chaque event :
			var div_event=document.createElement('div');						// crée la div de l'event
			div_event.classList.add('event');									// assigne la classe event à cette div
			div_a_remplir.appendChild(div_event);								// place la div dans la fenêtre

			// // Image :
			var image=document.createElement('img');							// crée l'élément html img
			image.setAttribute('src',data.events[i].image);						// assigne l'url de l'image
			image.setAttribute('alt',"image de l'évènement");					// assigne le texte alternatif
			image.setAttribute('class','image_event');							// assigne la classe image_event
			div_event.appendChild(image);										// place l'image dans la div_event

			// Video :
			// var image=document.createElement('video');							// crée l'élément html img
			// image.setAttribute('src',data.events[i].video);						// assigne l'url de l'image
			// image.setAttribute('class','video_event');							// assigne la classe image_event
			// div_event.appendChild(image);										// place l'image dans la div_event



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



		/*	// TRI DU TEMPS  :
			var texte_temps=document.createTextNode(model.calcul_temps_restant(data.events[i].timestamp));
			var temps=document.createElement('h5'); // crée l'élément html h6 pour le texte
			temps.appendChild(texte_temps); // place le texte dans <h6>...</h6>

*/




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

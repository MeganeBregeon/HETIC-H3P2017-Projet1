"use strict";

var UI = {

// –––––––––– PAGE EVENEMENTS –––––––––––––

	affiche_liste_events : function(data,callback_touch,callback){
		var liste_events=document.getElementById('liste_events');

		var nb_events_finis=0;

		for (var i=0;i<data.events.length;i++){
			
			if(model.calcul_temps_restant(data.events[i].timestamp)=='ok'){
				nb_events_finis++;
			}
			else{

				// Div pour chaque event :
				var div_event=document.createElement('div');						// crée la div de l'event
				div_event.classList.add('div_event');								// assigne la classe event à cette div
				liste_events.appendChild(div_event);								// place la div dans la fenêtre

				var div_touch=document.createElement('div');						// crée la div touch
				div_touch.classList.add('div_touch');								// assigne la classe

				// Image :
				var image=document.createElement('img');							// crée l'élément html img
				image.setAttribute('src',data.events[i].image);						// assigne l'url de l'image
				image.setAttribute('alt',"image de l'évènement");					// assigne le texte alternatif
				image.setAttribute('class','image_event');							// assigne la classe image_event
				div_touch.appendChild(image);										// place l'image dans la div_event

				// Titre :
				var texte_titre=document.createTextNode(data.events[i].titre);		// récup. le texte du titre
				var titre=document.createElement('h3');								// crée l'élément html h3 pour le titre
				titre.appendChild(texte_titre);										// place le texte titre dans <h3>...</h3>
				titre.setAttribute('class','titre_event');							// assigne la classe Titre_event au Titre
				div_touch.appendChild(titre);										// place le Titre dans la div_event

				// Icone lieu :
				var icone_lieu=document.createElement('img');
				icone_lieu.setAttribute('src','images/icon/geolocation.png');		// assigne l'url de l'image
				icone_lieu.setAttribute('alt',"icone lieu");						// assigne le texte alternatif
				icone_lieu.setAttribute('class','icone_lieu');						// assigne la classe icone_lieu
				div_touch.appendChild(icone_lieu);									// place l'icone dans la div_event


				// Lieu :
				var texte_lieu=document.createTextNode(data.events[i].lieu);		// récup. le texte
				var lieu=document.createElement('h6');								// crée l'élément html h6 pour le texte
				lieu.appendChild(texte_lieu);										// place le texte dans <h6>...</h6>
				lieu.setAttribute('class','lieu');									// assigne la classe
				div_touch.appendChild(lieu);										// place le sous titre dans la div_event


				// Temps restant :
				var texte_temps=document.createTextNode(model.calcul_temps_restant(data.events[i].timestamp));
				var temps=document.createElement('h5');								// crée l'élément html h6 pour le texte
				temps.appendChild(texte_temps);										// place le texte dans <h6>...</h6>
				temps.setAttribute('class','temps_restant_event');					// assigne la classe
				div_touch.appendChild(temps);										// place le tempsdans la div_event


				// Préparation des div avec la distance :
				var distance=document.createElement('span');						// crée l'élément html h6 pour le texte
				distance.setAttribute('class','distance_event');					// assigne la classe
				div_touch.appendChild(distance);									// place la distance dans la div_event

				/*
				// Bouton afficher sur la carte : A FAIRE

				var bouton_iti=document.createTextNode('s');						// crée texte icone itinéraire
				var span_iti=document.createElement('span');						// crée span accueillant l'icone
				span_iti.setAttribute('data-lat',data.events[i].lat);				// attribue en data-lat la lat de l'event
				span_iti.setAttribute('data-lng',data.events[i].lng);				// attribue en data-lng la lng de l'event
				span_iti.setAttribute('class','span_itineraire');					// attribue la classe pour le css
				span_iti.setAttribute('onclick',"iti(this)");						// sur clic déclenche fonction itineraire
				span_iti.appendChild(bouton_iti);									// place icone dans span
				div_event.appendChild(span_iti);									// place span dans div_event
				*/

				// Bouton itinéraire :
				var bouton_iti=document.createElement('img');						// crée image icone itinéraire
				bouton_iti.setAttribute('src','images/icon/iti.png');				// définit source img
				bouton_iti.setAttribute('alt','Itinéraire');						// texte alternatif
				bouton_iti.setAttribute('class','icone_iti');						// assigne classe
				var span_iti=document.createElement('span');						// crée span accueillant l'icone
				span_iti.setAttribute('data-lat',data.events[i].lat);				// attribue en data-lat la lat de l'event
				span_iti.setAttribute('data-lng',data.events[i].lng);				// attribue en data-lng la lng de l'event
				span_iti.setAttribute('class','span_itineraire');					// attribue la classe pour le css
				span_iti.setAttribute('onclick',"iti(this)");						// sur clic déclenche fonction itineraire
				span_iti.appendChild(bouton_iti);									// place icone dans span



				div_event.appendChild(div_touch);						// div touch 	dans div event
				div_event.appendChild(span_iti);						// span 		dans div_event
				//span_iti.style.visibility='hidden';


				callback_touch.call(this,div_touch);		// callback pour ajouter les écouteurs d'év. sur la div
			}
		}
		callback.call(this,nb_events_finis);
	},

	ajoute_distance_events : function(distances,nb_events_finis,callback){
		var zone_distance = document.querySelectorAll('.distance_event');
		var nb=nb_events_finis;
		
			for(var i=nb;i<distances.length-nb;i++){
				var texte_distance = document.createTextNode(distances[i]);	
				//console.log('i = ',texte_distance,' ',zone_distance[i]);			
				zone_distance[i-5].appendChild(texte_distance);
			}
			callback.call(this);
	},

	map_iti : function(lat_event,lng_event,userPos,walking_or_driving,callback){

        //––––––––– CREA DIV MAP ––––––––––
      	var div_map=document.createElement('div');								// crée div map
	    div_map.setAttribute('id','div_map_iti');								// assigne id
	    var conteneur=document.getElementById('header');						// get le conteneur
	    conteneur.appendChild(div_map);											// place div map dans le conteneur

        //––––––––– CREA NAV MAP ––––––––––
        var head_nav_iti=document.createElement('div');							// crée div nav
        head_nav_iti.setAttribute('id','head_nav_iti');							// assigne id
		conteneur.appendChild(head_nav_iti);									// place nav dans le conteneur

        //–––––––– ICONE ANNULER ITINERAIRE / RETOUR AUX EVENTS :
        var cancel_iti=document.createElement('img');							// crée image
		cancel_iti.setAttribute('src','images/icon/cancel_iti.png');			// assigne l'url de l'image
		cancel_iti.setAttribute('alt',"image de l'évènement");					// assigne le texte alternatif
		cancel_iti.setAttribute('id','cancel_iti');								// assigne l'id
		head_nav_iti.appendChild(cancel_iti);									// place l'image dans la nav

		cancel_iti.addEventListener('click',UI.delete_map_iti,false);				// écouteur de retour aux events

        //––––––– INIT MAP –––––––––––
          var directionsDisplay;
          var directionsService = new google.maps.DirectionsService();
          var map;
          directionsDisplay = new google.maps.DirectionsRenderer();
          var mapOptions = {
            	zoom:10,														// zoom de la map
            	center: userPos													// centré sur position de l'user
          };

          map = new google.maps.Map(div_map, mapOptions);						// créa map

          directionsDisplay.setMap(map);										// affiche service directions
          var iconOrigine = 'images/icon/userPos.png';
          /*var marker = new google.maps.Marker({
            position: userPos,
            map: map,															// marker personnalisé
            icon: iconOrigine
          });*/

          var start = new google.maps.LatLng(userPos.lat, userPos.lng);			// crée un GMAP start
          var end = new google.maps.LatLng(lat_event, lng_event);				// crée un GMAP end

          if(walking_or_driving=='walking'){
          	var request = {
                origin:start,
                destination:end,
                travelMode: google.maps.TravelMode.WALKING						// ici DRIVING ou WALKING
            };
          }
          else{
          	var request = {
                origin:start,
                destination:end,
                travelMode: google.maps.TravelMode.DRIVING						// ici DRIVING ou WALKING
            };
          }


        //–––––––– DISPLAY ITINERAIRE ET TEXTES DE NAV ––––––––
            directionsService.route(request, function(response, status) {
              if (status == google.maps.DirectionsStatus.OK) {					// si réponse service OK :

                directionsDisplay.setDirections(response);						// affiche itinéraire sur la map
                // TEXTE DISTANCE TRAJET :
	            var duration_text=document.createTextNode(response.routes[0].legs[0].duration.text);
	            var duration=document.createElement('h2');					// crea h3 pour duration
	            duration.setAttribute('id','temps_trajet');					// assigne id
	            duration.appendChild(duration_text);						// place duration text dans h2
	            head_nav_iti.appendChild(duration);
				// TEXTE DUREE TRAJET :
				var distance_text=document.createTextNode(response.routes[0].legs[0].distance.text);
	            var distance=document.createElement('h3');					// crea h3 pour duration
	            distance.setAttribute('id','distance_trajet');				// assigne id
	            distance.appendChild(distance_text);						// place distance text dans h3
	            head_nav_iti.appendChild(distance);
	            
	            // SELECT CHANGER MOYEN DE TRANSPORT :
	            var select_change_mode=document.createElement('select');
	            select_change_mode.setAttribute('id','select_change_mode');
	            select_change_mode.setAttribute('type','button');
	            select_change_mode.setAttribute('onchange','change_mode_iti()');

	            var driving=document.createElement('option');
	            driving.setAttribute('value','driving');
	            driving.setAttribute('id','driving_option');
	            driving.innerHTML="<img src='images/icon/car_mode.png' id='icon_car_mode' alt='Voiture'/>";

   	            var walking=document.createElement('option');
	            walking.setAttribute('value','walking');
	            walking.setAttribute('id','walking_option');
	            walking.innerHTML="<img src='images/icon/pieton_mode.png' id='icon_pieton_mode' alt='Piéton'/>";

              }
            });

          callback.call(this);
  	},

  	delete_map_iti : function(e){
		var delete_map = document.getElementById('div_map_iti');
		delete_map.parentNode.removeChild(delete_map);						// delete la map iti
		this.parentNode.parentNode.removeChild(this.parentNode);			// delete la nav iti

		var toutes_div_touch=document.querySelectorAll('.div_touch');
		for(var i=0;i<toutes_div_touch.length;i++){
			UI.touch_reset_position(toutes_div_touch[i]);					// reinit positions events
		}
	},

  	touch_move : function(div_touch,offset){
			div_touch.style.left = offset + 'px';
			div_touch.classList.add('event_swiping');
	},

	touch_reset_position : function(elmt){
		elmt.style.left='0px';
		elmt.classList.remove('event_swiping');
		elmt.classList.remove('event_swiped');
	},

	touch_event_swiped : function(elmt){
		elmt.style.left='-91px';
		elmt.classList.remove('event_swiping');		// event n'est plus en CSS swiping
		elmt.classList.add('event_swiped');			// event est CSS swipé
	},

// –––––––––– PAGE MAP –––––––––––––	
	map_see_all : function(callback){
		var map;
		var center_map=new google.maps.LatLng(48.857713, 2.347271); // centre carte = châtelet les halles
		var mapOptions = {
			zoom: 12,
			center: center_map
		};
		map = new google.maps.Map(document.getElementById('map_view'),mapOptions);
		callback.call(this,map);
	}, 

	map_add_markers : function(map,data){
	
		var tableau_markers=[];

		var tableau_infos_windows=[];

		var infoWindow = new google.maps.InfoWindow();

		for(var i=0;i<data.events.length;i++){
			var dat = data.events[i];
			var myLatlng = new google.maps.LatLng(dat.lat, dat.lng);
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title: dat.titre
			});
			(function(marker, dat) {			
			// Attaching a click event to the current marker
				google.maps.event.addListener(marker, "click", function(e) {
					// PERSONNALISATION DE LA INFO WINDOW : 

					var contenu_info_window="<div class='info_window_perso'>"+
					"<div class='zone_image_event_info_window'><img src='"+dat.image+"' class='image_event_info_window'/></div>"+
					"<h2 class='titre_info_window'>"+dat.titre+"</h2><h5 class='lieu_info_window'>"+dat.lieu+"</h5>"+
					"<h5 class='bouton_iti_info_window' data-lat='"+dat.lat+"' data-lng='"+dat.lng+"' "+
					"onclick='itineraire_from_info_window(this)'>ITINERAIRE</h5></div>";

					infoWindow.setContent(contenu_info_window);
					infoWindow.maxWidth=300;					
					infoWindow.open(map, marker);
				});
			})(marker, dat);
		}
	}

}







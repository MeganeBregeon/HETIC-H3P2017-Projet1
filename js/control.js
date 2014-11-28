"use strict";
 
// –––––––––––––––   RECUP EVENEMENTS   –––––––––––––––

if(document.getElementById('liste_events')){					// si on est sur la page events 
	
	model.getJSON('js/events.json',function(data) {				// si model.getJSON récup events :	
			UI.affiche_liste_events(data,				
				function(div_touch){		
					div_touch.addEventListener('touchstart', control.touch_start, false);
					div_touch.addEventListener('touchmove', control.touch_move, false);
					div_touch.addEventListener('touchend', control.touch_end, false);						
				},
				function(nb_events_finis){
					recup_distance(data,nb_events_finis);					
				}
			);
		},
		function(status) {										// si model.getJSON récup pas events :	
		  	alert("Désolé, évènements indisponibles pour le moment.");
	});
}

if(document.getElementById('map_view')){							// si on est sur la page map
	UI.map_see_all(function(map){
		model.getJSON('js/events.json',function(data) {				// si model.getJSON récup events :	
				UI.map_add_markers(map,data);
			},
			function(status) {										// si model.getJSON récup pas events :	
			  	alert("Désolé, une erreur temporaire est survenue.");
		});
	});
}

// –––––––––––––––   RECUP DISTANCE   –––––––––––––––––

function recup_distance(data,nb_events_finis){
	model.generate_tableau_coords_events(data, function(tableau_coords_events){			// lorsque le tableau de coords est fait
		model.getUserLocation(function(userPos){										// on obtient la position				
			model.calculateDistances(userPos.lat,userPos.lng,tableau_coords_events, function(distances){	// calc distance
				console.log(nb_events_finis);
				UI.ajoute_distance_events(distances,nb_events_finis,function(){
					// console.log('Distances ajoutées');
				});
			});					
		});
	});
}

// –––––––––––––––––   ITINERAIRE   –––––––––––––––––––

function iti(recup_span){
	var lat=parseFloat(recup_span.getAttribute('data-lat'));
	var lng=parseFloat(recup_span.getAttribute('data-lng'));
	
	var walking_or_driving='driving';

	model.getUserLocation(function(userPos){			
		UI.map_iti(lat,lng,userPos,walking_or_driving,function(){
			// console.log('map_iti ok');				
		});
	});
}

function itineraire_from_info_window(recup_lat_lng){
	var lat=parseFloat(recup_lat_lng.getAttribute('data-lat'));
	var lng=parseFloat(recup_lat_lng.getAttribute('data-lng'));	
	
	var walking_or_driving='driving';

	model.getUserLocation(function(userPos){	
		UI.map_iti(lat,lng,userPos,walking_or_driving);
	});
}

function change_mode_iti(select_change_mode){
	var lat=select_change_mode.getAttribute('data-lat');
	var lng=select_change_mode.getAttribute('data-lng');

	var travel_mode=document.getElementById('select_change_mode').value;
	//console.log('select_change_mode = ',travel_mode);
	UI.delete_map_iti();
	model.getUserLocation(function(userPos){	
		UI.map_iti(lat,lng,userPos,travel_mode);
	});	
}

// –––––––––––––––––   ITINERAIRE   –––––––––––––––––––

function localise(recup_span){

	var lat=parseFloat(recup_span.getAttribute('data-lat'));
	var lng=parseFloat(recup_span.getAttribute('data-lng'));
	var titre=recup_span.getAttribute('data-titre');

	UI.map_localise(lat,lng,titre);
}

// –––––––––––––––   OBJET CONTROL   –––––––––––––––––

var control={
/*
	touch_move : function(e){
		//e.preventDefault(); 									//!!!	Si e.preventDefault() activé, empêche le scroll … 
		var offset=e.changedTouches[0].pageX-control.startX;		// offset = différence X entre touchstart et now
				
		if(offset<40 && offset>-100){						// réglage du touch délicat … 
				UI.touch_move(this,offset);					// s'il y a mouvement comme défini, on bouge la div
		}
	},*/

	touch_move : function(e){
		//e.preventDefault(); 									//!!!	Si e.preventDefault() activé, empêche le scroll … 
		var offset=e.changedTouches[0].pageX-control.startX;		// offset = différence X entre touchstart et now
				
		if(offset<40 && offset>-100){						// réglage du touch délicat … 
				UI.touch_move(this,offset);					// s'il y a mouvement comme défini, on bouge la div
		}
	},

	touch_end : function(e){
		var offset=e.changedTouches[0].pageX-control.startX;
		if(offset>-100){											// si le swipe est insuffisant,
			UI.touch_reset_position(this);							// on reset la position
		}
		else{
			UI.touch_event_swiped(this);							// évènement swipé 
		}
	},

	touch_start : function(e){				
		var toutes_div_touch=document.querySelectorAll('.div_touch');
		for(var i=0;i<toutes_div_touch.length;i++){
			UI.touch_reset_position(toutes_div_touch[i]);			// lorsqu'on commence à toucher un event,ils se rangent tous 
		}		
		control.startX=e.changedTouches[0].pageX;
		control.clientX=e.changedTouches[0].clientX;				
	}

} // fin objet control –––––––––––––––––––––––––––––––










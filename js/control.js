// "use strict";

var control={};


document.getElementById('liste_events');



model.getJSON('js/events.json', function(data) {
	// si model.getJSON récup events :
	UI.affiche_liste_events(data,function(){
		console.log('évènements récupérés');	// une fois qu'on a affiché les évènements
		//recup_distance(data);								// on va chercher leur distance
		appel_video(data);
	});
},function(status) {
	// si model.getJSON récup pas events :
  	alert("Désolé, évènements indisponibles pour le moment.");
});

//––––––––––––––––––––––––––––––––
/*
function recup_distance(data){

	model.generate_tableau_coords_events(data, function(tableau_coords_events){			// lorsque le tableau de coords est fait
		model.getUserLocation(function(userPos){										// on get la position
			model.calculateDistances(userPos.lat,userPos.lng,tableau_coords_events, function(tableau_distances_events){	// on calcule dist
				UI.ajoute_distance_events(tableau_distances_events, function(){
					console.log('distances ajoutées');
				});
			});
		});
	});

}
*/



function appel_video(data){
	model.calcul_video_live(data,function(most_recent_video){
		
		UI.affiche_video_a_la_une(most_recent_video,function(){
			console.log('OK = ');	
		});
	});
}




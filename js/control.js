"use strict";

var control={};


document.getElementById('liste_events');



model.getJSON('js/events.json', function(data) {
	// si model.getJSON récup events :
	UI.affiche_liste_events(data,function(){
		console.log('évènements récupérés');	// une fois qu'on a affiché les évènements
		recup_distance(data);								// on va chercher leur distance
	});
},function(status) {
	// si model.getJSON récup pas events :
  	alert("Désolé, évènements indisponibles pour le moment.");
});

//––––––––––––––––––––––––––––––––

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


// CE QUI SUIT N'EST PAS ENCORE FONCTIONNEL

/*
var timestamp_now = new Date().getTime();
var timenow = Math.floor((timestamp_now/1000));
var min_now = timenow/60;


var timestamp_event = 1415999632;
var min_event = Math.floor(timestamp_event/60);

var min_restant = Math.floor(min_event-min_now);

var affichage;

if (temps_restant<1){
	affichage="évènement passé";
}
else{
	var days_restant = Math.floor(min_restant/60/24);
	var hours = Math.floor(min_restant/60);

	var heures_affichees;

	if(hours>0 && days<1){
		var heures_affichees
		affichage="il reste "+hours+" h et "+(Math.floor(min_restant)-hours*60)+" min";
	}
	else if (hours>0 && days>0){
		affichage="il reste "+days+"j,"+hours-days*24+" h et "+(Math.floor(min_restant)-hours*60)+" min";
	}
	else{
		affichage="il reste "+Math.floor(min_restant)+" min";
	}
}*/
/*
console.log(timenow);
console.log("RESTE : "days+"j "+hours+" h "+min_restant+"min");
console.log('affichage = ',affichage);
*/

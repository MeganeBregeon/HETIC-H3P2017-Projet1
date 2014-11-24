// "use strict";

var control={};


document.getElementById('liste_events');

//APPEL DU JSON 

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


//APPEL DE LA VIDEO A LA UNE


function appel_video(data){
	model.calcul_video_live(data,function(most_recent_video){
		
		UI.affiche_video_a_la_une(most_recent_video,function(){
			console.log('OK = video récente récupérée ');	
		});
	});
}



	window.onload = function() {
		// Coordonnées d'un défilé 
		var myLatlng = new google.maps.LatLng(48.85273555769621,2.4280994430596543);
		
		// Carte centrée sur le marker
		var myMapOptions = {
			zoom: 16,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		
		// Création de la carte
		var myMap = new google.maps.Map(
			document.getElementById('map'),
			myMapOptions
			);
		
/*		// Création de l'icône
		var myMarkerImage = new google.maps.MarkerImage('img/icone_marker.png');*/
		
		// Création du marker
		var myMarker = new google.maps.Marker({
			// Coordonnées du marker
			position: myLatlng, 
			map: myMap,
			// Nous ajoutons un paramètre supplémentaire
			// icon pour lequel nous donnons le MarkerImage
			// que nous venons de créer.
	/*		icon: myMarkerImage,		*/
			title: "Défilé Exemple"
		});
		
		// Options de la fenêtre
		var myWindowOptions = {
			content:
			'<h6>Défilé Exemple</h6>'+
			'<p><a href="http://google.fr" title="Lien">Voir la vidéo</a></p>'
		};
		
		// Création de la fenêtre
		var myInfoWindow = new google.maps.InfoWindow(myWindowOptions);
		
		// Affichage de la fenêtre au click sur le marker
		google.maps.event.addListener(myMarker, 'click', function() {
			myInfoWindow.open(myMap,myMarker);
		});
	}

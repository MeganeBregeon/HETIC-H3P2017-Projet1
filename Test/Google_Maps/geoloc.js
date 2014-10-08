$(function()
{
    if(navigator.geolocation)
    {
        var map    = new google.maps.Map(document.getElementById('map'),{zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP}),
            center = null,
            marker = null,
            circle = null;

        navigator.geolocation.watchPosition(
            function(position)
            {
                console.log(position);
                
                $('#lat').html(position.coords.latitude);
                $('#lon').html(position.coords.longitude);
                $('#accuracy').html(position.coords.accuracy);
                
                //Center
                center = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                                       
                //Marker
                if(marker === null)
                    marker = new google.maps.Marker({position:center,map:map});
                else
                    marker.setPosition(center);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------               
         // Coordonnées d'un défilé 
		var myLatlng = new google.maps.LatLng(48.85273555769621,2.4280994430596543);
		// Création du marker
		var myMarker = new google.maps.Marker({
			// Coordonnées du marker
			position: myLatlng, 
			map: map,
			// Nous ajoutons un paramètre supplémentaire
			// icon pour lequel nous donnons le MarkerImage
			// que nous venons de créer.
	/*		icon: myMarkerImage,		*/
			title: "Défilé Exemple"
		});
		// Options de la fenêtre
		var myWindowOptions = {
			content:
			'<h6 id="titre_marker">Défilé Exemple</h6>'+
			'<p><a href="http://google.fr" title="Lien">Voir la vidéo</a></p>'
		};
		
		// Création de la fenêtre
		var myInfoWindow = new google.maps.InfoWindow(myWindowOptions);
		
		// Affichage de la fenêtre au click sur le marker
		google.maps.event.addListener(myMarker, 'click', function() {
			myInfoWindow.open(map,myMarker);
		});
 // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                      
                //Radius
                if(circle === null)
                    circle = new google.maps.Circle({map:map,fillColor:'#00c7ff',strokeWeight:0});
                circle.bindTo('center',marker,'position');
                circle.setRadius(position.coords.accuracy);
                
                
                //Set map center
                map.setCenter(center,17);
            },
            function(error)
            {
                console.log(error.message);
            }
        );
    }
    else
    {
        alert('Geolocation is not supported');
    }
});
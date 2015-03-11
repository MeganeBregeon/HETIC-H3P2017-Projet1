"use strict";

var model = {

    getJSON : function(url, successHandler, errorHandler) {
        var xhr = typeof XMLHttpRequest != 'undefined'
          ? new XMLHttpRequest()
          : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('get', url, true);
        xhr.onreadystatechange = function() {
          var status;
          var data;
          // http://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
          if (xhr.readyState == 4) { // `DONE`
            status = xhr.status;
            if (status == 200) {
              data = JSON.parse(xhr.responseText);
              successHandler && successHandler(data);
            } else {
              errorHandler && errorHandler(status);
            }
          }
        };
        xhr.send();
    },

    generate_tableau_coords_events : function(data, callback){
        var tableau_coords_events=[];                         // création du tableau de coordonnées
        var lat_event = 0.000000;                             // init. latitude
        var lng_event = 0.000000;                             // init. longitude
        for (var i=0;i<data.events.length;i++){               // pour chaque event : 
            lat_event = parseFloat(data.events[i].lat);       // récup lat et transforme en entier
            lng_event = parseFloat(data.events[i].lng);       // récup lng et transforme en entier
            var destination_next = new google.maps.LatLng(lat_event, lng_event);     // création destination G Maps            
            tableau_coords_events.push(destination_next);     // ajoute destination dans tableau                        
        }
        
        callback.call(this,tableau_coords_events);
    },
    
    calculateDistances : function(userPos_lat, userPos_lng, tableau_coords_events, renvoi_distances) {
        var origin = new google.maps.LatLng(userPos_lat, userPos_lng);        // REMPLACER PAR USER POSITION
        var tableau_distances_events = [];
        var num=num;
        var service = new google.maps.DistanceMatrixService();

        var distances = [];
        var durations = [];
          for (var x=0;x<tableau_coords_events.length;x++){ 
            service.getDistanceMatrix(
                {
                  origins: [origin],
                  destinations: [tableau_coords_events[x]],
                  travelMode: google.maps.TravelMode.DRIVING,
                  unitSystem: google.maps.UnitSystem.METRIC,
                  avoidHighways: false,
                  avoidTolls: false
                }, function(response, status) {
                      if (status != google.maps.DistanceMatrixStatus.OK) {
                        alert('Error was: ' + status);
                      } 
                      else {
                        var origins = response.originAddresses;
                        var destinations = response.destinationAddresses;
                            for (var i = 0; i < origins.length; i++) {
                              var results = response.rows[i].elements;
                                for (var j = 0; j < results.length; j++) {   
                                      // donne les distances :                                    
                                      var distance_event=''+parseInt(results[j].distance.text)+'km'; 
                                      distances.push(distance_event);

                                      if(distances.length>(tableau_coords_events.length-1)){                                        
                                        renvoi_distances.call(this,distances);                         
                                      }                                                                          
                                }  
                            }                             
                      }
                }
            );      
          } //fin for               
    },

    getUserLocation : function(callback){
      var self=this;
      navigator.geolocation.getCurrentPosition(
      function(pos){
        var userPos={lat:pos.coords.latitude,lng:pos.coords.longitude};
        callback.call(this,userPos); 
      },
      function(){
        self.load({url:'js/pos.json',type:'json'}).then(
          function(xhr){
            var userPos={
              lat:xhr.response.coords.latitude,
              lng:xhr.response.coords.longitude};
            callback.call(this,userPos);
          },
          function(){
            // traitement de l'erreur xhr;
          }
        );
      },
      {enableHighAccuracy:true}
      );
    },

    // calcul_temps_restant : function(timestamp_event){
      calcul_temps_restant : function(i_event){
 /*     var timestamp_now = new Date().getTime();
      var timenow = Math.floor((timestamp_now/1000));
      var min_now = timenow/60;
      var min_event = Math.floor(timestamp_event/60);
      var min_restant = Math.floor(min_event-min_now);
*/
      var min_restant = (i_event+1)*100;
      var affichage;

        if (min_restant<1){
            affichage="ok";
        }
        else{
            var days = Math.floor(min_restant/60/24);
            var hours = Math.floor(min_restant/60);
              if(hours<1){                      // si pas d'heure, affichage en minutes :
                  affichage = ""+min_restant+"min";
              }
              else{                         // si heure, affichage en heures et minutes :
                  if(days<1){
                    min_restant=min_restant-60*hours;
                    affichage = ""+hours+"h";    
                  }
                  else{   
                    hours=hours-24*days;      
                    affichage = ""+days+"j";
                  }            
              }
        }
      return affichage;
    }

}
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


  //   generate_tableau_coords_events : function(data, callback){
  //       var tableau_coords_events=[];                         // création du tableau de coordonnées
  //       var lat_event = 0.000000;                             // init. latitude
  //       var lng_event = 0.000000;                             // init. longitude
  //       for (var i=0;i<data.events.length;i++){               // pour chaque event : 
  //           lat_event = parseFloat(data.events[i].lat);       // récup lat et transforme en entier
  //           lng_event = parseFloat(data.events[i].lng);       // récup lng et transforme en entier
  //           var destination_next = new google.maps.LatLng(lat_event, lng_event);     // création destination G Maps            
  //           tableau_coords_events.push(destination_next);     // ajoute destination dans tableau                        
  //       }
        
  //       callback.call(this,tableau_coords_events);
  //   },
    
    

  //   calculateDistances : function(userPos_lat,userPos_lng,tableau_coords_events, renvoi_tableau_distances_events) {
  //       var origin = new google.maps.LatLng(userPos_lat, userPos_lng);        // REMPLACER PAR USER POSITION
  //       var tableau_distances_events = [];

  //       var service = new google.maps.DistanceMatrixService();
  //       service.getDistanceMatrix(
  //           {
  //             origins: [origin],
  //             destinations: tableau_coords_events,
  //             travelMode: google.maps.TravelMode.DRIVING,
  //             unitSystem: google.maps.UnitSystem.METRIC,
  //             avoidHighways: false,
  //             avoidTolls: false
  //           }, function(response, status) {
  //                 if (status != google.maps.DistanceMatrixStatus.OK) {
  //                   alert('Error was: ' + status);
  //                 } 
  //                 else {
  //                   var origins = response.originAddresses;
  //                   var destinations = response.destinationAddresses;
  //                       for (var i = 0; i < origins.length; i++) {
  //                         var results = response.rows[i].elements;
  //                           for (var j = 0; j < results.length; j++) {                                        
  //                                 var distance_event=results[j].distance.text;
  //                                 //console.log('Distance event: ', distance_event);  
  //                               tableau_distances_events.push(distance_event);// ajoute distance ds tableau 
  //                           }  
  //                       } 
  //                       renvoi_tableau_distances_events.call(this,tableau_distances_events);     
  //                 }
  //           }
  //       ); 
        
  //   },

  //   getUserLocation : function(callback){
  //   var self=this;
  //   navigator.geolocation.getCurrentPosition(
  //     function(pos){
  //       var userPos={lat:pos.coords.latitude,lng:pos.coords.longitude};
  //       callback.call(this,userPos); 
  //     },
  //     function(){
  //       self.load({url:'js/pos.json',type:'json'}).then(
  //         function(xhr){
  //           var userPos={
  //             lat:xhr.response.coords.latitude,
  //             lng:xhr.response.coords.longitude};
  //           callback.call(this,userPos);
  //         },
  //         function(){
  //           // traitement de l'erreur xhr;
  //         }
  //       );
  //     },
  //     {enableHighAccuracy:true}
  //   );
  // }



}
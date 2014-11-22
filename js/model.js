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



    calcul_video_live : function(data,callback_video){

      var timestamp_now = new Date().getTime();//recup date du jour
       
      var most_recent_video = 0;

      for (var i=0;i<data.events.length;i++){

        if(data.events[i].timestamp > most_recent_video){

          most_recent_video = data.events[i];

        }

      }
      callback_video.call(this,most_recent_video); 



    },



    calcul_temps_restant : function(timestamp_event){
      var timestamp_now = new Date().getTime();
      var timenow = Math.floor((timestamp_now/1000));
      var min_now = timenow/60;

      //var timestamp_event = 1416156900;
      var min_event = Math.floor(timestamp_event/60);

      var min_restant = Math.floor(min_event-min_now);
      var affichage;

        if (min_restant<1){
            affichage="évènement passé";
        }
        else{
            var days = Math.floor(min_restant/60/24);
            var hours = Math.floor(min_restant/60);
              if(hours<1){                      // si pas d'heure, affichage en minutes :
                  affichage = ""+min_restant+" min.";
              }
              else{                         // si heure, affichage en heures et minutes :
                  if(days<1){
                    min_restant=min_restant-60*hours;
                    affichage = ""+hours+" h"+min_restant+" min.";    
                  }
                  else{   
                    hours=hours-24*days;      
                    affichage = ""+days+" jrs, "+hours+" h ";
                  }            
              }
        }
      return affichage;
    }, 

    ecoute: function(){
    console.log(span_iti);

  }



}
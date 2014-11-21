"use strict";

var model = {

	getTWEET : function(keywords, callback_tweetback){

		var tweetback;
		var req = null;

				if (window.XMLHttpRequest){
		 			req = new XMLHttpRequest();
					if (req.overrideMimeType) {
						req.overrideMimeType('text/json');
					}
				}
				else if (window.ActiveXObject){
					try {
						req = new ActiveXObject("Msxml2.XMLHTTP");
					}
					catch (e){
						try {
							req = new ActiveXObject("Microsoft.XMLHTTP");
						} catch (e) {}
					}
			  }

				req.onreadystatechange = function(){
					if(req.readyState == 4){
						if(req.status == 200){
							// ICI ON FAIT CE QU'ON VEUT DU  req.responseText (texte de réponse avec le JSON dedans)
							tweetback=JSON.parse(req.responseText); // on stocke les résultats
							console.log(tweetback);
							callback_tweetback.call(this,tweetback);
						}
						else{
							//document.getElementById("zone").innerHTML="Error: returned status code " + req.status + " " + req.statusText;
							console.log("Impossible de récupérer les tweets pour le moment");
						}
					}
				};
				req.open("GET", "get_tweets.php?keywords="+keywords, true); 	// envoi des paramètres à la connexion php
				req.send(null);
	},

	selectTWEET : function(tweetback, callback_mediatweet){
		console.log(tweetback);
		var mediatweet = [];

		for (var i=0;i<tweetback.length;i++){
					if (tweetback[i].entities.media){
								mediatweet.push(tweetback[i]);
					}
					else {}
		}
		callback_mediatweet.call(this, mediatweet);
	}


}


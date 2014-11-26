"use strict";

var clicksearch = document.getElementById('formajax');
clicksearch.addEventListener('submit', search_key, false);			// écouteur search avec keywords saisis par l'user

// ––––––––––––––– FILTRES –––––––––––––
var see_all=document.getElementById('see_all');
see_all.addEventListener('click', search_with_filter, false);			// écouteur search au clic sur decouvrir

var celebrities=document.getElementById('celebrities');
celebrities.addEventListener('click', search_with_filter, false);			// écouteur search au clic sur celebrities

var creators=document.getElementById('creators');
creators.addEventListener('click', search_with_filter, false);			// écouteur search au clic sur creators

var styles=document.getElementById('styles');
styles.addEventListener('click', search_with_filter, false);			// écouteur search au clic sur styles

// ––––––––––––– Switch entre recent / populaire –––––––––––––

var recent_ou_populaire=document.getElementById('result_type');
recent_ou_populaire.addEventListener('change', recent_ou_populaire_change, false);			// écouteur search au clic sur styles

// ––––––––––––––– FONCTIONS SEARCH –––––––––––––

// fonction qui récupère tout et qui les affiche dans les colonnes
function search_social(keywords,result_type){
	ui.clear_columns(function(){	
		
		// à ajouter ici LANCE LE LOADER
		ui.playloader();

			model.getTWEET(keywords, result_type, function(tweetback){
					model.selectTWEET(tweetback, function(mediatweet){
						model.getINSTAGRAM(keywords, mediatweet, function(instas){
							// model.getVINE(keywords, mediatweet, instas, function(vine){
								
								// à ajouter ici STOPPE LE LOADER puis display_social :					
								ui.stoploader();

								ui.display_social(mediatweet,instas);

							// });															
		    			});
					});
			});
	});	
}



function search_key(e){
	if (e){
		e.preventDefault();
	}	
	var keywords = document.getElementById('key').value;								// on récupère les keywords saisis
	var result_type = document.querySelector("select[name='result_type']").value;		// on récup. result_type = recent / populaire
	
	search_social(keywords,result_type);		
}

function changement_recent_populaire(){

}


function search_with_filter(e){
	e.preventDefault();
	ui.filter_selected(this);
	
	var result_type=document.querySelector("select[name='result_type']").value;		
	
	if(this.id=='see_all'){
		var keywords='fashion';
		ui.replace_form('see_all',function(){
			search_social(keywords,result_type);			
		});		
	}

	else if(this.id=='celebrities'){
		var keywords='john';		
		ui.replace_form('celebrities',function(){
			search_social(keywords,result_type);			
		});		
	}

	else if(this.id=='creators'){
		var keywords='Dior';	
		ui.replace_form('creators',function(){
			search_social(keywords,result_type);			
		});		
	}

	else if(this.id=='styles'){
		var keywords='robe';		
		ui.replace_form('styles',function(){
			search_social(keywords,result_type);			
		});		
	}
	else{}
}


function liste_imposee_change(){	
	var keywords=document.getElementById('liste_imposee').value;
	var filtre=document.getElementById('result_type').value;
	
	console.log('Filtre = ',filtre,' keywords = ',keywords);	

	search_social(keywords,result_type);			
}

function recent_ou_populaire_change(){
	var filtre=document.getElementById('result_type').value;
	if(document.getElementById('key')){
		var keywords = document.getElementById('key').value;								// on récupère les keywords saisis	
	}
	else{
		var keywords=document.getElementById('liste_imposee').value;
	}	
	console.log('Filtre = ',filtre,' keywords = ',keywords);
	search_social(keywords,result_type);			
}





// –––––––––– APPELS DE FONCTION –––––––––––

search_key();		// lorsque l'on arrive sur la page la fonction se lance, le mot clé de base étant Fashion (value dans le form HTML)
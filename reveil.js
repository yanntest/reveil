exports.action = function(data, callback, config, SARAH){
var exec = require('child_process').exec;

//on arrete le reveil si demandé
var finreveil = data.finreveil
//console.log('finreveil',finreveil);

//variable pour la fonction fin reveil
var proces = '%CD%/plugins/reveil/bin/finreveil.bat'
if (finreveil>0){var child = exec(proces,
  function (error, stdout, stderr) {
    console.log(process);
   });

};


if(finreveil>0){
  return callback({'tts':"bonne journée"})};


 // fnct reveil 

// on regarde que la variable temps n'est pas vide
if(!data.tempsreveil){
  return callback({'tts':"Désolé je n'ai pas compris"})};

//on recupere les data du xml
var temps = data.tempsreveil
var tempsname = data.tempsreveilname

//heure actuell ::si <24 ou >24
// si <24h alors(24-heure actuel)+heure reveil
// si >24h alors heure reveil-heure actuel

// on récupére le temps en ms
var date = new Date();
  
  var heure =date.getHours();
  var minute =date.getMinutes();


////heure et minute en ms

//si heures>0 alors heures*3600000ms  
   if (heure > 0){ 
    heure = heure*3600000;
  }
  //console.log(heure)  
//si minutes>0 alors minutes*60000ms
  if (minute > 0){ 
    minute = minute*60000;
  }
  
  //heure+minute en ms
  var heureminute = heure+minute

//si reveil < heure actuel alors (24h-heure actuel)+heure reveil else >24 alors reveil-heure actuel
var tempsfinale=86400000-heureminute
if (temps < heureminute) {
     tempsfinal = parseInt(tempsfinale) + parseInt(temps);
 }
 else {
    tempsfinal = temps-heureminute;
} 

//on imprime pour le debug
console.log(temps,tempsname)
console.log(heureminute)
console.log(tempsfinal)
console.log(tempsfinale)


//on reset le timeout
clearTimeout(function() {var child = exec(process,
  function (error, stdout, stderr) {
    console.log(process),callback({'tts':" D'accord je vous réveille a " + tempsname+"; "});
   });
}, tempsfinal);
// on fait appel à la fonction minuteur

// on créer la fonction  pour le mp3
var process = '%CD%/plugins/reveil/bin/reveilmp3.bat';
// var process = '%CD%/plugins/reveil/bin/reveil.bat'; Pour ouvrir un flux radio 
// var process = '%CD%/plugins/reveil/sample/trompette.mp3'; Pour ouvrir un son 

setTimeout(function() {var child = exec(process,
  function (error, stdout, stderr) {
    console.log(process),callback({'tts':" D'accord je vous réveille a " + tempsname+"; "});
   });
}, tempsfinal);

callback({'tts':" D'accord je vous reveille a " + tempsname+" "}); 
};


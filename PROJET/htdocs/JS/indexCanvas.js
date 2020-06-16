/**
* Dessine un arc de cercle proportionnel au pourcentage pct dans le canvas d'identifiant id
* @param id string l'identifiant du canvas
* @param pct float le pourcentage
* */

function drawCanvasArc(id, pct){
  var somme = 0;
  pct.forEach(function(element) {
    somme = somme+element;
  })
  pct.forEach(function(element) {
    element = element/somme;
  })
  var canvas = document.getElementById(id);
  var context = canvas.getContext("2d");
  //je calcule la fin de mon arc en radian
  var start = Math.PI;
  var end = pct* Math.PI/50 + start;
  context.font="bold 30px Arial";
  context.textAlign="center"; 
  context.fillStyle ="#fff";
  context.clearRect(0, 0, canvas.width, canvas.height);
  //on commence une ligne
  context.beginPath();
  //l'épaisseur de la ligne
  context.lineWidth = 14;
  var i=0;
   pct.forEach(function(element) {
    start = end;
    end = end + element;
    if (i==1){context.strokeStyle = '#E18E8E';}
    if (i==2){context.strokeStyle = '#B2E18E';
    if(end!=100){end=100;}}
    //Définition de l'arc de cercle
    //- l'abcisse du centre : 100
    //- l'ordonnée du centre : 100
    //- le rayon de l'arc : 70
    //- l'angle de départ (en radian) : start
    //- l'angle final : end
    //- le sens de rotation : false (aiguille d'une montre)
    context.arc(100, 100, 70, start ,end ,false);
    // Dessine la ligne
    context.stroke();
    i=i+1;
    context.fillText(element + " %",100,100);
  })
  }
//on dessine l'arc
/**
* Anime l'affichage de l'arc de cercle
* @param id string l'identifiant du canvas
* @param currentpct float le pourcentage courant à afficher au moment t
* @param pct float le pourcentage final à afficher
*/

function animatedArc(id, currentpct, pct){
//le processus se termine quand currentpct a atteind pct
 
      pct.forEach(function(element) {
        alert(element);
      if(currentpct <= pct ){
      // On dessine l'arc courant avec la fonction définie au paragraphe précédent
      drawCanvasArc( id, currentpct);
      // On passe au pourcentage suivant
      setTimeout(function(){ animatedArc( id, currentpct+1, pct); }, 8); 
      }
    })
}
  


// On lance l'animation en commençant par un pourcentage de 0 et le pourcentage final 75


// function() {
//   alert("CANVAS CONNECTÉ"); 
//   var Grid = function(width, height) {
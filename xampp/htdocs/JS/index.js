alert("bonjour");   

var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send(); 


request.onload = function() {
  var reponse = request.response;
  document.getElementById('articles').textContent=reponse['product']['nutriscore_data'].proteins;
}


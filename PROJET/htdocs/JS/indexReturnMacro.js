var reponse = null;

function recherche(codeBarre){
	var requestURL = "https://world.openfoodfacts.org/api/v0/product/"+codeBarre.value+".json";
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send(); 


	request.onload = function() {
		reponse = request.response;
		//document.getElementById('macros').textContent=reponse["product"]["nutriscore_data"].proteins;

	}

}

function getProtein(){
	return reponse["product"]["nutriments"].proteins; 
}
function getFat(){
	return reponse["product"]["nutriments"].fat; 
}
function getGlucide(){
	return reponse["product"]["nutriments"].carbohydrates; 
}
function getCalorie(){
	return reponse["product"]["nutriments"].energy_value; 
}
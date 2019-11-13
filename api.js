var data = null;

var xhr = new XMLHttpRequest();

xhr.withCredentials = false;
xhr.open("GET", "https://the-cocktail-db.p.rapidapi.com/random.php", true);


xhr.addEventListener("readystatechange", function () {
	console.log(this.readyStatus)
	if (this.readyState === 4 && this.status == 200) {
		console.log(this.responseText);
		var info = JSON.parse(this.responseText)
		parse_drinks(info["drinks"][0])
		// console.log(info["drinks"][0]["strDrink"])
		// document.getElementById("resp").innerHTML = JSON.parse(this.responseText)
	}
});

xhr.setRequestHeader("x-rapidapi-host", "the-cocktail-db.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "042bde6587mshd6ee5cb1ae07dc7p118916jsn5b843a8f8ded");

xhr.send(data);

function parse_drinks(drink_info){
	 document.getElementById("name").innerHTML = drink_info["strDrink"]
	 document.getElementById("alcoholic").innerHTML = "This drink is " + drink_info["strAlcoholic"]
	 i = 1
	 while (i < 15){
	 	if (drink_info["strIngredient" + i] == null)
	 		break
	 	document.getElementById("ingredients").innerHTML += "<div class='ingredient'> " + parse_measure(drink_info["strMeasure" + i]) + " " + drink_info["strIngredient" + i] +"</div>"
	 	i++
	 }
	 document.getElementById("instructions").innerHTML = drink_info["strInstructions"]
}

function parse_measure(meas) {
	if (meas === null) {
		return ""
	}
	else 
		return meas
}

function refresh() {
	window.location.reload(true);
}

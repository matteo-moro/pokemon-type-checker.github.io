var pokemonNameList = document.getElementById("pokemon-name-datalist");

var data = JSON.parse(localStorage.getItem("pokemon-json"));

data.pokemonlist.forEach(function(pokemon)
{
	var option = document.createElement("option");
	option.value = pokemon.name;
	pokemonNameList.appendChild(option);

})

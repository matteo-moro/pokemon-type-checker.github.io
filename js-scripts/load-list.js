var request = new XMLHttpRequest();
window.pokemonDatalist = document.getElementById("pokemon-name-datalist");

request.onreadystatechange = function(response)
{
    if (request.readyState === 4 && request.status === 200)
    {
        var data = JSON.parse(request.responseText);
        data.pokemonlist.forEach(function(pokemon)
        {
            var option = document.createElement("option");
            option.value = pokemon.name;
            pokemonDatalist.appendChild(option);
        })
    }
}

request.open("GET", "json-files/svlist.json", true);
request.send();
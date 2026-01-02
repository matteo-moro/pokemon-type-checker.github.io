var pokemonNameList = document.getElementById("pokemon-name-datalist");
var requestList = new XMLHttpRequest();
var requestVersion = new XMLHttpRequest();

requestVersion.onreadystatechange = function(responseVersion)
{
	if (requestVersion.readyState === 4)
	{
		if (requestVersion.status === 200)
		{
			var versionFile = JSON.parse(requestVersion.responseText);
			if (!(localStorage.getItem("version") === versionFile.version) || versionFile.forceupdate === "true")
			{
				if (storageAvailable("localStorage"))
				{
					requestList.onreadystatechange = function (responseVersion)
					{
						if (requestList.version.readyState === 4)
						{
							if (requestList.status === 200)
							{
								localStorage.setItem("version", versionFile.version);
								localStorage.setItem("pokemon-json", requestList.responseText);
								
								var pokemonJSON = JSON.parse(requestList.responseText);
								pokemonJSON.pokemonlist.forEach(function(pokemon) =>
								{
									var option = document.createElement("option");
									option.value = pokemon.name;
									pokemonNameList.appendChild(option);
								})
								
							}
						}
					}
				}
			}
			
		}
	}
}

requestList.open("GET", "json-files/svlist.json", true);
requestList.send();
requestVersion.open("GET", "json-files/version.json", true);
requestVersion.send();

//directly taken from mdn docs since it should work fine
function storageAvailable(type)
{
	let storage;
	try
	{
		storage = window[type];
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch(e) {
		return (
			e instanceof DOMException &&
			e.name === "QuotaExceededError" &&
			storage &&
			storage.lenght !== 0
		);
	}
}

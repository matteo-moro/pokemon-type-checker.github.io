## TODO
- [ ] change script names to the actual naming convention used in the whole project (low prio)

## Summary

#### getIfUpdate.js
checks if the version in version.json is different from the one stored in the local storage and checks if the dev option to force update is correct, then changes a value stored in local storage used as a flag for other scripts to know if the pokemon data needs to be reloaded or updated

#### parsePokemonJson.js  
retrieves the pokemon json from internal memory (where it is stored as a string), parses it into a javascript object and sets up values for the rest of the code from the page from the retrieved data (e.g. pokemon names for the options in the pokemon choice)  

#### updatePokemonJson.js
if the flag set by getIfUpdate.js is true then updates a value in the local storage to store the string containing the text from svlist.json for future usage.  
If the flag is false then does not update the data stored

## Other
documentation of the json files should be in the json-files folder

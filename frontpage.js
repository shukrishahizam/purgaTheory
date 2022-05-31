// array storing all submitted entities in order
let entArray = [];

// instantiate elements for each entity submisson
const entNameField = document.getElementById('entNameField')
const entList = document.getElementById('entList');
const entNameForm = document.getElementById('entNameForm');

//on submission, push entity into array and list on page with index
entNameForm.addEventListener('submit', listEnt);
function listEnt (event) {
    event.preventDefault();
    
    let data = new FormData(event.target);
    let newEnt = data.get('entNameField');

    if (newEnt == "") {
        alert("Please enter an entity name"); 
    } else {
        entArray.push(newEnt);

        entList.append(entArray.length, ": ", newEnt, document.createElement("br"));

        entNameField.value = "";
    }
}

// instantiate elements to confirm entities
const confirmEnts = document.getElementById('confirmEnts');

// confirm entities and create JSON with key:"id" and value:"label"
confirmEnts.addEventListener('click', createJSON);

// nX JSON prototype
const nXJSON = {
    "nodes": [],
    "links": []
}

// yes i know this only modifies, not creates, the JSON
// easier to have it mutate the JSON rather than return a new one (for now)
function createJSON() {
    for (i = 0; i <entArray.length; i++) {
        nXJSON["nodes"][i] = {};
        nXJSON["nodes"][i]["id"] = i+1;
        nXJSON["nodes"][i]["label"] = entArray[i]; 
    }

}   

// array storing all submitted entities in order
let entArray = [];

// instantiate elements for each entity submisson
const entNameField = $('#entNameField')[0];
const entList = $('#entList')[0];
const entNameForm = $('#entNameForm')[0];

//on submission, push entity into array and list on page with index
entNameForm.addEventListener('submit', addEnt);
function addEnt (event) {
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
const confirmEnts = $('#confirmEnts')[0];

// disable button, confirm entities and create JSON with key:"id" and value:"label"
confirmEnts.addEventListener('click', () => {
    disableNewEnts();
    addEntsJSON();
    populateForm();
    unHideLinksSection();
});

// nX JSON prototype
const nXJSON = {
    "nodes": [],
    "links": []
}

// diable submit button on preesing confirm
function disableNewEnts() {
    const entNameButton = $('#entNameButton')[0];
    entNameButton.disabled = true;
}

// add ent nodes to JSON
function addEntsJSON() {
    for (i = 0; i <entArray.length; i++) {
        nXJSON["nodes"][i] = {};
        nXJSON["nodes"][i]["id"] = i+1;
        nXJSON["nodes"][i]["label"] = entArray[i]; 
    }

}   
// on click of submisison, render and unhide link entry section
function unHideLinksSection() {
    const linkSection = $("#linkSection")[0]; 
    linkSection.style.display = "block";
}

// populate link entry form
function populateForm() {
    // populate "from"
    const fromEnt = document.getElementById('fromEnt');
    for (i = 0 ; i < nXJSON["nodes"].length; i++) {
        fromEnt[i] = new Option(nXJSON["nodes"][i]["label"], nXJSON["nodes"][i]["id"]);
    }
    // populate "to"
    const toEnt = document.getElementById('toEnt');
    for (i = 0 ; i < nXJSON["nodes"].length; i++) {
        toEnt[i] = new Option(nXJSON["nodes"][i]["label"], nXJSON["nodes"][i]["id"]);
    }
}

// on submit, add each link to json and clear form
let linkCount = 0;
const linkForm = document.getElementById("linkForm")
linkForm.addEventListener('submit', (event) => {
    addLink(event);
    listLink(event);
    linkCount;
})

function addLink(event) {
    event.preventDefault();

    let data = new FormData(event.target); 
    nXJSON["links"][linkCount] = {
        source: parseInt(data.get('fromEnt')),
        target: parseInt(data.get('toEnt')), 
        ins: data.get('inst'),
        rln: data.get('rln'),
    };
}

function listLink(event) {
    let data = new FormData(event.target); 
    $('#linkList').append(
        '<p>',
        nXJSON['nodes'][nXJSON['links'][nXJSON['links'].length-1]['source']-1]['label'],
        ' is a ', data.get('rln'), 
        ' to ', nXJSON['nodes'][nXJSON['links'][nXJSON['links'].length-1]['target']-1]['label'], 
        ' under the ', data.get('inst'), 
        '</p>'
    )
}

// on submit, stringify nXJSON and send as a POST request, which will return a url for the image
// fetch to send JSON
async function sendData(json){
    const response = fetch('/process', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(json)
    })
    .then(json => {
        console.log('Success:', json);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    return response.text();
}

// on load, fetch the url and load into page

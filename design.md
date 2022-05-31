# System Design

## Input data
- Data will be inputted through an interface which outputs a .json file. 
- The user will first input a list of names for entities which will be nodes. 
  - For nodes, names will be directly encoded as 'label'
  - FOR PROTO: This will return the list of namee-labels with their associated node IDs
 - Then, the user will input a list of relationships with the following attributes
  - _source_: subject of relationship
  - _target_: object of relationship
  - _relationship_: of source to target, i.e. SOURCE is trustee/beneficiary/counterparty of TARGET
    - NB the _relationship_ is the identity of the source to the target
  - _instrument_: the legal instrument from which the _relationship_ originated
  - NOT FOR PROTO: 
    - _provision_: the citation of the part of the _instrument_ where the relationship originates
    - _provision\_text_: the text of the _provision
    - _relevant\_law_: notes on relevant legal rules which affect interpretation of provision
    - _source\_interpretation_: the _source_'s interpretation of the provision
    - _target\_interpretation_: the _target_'s interpretation of the provision

## Data
The .json file will use the node-link format:
{
  "nodes": [
    {"id": "Myriel", "label": 1},
    {"id": "Napoleon", "label": 1},
    {"id": "Mlle.Baptistine", "label": 1},
    {"id": "Mme.Magloire", "label": 1},
    {"id": "Mme.Hucheloup", "label": 8}
  ],
  "links": [
    {"source": "Napoleon", "target": "Myriel", "value": 1},
    {"source": "Mlle.Baptistine", "target": "Myriel", "value": 8},
    {"source": "Mme.Magloire", "target": "Myriel", "value": 10},
    {"source": "Mme.Magloire", "target": "Mlle.Baptistine", "value": 6}
    {"source": "Marius", "target": "Gavroche", "value": 4}
  ]
}

- nX JSONs are formatted as containing two objects, with names "nodes" and "links"
  - the value of "nodes" is an array which contains an object for each node
    - each node object has at least two key/pair values: "id" and "label"
  - the value of "links" is an array which contains an object for each edge
    - each edge object has at least two key/pair values: "source" and "target"



## Processing
- FOR PROTO:
  - Will take .json and turn into a networkX graph
  - Will turn nX graph into AGraph (formatted in DOT) where: 
    - edge label = relationship
    - edgetooltip = 'under' + instrument
- FOR LATER: 
  - Will take .json and turn into a networkX graph
  - Then reduce the nx graph into an AGraph based on user input on preferred labelsl
  - All nodes will retain label as initially input
  - User will select between options, each of which will have a templated process for .json -> networkX graph -> AGraph
  - FOR PROTO: options will be
    - _relationship-only_: edge label = relationship attribute
    - _relationship-and-instrument_: edgge label = relationship + 'under' + instrument

## Output
- Export as svg with tooltips
- FOR LATER: 
  - Export has cmap (?) rendered on HTML
  - Multiple output options: 
    - export as png
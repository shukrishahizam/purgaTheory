# Feature Specification

## Encoding information
- Each case (or theory of a case) is represented in one digraph
- Legal persons are encoded as nodes
- Legal relationships between persons will be endoded as edges
- There will be (at least) two 'levels' (?) of edges
    - An 'instrument' view: which only refers to sources of legal relationships (e.g. contracts, trust deeds, common law)
    - A 'provision' view: which is a more granular view
- Edges will encode:
    - A label of the relationship (e.g. counterparty)
    - The source of the relationship (e.g. Contract X)
    - A specification of the relationship (seprate e.g. third-party beneficiary)

- Sources of relationships will be objects (e.g. Contract X)
    - Which can contain objects which are more specific sources of specific obligations (e.g. clause 1a)
    - Those sub-objects will encode:
        - The text of the source (e.g. Party A will undertake to pay Party B £500)
        - What other sources its interpretation depends on (e.g. Consumer Rights Act 2015)

- External sources which bear on the legal issues will be objects (e.g. Consumer Rights Act 2015)
    - Will also have 'instrument' and 'provision' levels
    - Will encode the text of the source
    - Will encode parties' interpretation and arguments for interpretation


## Displaying information

## Manipulating information

## Potential features
- Hard-coding Hohfeld's schema of jural relations
    - NB: need a way to neatly represent entitlements owed by all-to-one (loops?)

- Toggle to highlight each party's preferred interpretations
# Feature Specification

## Encoding information
- Each case (or theory of a case) is represented in one multigraph

- Legal persons are encoded as nodes

- Legal relationships between persons will be endoded as arcs

- There will be (at least) two 'levels' (?) of arcs
    - An 'instrument' view: which only refers to sources of legal relationships (e.g. contracts, trust deeds, common law)
    - A 'provision' view: which is a more granular view

- Arcs will encode:
    - A label of the relationship (e.g. contract counterparty, beneficiary of, trustee to)
    - The source of the relationship (e.g. Contract X, Trust Deed Y)
    - A specification of the relationship
    - The non-legal/commercial/personal basis for the legal relationship (e.g. protection buyer); Along with all the arcs which are also based on the basis

- Sources of relationships will be instruments (e.g. Contract X)
    - Which can contain objects which are more specific sources of specific obligations (e.g. clause 1a)
    - Those sub-objects will encode:
        - The text of the source (e.g. Party A will undertake to pay Party B £500)
        - What other sources its interpretation depends on (e.g. Consumer Rights Act 2015)

- External sources which bear on the legal issues will be objects (e.g. Consumer Rights Act 2015)
    - Will also have 'instrument' and 'provision' levels
    - Will encode the text of the source
    - Will encode parties' interpretation and arguments for interpretation

## Displaying information
- Toggle to highlight each party's preferred interpretations

## Design possibilities
- Hard-coding Hohfeld's schema of jural relations
    - NB: need a way to neatly represent entitlements owed by all-to-one (loops?)
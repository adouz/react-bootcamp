# Prop Types
## Instructions
create a component `<PokemonCard />` that will take the following props and validate them using [prop-type](https://www.npmjs.com/package/prop-types) package.


- **id**: required number
- **show**: a bolean its default value is `true` 
- **name**: required string
- **description**: required string of at least `25` characters 
- **hp**: number between `0` and `120` its default value is `0`
- **type**: required string that is either `"Pokémon", "Trainer", or "Energy"`
- **stage**: either string or number

## Reference
- https://reactjs.org/docs/typechecking-with-proptypes.html
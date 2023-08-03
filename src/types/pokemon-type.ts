export type PokemonProps = {
  id: string;
  name: string;
  number: string;
  maxCP: number;
  image: string;
  types: string[];
};

export type PokemonQueryProps = {
  pokemons: PokemonProps[];
};

import { PokemonQueryProps } from "../types/pokemon-type";

export function getPokemonsCPRange(data: PokemonQueryProps | undefined) {
  if (!data || !data.pokemons || data.pokemons.length === 0) {
    return [0, 0];
  }

  let minCP: number = data.pokemons[0].maxCP;
  let maxCP: number = data.pokemons[0].maxCP;

  data.pokemons.forEach((pokemon) => {
    if (pokemon.maxCP < minCP) {
      minCP = pokemon.maxCP;
    }

    if (pokemon.maxCP > maxCP) {
      maxCP = pokemon.maxCP;
    }
  });

  return [minCP, maxCP];
}

import { useMemo } from "react";
import { PokemonProps } from "../types/pokemon-type";

type FiltersProps = {
  pokemons: PokemonProps[];
  filters: {
    range: number[];
    types: string[];
  };
};

export function useFilters({ pokemons, filters }: FiltersProps) {
  return useMemo(() => {
    const filterPokemonsByCPRange = (pokemon: PokemonProps) => {
      const isFilterEmpty = filters.range[0] === 0 && filters.range[1] === 100;

      return (
        isFilterEmpty ||
        (pokemon.maxCP >= filters.range[0] && pokemon.maxCP <= filters.range[1])
      );
    };

    const filterPokemonsByTypes = (types: string[], pokemon: PokemonProps) => {
      const isFilterEmpty = !types || types.length === 0;

      return isFilterEmpty
        ? pokemons
        : pokemon.types.some((type) => types.includes(type));
    };

    return pokemons.filter(
      (pokemon) =>
        filterPokemonsByCPRange(pokemon) &&
        filterPokemonsByTypes(filters.types, pokemon)
    );
  }, [pokemons, filters]);
}

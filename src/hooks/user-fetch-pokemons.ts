import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { TypesProps } from "../types/poke-types";
import { PokemonQueryProps } from "../types/pokemon-type";

export const GET_POKEMONS_QUERY = gql`
  query {
    pokemons(first: 200) {
      id
      name
      number
      maxCP
      image
      types
    }
  }
`;

export function useFetchPokemons() {
  const [pokeTypes, setPokeTypes] = useState<TypesProps[]>([]);

  const { data, loading, error } =
    useQuery<PokemonQueryProps>(GET_POKEMONS_QUERY);

  useEffect(() => {
    if (data) {
      const newTypes: TypesProps[] = [];
      data.pokemons.forEach((pokemon) => {
        pokemon.types.forEach((pokeType) => {
          if (!newTypes.find((type) => type.name === pokeType)) {
            newTypes.push({ name: pokeType, isChoosed: false });
          }
        });
      });
      setPokeTypes(newTypes);
    }
  }, [data]);

  return {
    data,
    error,
    loading,
    pokeTypes,
    setPokeTypes,
  };
}

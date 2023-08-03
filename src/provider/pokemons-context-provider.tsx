import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

import { TypesProps } from "../types/poke-types";
import { useFilters } from "../hooks/use-filters";
import { PokemonProps } from "../types/pokemon-type";
import { useFetchPokemons } from "../hooks/user-fetch-pokemons";
import { getPokemonsCPRange } from "../utils/get-pokemons-cp-range";

interface IPokemonsContextProviderState {
  loading: boolean;
  pokeTypes: TypesProps[];
  filteredRange: number[];
  rangeProps: { cp: number[] };
  filteredPokemons: PokemonProps[];
  handleRangeChange(values: number[]): void;
  handleChangeChoosedState(pokeType: string): void;
}

interface IContextProviderProps {
  children: ReactNode;
}

export const PokemonsContext = createContext(
  {} as IPokemonsContextProviderState
);

export function PokemonsContextProvider({ children }: IContextProviderProps) {
  const { data, loading, pokeTypes, setPokeTypes } = useFetchPokemons();

  const [types, setTypes] = useState<string[]>([]);
  const [filteredRange, setFilteredRange] = useState<number[]>([0, 100]);

  const [minCP, maxCP] = getPokemonsCPRange(data);

  const filteredPokemons = useFilters({
    pokemons: data?.pokemons ?? [],
    filters: { range: filteredRange, types },
  });

  useEffect(() => {
    if (data?.pokemons.length) {
      setFilteredRange([minCP, maxCP]);
    }
  }, [data, minCP, maxCP]);

  function handleRangeChange(values: number[]) {
    setFilteredRange(values);
  }

  function toggleType(pokeType: string, types: string[]) {
    return types.includes(pokeType)
      ? types.filter((t) => t !== pokeType)
      : [...types, pokeType];
  }

  function updateType(pokeType: string, types: TypesProps[]) {
    return types.map((type) =>
      type.name == pokeType ? { ...type, isChoosed: !type.isChoosed } : type
    );
  }

  const contextValue = useMemo(() => {
    function handleChangeChoosedState(pokeType: string) {
      setTypes((prevTypes) => toggleType(pokeType, prevTypes));

      setPokeTypes((prevTypes) => updateType(pokeType, prevTypes));
    }

    return {
      loading,
      pokeTypes,
      filteredRange,
      rangeProps: { cp: [minCP, maxCP] },
      filteredPokemons,
      handleRangeChange,
      handleChangeChoosedState,
    };
  }, [
    loading,
    pokeTypes,
    setPokeTypes,
    filteredRange,
    filteredPokemons,
    minCP,
    maxCP,
  ]);

  return (
    <PokemonsContext.Provider value={contextValue}>
      {children}
    </PokemonsContext.Provider>
  );
}

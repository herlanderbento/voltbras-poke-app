import { useContext } from "react";
import { PokemonsContext } from "../provider/pokemons-context-provider";

export function usePokemonsContext() {
  return useContext(PokemonsContext);
}

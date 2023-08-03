import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
import { PokemonList } from "../components/PokemonList";
import { usePokemonsContext } from "../../../hooks/use-pokemons-context";

export function PokemonMobileView() {
  const {
    loading,
    rangeProps,
    pokeTypes,
    filteredRange,
    filteredPokemons,
    handleRangeChange,
    handleChangeChoosedState,
  } = usePokemonsContext();

  return (
    <>
      <Header
        pokeTypes={pokeTypes}
        handleRangeChange={handleRangeChange}
        handleChangeChoosedState={handleChangeChoosedState}
        rangeProps={{ cp: [rangeProps.cp[0], rangeProps.cp[1]], filteredRange }}
      />
      <PokemonList pokemons={filteredPokemons} loading={loading} />
      <Menu />
    </>
  );
}

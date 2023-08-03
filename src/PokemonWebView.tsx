import { Card } from "./components/Card";
import { Type } from "./components/Type";

import { Loader } from "./components/Loader";
import { Sidebar } from "./components/Sidebar";
import { RangerFilter } from "./components/RangerFilter";
import { usePokemonsContext } from "./hooks/use-pokemons-context";

import "./styles/home.scss";

export function PokemonWebView() {
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
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="pokemon-list">
                  <div className="content">
                    <h1>Lista de pokémons</h1>
                    <span>Total visíveis: {filteredPokemons.length || 0}</span>
                  </div>
                  <div className="pokemon-container">
                    <div className="row">
                      {!!loading && <Loader />}
                      {filteredPokemons.map((pokemon) => (
                        <div className="col-lg-6 mb-4" key={pokemon.id}>
                          <Card {...pokemon} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="filter-container">
                  <div className="content">
                    <h1>Filtro</h1>
                  </div>
                  <RangerFilter
                    minValue={rangeProps.cp[0]}
                    maxValue={rangeProps.cp[1]}
                    value={filteredRange}
                    onChange={handleRangeChange}
                  />

                  <div className="pokemon-types">
                    <span>Types</span>
                    <div className="pokemon-types-grid mt-4">
                      {pokeTypes.map((type) => (
                        <Type
                          key={type.name}
                          name={type.name}
                          isChoosed={type.isChoosed}
                          handleChangeChoosedState={handleChangeChoosedState}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { Card } from "../../../../components/Card";
import { Loader } from "../../../../components/Loader";
import { PokemonProps } from "../../../../types/pokemon-type";

import "./pokemon-list.scss";

type PokemonMobileListProps = {
  pokemons: PokemonProps[];
  loading: boolean;
};

export function PokemonList({ pokemons, loading }: PokemonMobileListProps) {
  return (
    <div className="container">
      <div className="pokemon-mobile-list">
        <div className="content">
          <h1>Lista de pokémons</h1>
          <span>Total visíveis: {pokemons.length || 0} </span>
        </div>
        <div className="pokemon-container">
          <div className="row">
            {!!loading && <Loader />}
            {pokemons.map((pokemon) => (
              <div className="col-6 mb-4" key={pokemon.id}>
                <Card {...pokemon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

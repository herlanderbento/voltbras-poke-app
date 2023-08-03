import { LazyImage } from "../LazyImage";
import { PokemonProps } from "../../types/pokemon-type";
import { useMediaQuery } from "../../hooks/use-media-query";
import { getColorByCPRange } from "../../utils/get-color-by-cp-range";

import "./card.scss";

export function Card({ image, maxCP, name, number, types }: PokemonProps) {
  const isMediaScreen = useMediaQuery("(max-width: 1092px)");

  return (
    <div className="card-pokemon ">
      <div
        className={`d-flex ${isMediaScreen ? "card-pokemon-container" : ""}`}
      >
        <LazyImage src={image} alt={name} />
        <div className="card-pokemon-content">
          <div className="card-pokemon-left">
            <h3>{name}</h3>
            <span>{types.join(", ")}</span>

            <label style={{ background: getColorByCPRange(maxCP) }}>
              {maxCP}
            </label>
          </div>
          <div className="card-pokemon-right">
            <span className="number">{number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

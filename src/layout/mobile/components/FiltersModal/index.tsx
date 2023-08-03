import { Modal } from "reactstrap";
import { Type } from "../../../../components/Type";
import { RangerFilter } from "../../../../components/RangerFilter";
import { FiltersDropDrillingProps } from "../../../../types/filters-drop-drilling-type";

import "./filters-modal.scss";

type FilterProps = FiltersDropDrillingProps & {
  isOpen: boolean;
  handleClose: () => void;
};

export function FiltersModal({
  isOpen,
  pokeTypes,
  rangeProps,
  handleClose,
  handleRangeChange,
  handleChangeChoosedState,
}: FilterProps) {
  return (
    <Modal isOpen={isOpen} centered>
      <div className="filter-modal-container">
        <div className="content">
          <h1>Filtro</h1>
          <button className="close" onClick={handleClose}>
            X
          </button>
        </div>
        <RangerFilter
          minValue={rangeProps.cp[0]}
          maxValue={rangeProps.cp[1]}
          value={rangeProps.filteredRange}
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
                handleChangeChoosedState={() =>
                  handleChangeChoosedState(type.name)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

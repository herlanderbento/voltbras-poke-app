import { TypesProps } from "./poke-types";

export type FiltersDropDrillingProps = {
  rangeProps: {
    cp: number[];
    filteredRange: number[];
  };
  pokeTypes: TypesProps[];
  handleRangeChange: (values: number[]) => void;
  handleChangeChoosedState: (pokeType: string) => void;
};

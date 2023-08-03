/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "rc-slider";

import "./ranger-filter.scss";

type RangeFilterProps = {
  minValue: number;
  maxValue: number;
  value: number[] | any;
  onChange: (value: any) => void;
};

export function RangerFilter({
  value,
  minValue,
  maxValue,
  onChange,
}: RangeFilterProps) {
  return (
    <div className="ranger-filter">
      <span>maxCP</span>
      <Slider
        range
        min={minValue}
        max={maxValue}
        value={value}
        onChange={onChange}
      />
      <div className="d-flex mt-4 justify-content-between align-items-center ">
        <label>{value[0]}</label>
        <label>{value[1]}</label>
      </div>
    </div>
  );
}

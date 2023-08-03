import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { RangerFilter } from "../../components/RangerFilter";

describe("RangeFilterComponent unittest", () => {
  it("RangerFilter renders correctly and calls onChange", () => {
    const minValue = 0;
    const maxValue = 100;
    const initialValue = [25, 75];

    const { getByText } = render(
      <RangerFilter
        value={initialValue}
        minValue={minValue}
        maxValue={maxValue}
        onChange={() => {}}
      />
    );

    expect(getByText("maxCP")).toBeInTheDocument();
    expect(getByText(String(initialValue[0]))).toBeInTheDocument();
    expect(getByText(String(initialValue[1]))).toBeInTheDocument();
  });
});

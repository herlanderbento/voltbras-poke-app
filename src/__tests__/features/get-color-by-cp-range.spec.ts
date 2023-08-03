import { describe, test, expect } from "vitest";
import { getColorByCPRange } from "../../utils/get-color-by-cp-range";

describe("GetColorByCPRange unittest", () => {
  test("should be able to return a color based in CP value", () => {
    const maxCP = 500;
    const maxCPColorReturned = getColorByCPRange(maxCP);

    expect(maxCPColorReturned).toEqual("#F87060");
  });

  test("should be able to return a default color defined", () => {
    const maxCP = 2000;
    const maxCPColorReturned = getColorByCPRange(maxCP);

    expect(maxCPColorReturned).toEqual("#00C1FD");
  });
});

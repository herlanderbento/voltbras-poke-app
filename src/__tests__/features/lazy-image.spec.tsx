import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { LazyImage } from "../../components/LazyImage";

describe("LazyImage unittest", () => {
  it("should render a loading spinner if the image is not loaded", () => {
    const { getByTestId } = render(
      <LazyImage src="https://fakeUrl.com/image.png" alt="fake image" />
    );

    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });
});

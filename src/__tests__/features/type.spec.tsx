import { describe, it } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import { Type } from "../../components/Type";

describe("TypeComponent unit test", () => {
  it("Type component renders correctly and calls handleChangeChoosedState on click", () => {
    const mockName = "Electric";
    const mockIsChoosed = false;
    let mockFunctionCalled = false;

    const mockHandleChangeChoosedState = (name: string) => {
      mockFunctionCalled = true;
      console.log(name);
    };

    const { getByText, getByTestId } = render(
      <Type
        name={mockName}
        isChoosed={mockIsChoosed}
        handleChangeChoosedState={mockHandleChangeChoosedState}
      />
    );

    const typeContent = getByTestId("type-content");
    const label = getByText(mockName);
    expect(typeContent).toBeInTheDocument();
    expect(typeContent).toHaveClass("type-content");
    expect(typeContent).not.toHaveClass("active");
    expect(label).toBeInTheDocument();

    fireEvent.click(typeContent);

    expect(mockFunctionCalled).toBe(true);
  });
});

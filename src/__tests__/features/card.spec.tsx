import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { Card } from "../../components/Card";

describe("Card Component", () => {
  it("should render the card with correct data", () => {
    const mockPokemon = {
      image: "mock-image",
      maxCP: 100,
      name: "Pikachu",
      number: "025",
      types: ["Electric"],
    };

    const { getByText } = render(<Card id={""} {...mockPokemon} />);

    expect(getByText(mockPokemon.name)).toHaveTextContent(mockPokemon.name);
    expect(getByText(mockPokemon.types.join(", "))).toHaveTextContent(
      mockPokemon.types.join(", ")
    );
    expect(getByText(mockPokemon.number)).toHaveTextContent(mockPokemon.number);

    const maxCPElem = getByText(mockPokemon.maxCP.toString());
    expect(maxCPElem).toHaveStyle("background: #F87060");
  });
});

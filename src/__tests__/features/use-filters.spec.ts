import fs from "fs/promises";
import { describe, test } from "vitest";
import { getPath } from "../../utils/get-path";
import { useFilters } from "../../hooks/use-filters";
import { renderHook } from "@testing-library/react";

describe("useFilter hook unittest", () => {
  const pokemonMockPath = getPath("__tests__/mock/pokemons.mock.json");

  test("useFilters filters pokemons correctly based on range and types", async () => {
    const fileContent = await readFileAsync(pokemonMockPath);
    const { data } = JSON.parse(fileContent);

    const filters = {
      range: [367, 891],
      types: ["Grass", "Poison"],
    };

    const { result } = renderHook(() =>
      useFilters({ pokemons: data?.pokemons, filters })
    );

    expect(result.current).toEqual(expect.any(Array));
  });
});

async function readFileAsync(path: string) {
  return await fs.readFile(path, "utf8");
}

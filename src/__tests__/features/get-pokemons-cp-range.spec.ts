import fs from "fs/promises";
import { describe, test, expect } from "vitest";

import { getPath } from "../../utils/get-path";
import { getPokemonsCPRange } from "../../utils/get-pokemons-cp-range";

describe("GetPokemonsByCPRange unittest", () => {
  const pokemonMockPath = getPath("__tests__/mock/pokemons.mock.json");

  test("should be able to load data into mock file", async () => {
    const fileContent = await readFileAsync(pokemonMockPath);
    const { data } = JSON.parse(fileContent);

    const [minCP, maxCP] = getPokemonsCPRange(data);

    expect(minCP).toEqual(367);
    expect(maxCP).toEqual(2413);
  });
});

async function readFileAsync(path: string) {
  return await fs.readFile(path, "utf8");
}

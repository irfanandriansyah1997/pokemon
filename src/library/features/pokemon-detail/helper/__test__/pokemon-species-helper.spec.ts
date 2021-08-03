/* eslint-disable no-global-assign */
import { getSpeciesAPI } from '@/library/features/pokemon-detail/helper';
import PokespeciesFixture from '@/library/features/pokemon-detail/reducers/__test__/__fixture__/pokemon-species.fixtures.json';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(PokespeciesFixture)
  })
) as any;

beforeEach(() => {
  (fetch as jest.Mock).mockClear();
});

it(`Simulate Get Species API`, async () => {
  const pokeSpecies = await getSpeciesAPI(
    `https://pokeapi.co/api/v2/pokemon-species/1/`
  );

  expect(pokeSpecies.base_happiness).toEqual(70);
  expect(pokeSpecies.capture_rate).toEqual(45);
  expect(pokeSpecies.color).toStrictEqual({
    name: `green`,
    url: `https://pokeapi.co/api/v2/pokemon-color/5/`
  });
  expect(fetch).toHaveBeenCalledTimes(1);
});

import { act, renderHook } from '@testing-library/react-hooks';

import SamplePokemon from '@/library/features/my-pokemon/helper/__test__/__fixture__/sample-pokemon.fixture.json';
import { useMyPokemon } from '@/library/features/my-pokemon/hooks/my-pokemon.hooks';

describe(`Testing My Pokemon Hooks`, () => {
  beforeAll(() => {
    localStorage.setItem(`pokemon-list`, JSON.stringify(SamplePokemon));
  });

  describe(`Testing simulate Register Pokemon`, () => {
    it(`Success Case`, () => {
      const {
        result: {
          current: { action, state }
        }
      } = renderHook(() => useMyPokemon());

      expect(state.pokemon).toStrictEqual([
        {
          customName: `sample-testing`,
          id: 2,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          name: `ivysaur`
        },
        {
          customName: `my-turtle`,
          id: 8,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png`,
          name: `wartortle`
        }
      ]);

      act(() => {
        const response = action.registerPokemon(
          {
            id: 2,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
            name: `ivysaur`
          },
          `sample - testing`
        );

        expect(response).toBe(`sample - testing`);
      });
    });

    it(`Fail Case`, () => {
      const {
        result: {
          current: { action, state }
        }
      } = renderHook(() => useMyPokemon());

      expect(state.pokemon).toStrictEqual([
        {
          customName: `sample-testing`,
          id: 2,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          name: `ivysaur`
        },
        {
          customName: `my-turtle`,
          id: 8,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png`,
          name: `wartortle`
        },
        {
          customName: `sample - testing`,
          id: 2,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          name: `ivysaur`
        }
      ]);

      act(() => {
        const response = action.registerPokemon(
          {
            id: 2,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
            name: `ivysaur`
          },
          `sample - testing`
        );

        expect(response).toBe(undefined);
      });
    });
  });

  describe(`Testing simulate Remove Pokemon`, () => {
    it(`Success Case`, () => {
      const {
        result: {
          current: { action, state }
        }
      } = renderHook(() => useMyPokemon());

      expect(state.pokemon).toStrictEqual([
        {
          customName: `sample-testing`,
          id: 2,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          name: `ivysaur`
        },
        {
          customName: `my-turtle`,
          id: 8,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png`,
          name: `wartortle`
        },
        {
          customName: `sample - testing`,
          id: 2,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          name: `ivysaur`
        }
      ]);

      act(() => {
        const response = action.releasePokemon(`sample - testing`);

        expect(response).toBeTruthy();
      });
    });

    it(`Fail Case`, () => {
      const {
        result: {
          current: { action, state }
        }
      } = renderHook(() => useMyPokemon());

      expect(state.pokemon).toStrictEqual([
        {
          customName: `sample-testing`,
          id: 2,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          name: `ivysaur`
        },
        {
          customName: `my-turtle`,
          id: 8,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png`,
          name: `wartortle`
        }
      ]);

      act(() => {
        const response = action.releasePokemon(`sample - testing`);

        expect(response).toBeFalsy();
      });
    });
  });

  it(`Simulate Enable To Catch Method`, async () => {
    const {
      result: {
        current: { action, state }
      }
    } = renderHook(() => useMyPokemon());

    expect(state.pokemon).toStrictEqual([
      {
        customName: `sample-testing`,
        id: 2,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
        name: `ivysaur`
      },
      {
        customName: `my-turtle`,
        id: 8,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png`,
        name: `wartortle`
      }
    ]);

    await act(async () => {
      const response = await action.enableToCatch();

      expect(response).not.toBeUndefined();
    });
  });
});

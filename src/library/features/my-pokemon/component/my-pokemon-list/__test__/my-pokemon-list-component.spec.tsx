import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { MOCK_GRAPHQL_RESPONSE } from '@/library/__mock__/graphql-response.mock';
import MyPokemonProvider from '@/library/features/my-pokemon';
import MyPokemonList from '@/library/features/my-pokemon/component/my-pokemon-list';
import SamplePokemon from '@/library/features/my-pokemon/helper/__test__/__fixture__/sample-pokemon.fixture.json';
import PokemonDialog from '@/library/features/pokemon-detail/component/pokemon-dialog';
import PokemonCard from '@/library/features/pokemon-list/component/pokemon-card';

describe(`Testing My Pokemon List Component`, () => {
  describe(`Testing Snapshot Component`, () => {
    it(`Testing With Localstorage Not Empty`, async () => {
      localStorage.setItem(`pokemon-list`, JSON.stringify(SamplePokemon));

      const ui = mount(
        <MockedProvider mocks={MOCK_GRAPHQL_RESPONSE}>
          <MyPokemonProvider>
            <MyPokemonList />
          </MyPokemonProvider>
        </MockedProvider>
      );

      expect(ui.html()).toMatchSnapshot();
      expect(ui.find(PokemonCard).length).toBe(2);
    });

    it(`Testing With Localstorage Empty`, async () => {
      localStorage.setItem(`pokemon-list`, JSON.stringify([]));

      const ui = mount(
        <MockedProvider mocks={MOCK_GRAPHQL_RESPONSE}>
          <MyPokemonProvider>
            <MyPokemonList />
          </MyPokemonProvider>
        </MockedProvider>
      );

      expect(ui.html()).toMatchSnapshot();
      expect(ui.find(PokemonCard).length).toBe(0);
    });
  });

  it(`Testing Click One of PokemonCard`, async () => {
    localStorage.setItem(`pokemon-list`, JSON.stringify(SamplePokemon));

    const ui = mount(
      <MockedProvider mocks={MOCK_GRAPHQL_RESPONSE}>
        <MyPokemonProvider>
          <MyPokemonList />
        </MyPokemonProvider>
      </MockedProvider>
    );

    expect(ui.find(PokemonCard).length).toBe(2);
    ui.find(PokemonCard).at(0).simulate(`click`);

    await act(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(() => {
            ui.update();
            resolve();
          }, 1000);
        })
    );

    let showDialogProps = ui.find(PokemonDialog).at(0).prop(`showDialog`);
    const onProps = ui.find(PokemonDialog).at(0).prop(`on`);
    expect(showDialogProps).toBeTruthy();
    onProps?.({
      event: `on-close`
    });

    await act(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(() => {
            ui.update();
            resolve();
          }, 1000);
        })
    );

    showDialogProps = ui.find(PokemonDialog).at(0).prop(`showDialog`);
    expect(showDialogProps).toBeFalsy();
  });
});

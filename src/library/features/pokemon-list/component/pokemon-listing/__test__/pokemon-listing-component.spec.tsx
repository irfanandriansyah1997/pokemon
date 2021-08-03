import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { MOCK_GRAPHQL_RESPONSE } from '@/library/__mock__/graphql-response.mock';
import MyPokemonProvider from '@/library/features/my-pokemon';
import PokemonDialog from '@/library/features/pokemon-detail/component/pokemon-dialog';
import PokemonCard from '@/library/features/pokemon-list/component/pokemon-card';
import PokemonList from '@/library/features/pokemon-list/component/pokemon-listing';
import { PokeLoadMoreButton } from '@/library/styles/pokemon.styles';

describe(`Testing Pokemon Listing`, () => {
  it(`Testing Snapshot Component`, async () => {
    const ui = mount(
      <MockedProvider mocks={MOCK_GRAPHQL_RESPONSE}>
        <MyPokemonProvider>
          <PokemonList />
        </MyPokemonProvider>
      </MockedProvider>
    );

    expect(ui.html()).toMatchSnapshot();

    await act(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(() => {
            ui.update();
            resolve();
          }, 1000);
        })
    );

    expect(ui.html()).toMatchSnapshot();
    expect(ui.find(PokemonCard).length).toBe(10);
  });

  it(`Testing Simulate Load More`, async () => {
    const ui = mount(
      <MockedProvider mocks={MOCK_GRAPHQL_RESPONSE}>
        <MyPokemonProvider>
          <PokemonList />
        </MyPokemonProvider>
      </MockedProvider>
    );

    await act(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(() => {
            ui.update();
            resolve();
          }, 1000);
        })
    );

    expect(ui.find(PokemonCard).length).toBe(10);
    expect(ui.find(PokeLoadMoreButton).length).toBe(1);

    ui.find(PokeLoadMoreButton).at(0).simulate(`click`);

    await act(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(() => {
            ui.update();
            resolve();
          }, 1000);
        })
    );

    expect(ui.find(PokemonCard).length).toBe(20);
  });

  it(`Testing Click One of PokemonCard`, async () => {
    const ui = mount(
      <MockedProvider mocks={MOCK_GRAPHQL_RESPONSE}>
        <MyPokemonProvider>
          <PokemonList />
        </MyPokemonProvider>
      </MockedProvider>
    );

    await act(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(() => {
            ui.update();
            resolve();
          }, 1000);
        })
    );

    expect(ui.find(PokemonCard).length).toBe(10);
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

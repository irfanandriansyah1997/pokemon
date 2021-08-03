import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { MOCK_GRAPHQL_RESPONSE } from '@/library/__mock__/graphql-response.mock';
import MyPokemonProvider from '@/library/features/my-pokemon';
import PokemonRegisterDialog from '@/library/features/my-pokemon/component/register-dialog';
import PokespeciesFixture from '@/library/features/pokemon-detail/reducers/__test__/__fixture__/pokemon-species.fixtures.json';

import PokemonDialog from '..';

describe(`Testing Pokemon Dialog Interact`, () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(PokespeciesFixture)
    })
  ) as any;

  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it(`Testing simulate save pokemon`, async () => {
    const onSpy = jest.fn();
    const ui = mount(
      <MockedProvider mocks={MOCK_GRAPHQL_RESPONSE}>
        <MyPokemonProvider>
          <PokemonDialog
            on={onSpy}
            showDialog
            pokemon={{
              id: 1,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
              name: `bulbasaur`
            }}
          />
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

    const onProps = ui.find(PokemonRegisterDialog).at(0).prop(`on`);
    let savedProps = ui.find(PokemonRegisterDialog).at(0).prop(`saved`);

    expect(savedProps).toBeFalsy();
    onProps?.({
      event: `on-save`,
      payload: `saved-pokemon`
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

    savedProps = ui.find(PokemonRegisterDialog).at(0).prop(`saved`);
    expect(savedProps).toBeTruthy();
  });

  it(`Testing simulate delete pokemon`, async () => {
    const onSpy = jest.fn();
    const ui = mount(
      <MockedProvider mocks={MOCK_GRAPHQL_RESPONSE}>
        <MyPokemonProvider>
          <PokemonDialog
            on={onSpy}
            showDialog
            pokemon={{
              customName: `my bulbasaur`,
              id: 1,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`,
              name: `bulbasaur`
            }}
          />
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

    const onProps = ui.find(PokemonRegisterDialog).at(0).prop(`on`);
    const savedProps = ui.find(PokemonRegisterDialog).at(0).prop(`saved`);

    expect(savedProps).toBeTruthy();
    onProps?.({
      event: `on-release`
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
  });
});

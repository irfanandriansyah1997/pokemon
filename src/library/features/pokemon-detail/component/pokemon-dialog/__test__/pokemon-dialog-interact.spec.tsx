import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Sheet from 'react-modal-sheet';

import { MOCK_GRAPHQL_RESPONSE } from '@/library/__mock__/graphql-response.mock';
import MyPokemonProvider from '@/library/features/my-pokemon';
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

  it(`Testing snap dialog`, async () => {
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

    const onSnapProps = ui.find(Sheet).at(0).prop(`onSnap`);
    onSnapProps?.(0);

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
  });

  it(`Testing close dialog`, async () => {
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

    const onCloseProps = ui.find(Sheet).at(0).prop(`onClose`);
    onCloseProps?.();

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
  });
});

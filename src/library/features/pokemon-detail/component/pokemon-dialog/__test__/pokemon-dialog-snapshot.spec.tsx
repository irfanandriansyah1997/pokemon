import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { MOCK_GRAPHQL_RESPONSE } from '@/library/__mock__/graphql-response.mock';
import MyPokemonProvider from '@/library/features/my-pokemon';

import PokemonDialog from '..';

describe(`Testing Pokemon Dialog Component`, () => {
  describe(`Testing Snapshot Component`, () => {
    it(`Testing Pokemon Dialog From Pokemon List`, async () => {
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

      expect(ui.html()).toMatchSnapshot();
    });

    it(`Testing Pokemon Dialog From Pokemon List`, async () => {
      const onSpy = jest.fn();
      const ui = mount(
        <MockedProvider mocks={MOCK_GRAPHQL_RESPONSE}>
          <MyPokemonProvider>
            <PokemonDialog
              on={onSpy}
              showDialog
              pokemon={{
                customName: `My Bulbasaur`,
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

      expect(ui.html()).toMatchSnapshot();
    });
  });
});

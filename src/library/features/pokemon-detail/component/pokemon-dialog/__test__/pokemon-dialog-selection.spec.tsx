import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { MOCK_GRAPHQL_RESPONSE } from '@/library/__mock__/graphql-response.mock';
import TabAction from '@/library/component/tab-action';
import { TabActionItem } from '@/library/component/tab-action/style';
import MyPokemonProvider from '@/library/features/my-pokemon';
import PokespeciesFixture from '@/library/features/pokemon-detail/reducers/__test__/__fixture__/pokemon-species.fixtures.json';

import PokemonDialog from '..';

describe(`Testing Pokemon Dialog Component`, () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(PokespeciesFixture)
    })
  ) as any;

  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  describe(`Testing Set Selected Tabs`, () => {
    it(`When User Select About Tab`, async () => {
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

    it(`When User Select Stats Tab`, async () => {
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

      const tabItem = ui.find(TabAction).at(0).find(TabActionItem);
      expect(tabItem).toHaveLength(3);
      tabItem.at(1).simulate(`click`);

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

    it(`When User Select Version Tab`, async () => {
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

      const tabItem = ui.find(TabAction).at(0).find(TabActionItem);
      expect(tabItem).toHaveLength(3);
      tabItem.at(2).simulate(`click`);

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

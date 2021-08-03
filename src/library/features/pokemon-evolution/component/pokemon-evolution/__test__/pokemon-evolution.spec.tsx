import { MockedProvider } from '@apollo/client/testing';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { MOCK_GRAPHQL_RESPONSE } from '@/library/__mock__/graphql-response.mock';
import PokemonFixture from '@/library/features/pokemon-detail/reducers/__test__/__fixture__/full-pokemon.fixture.json';
import PokemonEvolution from '@/library/features/pokemon-evolution/component/pokemon-evolution';
import { IPokemon } from '@/library/interface/pokemon';

describe(`Testing Evolution Component`, () => {
  it(`Renders properly with default configuration`, async () => {
    const ui = mount(
      <MockedProvider mocks={MOCK_GRAPHQL_RESPONSE}>
        <PokemonEvolution {...((PokemonFixture as unknown) as IPokemon)} />
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

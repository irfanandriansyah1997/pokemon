import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PokemonAbout from '@/library/features/pokemon-detail/component/pokemon-about';
import FullPokemonFixture from '@/library/features/pokemon-detail/reducers/__test__/__fixture__/full-pokemon.fixture.json';
import { IPokemon } from '@/library/interface/pokemon';

describe(`Testing Pokemon About Component`, () => {
  it(`Testing Snapshot Test`, () => {
    const ui = shallow(
      <PokemonAbout {...((FullPokemonFixture as unknown) as IPokemon)} />
    );

    expect(toJson(ui)).toMatchSnapshot();
  });
});

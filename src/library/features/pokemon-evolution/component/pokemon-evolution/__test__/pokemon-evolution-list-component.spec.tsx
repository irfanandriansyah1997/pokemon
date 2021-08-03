import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { PokemonEvolutionList } from '@/library/features/pokemon-evolution/component/pokemon-evolution';

import PokemonEvoList from './__fixture__/pokemon-evo-list.fixture.json';

describe(`Testing Pokemon Evolution List`, () => {
  describe(`Testing With Snapshot`, () => {
    it(`Testing Shallow`, () => {
      const ui = shallow(<PokemonEvolutionList evolution={PokemonEvoList} />);

      expect(toJson(ui)).toMatchSnapshot();
    });

    it(`Testing Mounted`, () => {
      const ui = mount(<PokemonEvolutionList evolution={PokemonEvoList} />);

      expect(ui.html()).toMatchSnapshot();
    });
  });
});

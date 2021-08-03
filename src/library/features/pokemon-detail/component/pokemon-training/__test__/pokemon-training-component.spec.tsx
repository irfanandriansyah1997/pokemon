import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PokemonTraining from '@/library/features/pokemon-detail/component/pokemon-training';

describe(`Testing Pokemon Training Card Component`, () => {
  it(`Testing Snapshot Test`, () => {
    const ui = shallow(<PokemonTraining title="Sample Title" value="50%" />);

    expect(toJson(ui)).toMatchSnapshot();
  });
});

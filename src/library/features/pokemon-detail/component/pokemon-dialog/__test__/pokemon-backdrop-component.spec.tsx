import { mount } from 'enzyme';

import PokemonBackdrop from '@/library/features/pokemon-detail/component/pokemon-dialog/section/pokemon-backdrop.component';

describe(`Testing Pokemon Backdrop Component`, () => {
  describe(`Testing Snapshot Test`, () => {
    it(`Testing With Set Background Image`, () => {
      const ui = mount(
        <PokemonBackdrop
          backgroundImage="image-sample.png"
          show
          zIndex={99999}
        />
      );

      expect(ui.html()).toMatchSnapshot();
    });

    it(`Testing With Set Color`, () => {
      const ui = mount(<PokemonBackdrop color="#ddd" show zIndex={99999} />);

      expect(ui.html()).toMatchSnapshot();
    });

    it(`Testing With Unset Color`, () => {
      const ui = mount(<PokemonBackdrop show zIndex={99999} />);

      expect(ui.html()).toMatchSnapshot();
    });
  });
});

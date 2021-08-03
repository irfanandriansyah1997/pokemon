import { mount } from 'enzyme';

import PokemonTopSection from '@/library/features/pokemon-detail/component/pokemon-dialog/section/pokemon-top-section.component';
import { PokemonCloseDialog } from '@/library/styles/pokemon.styles';

import { IPokemonTopSectionProps } from '../../../interface';

const DEFAULT_PROPS: IPokemonTopSectionProps = {
  genus: `Seed Pokémon`,
  id: `1`,
  name: `bulbasaur`,
  on: jest.fn(),
  showImage: true,
  showWrapper: true,
  sprite: {
    back_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png`,
    front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
  }
};

describe(`Testing Pokemon Top Section Component`, () => {
  describe(`Testing Snapshot Test`, () => {
    it(`Testing With Set showImage & showWrapper equal true`, () => {
      const onSpy = jest.fn();
      const ui = mount(<PokemonTopSection {...DEFAULT_PROPS} on={onSpy} />);

      expect(ui.html()).toMatchSnapshot();
    });

    it(`Testing With Set showImage equal true`, () => {
      const onSpy = jest.fn();
      const ui = mount(
        <PokemonTopSection {...DEFAULT_PROPS} showWrapper={false} on={onSpy} />
      );

      expect(ui.html()).toMatchSnapshot();
    });

    it(`Testing With Set showWrapper equal true`, () => {
      const onSpy = jest.fn();
      const ui = mount(
        <PokemonTopSection {...DEFAULT_PROPS} showImage={false} on={onSpy} />
      );

      expect(ui.html()).toMatchSnapshot();
    });

    it(`Testing Without sprites`, () => {
      const onSpy = jest.fn();
      const ui = mount(
        <PokemonTopSection {...DEFAULT_PROPS} sprite={undefined} on={onSpy} />
      );

      expect(ui.html()).toMatchSnapshot();
    });
  });

  it(`Testing Simulate Close Dialog`, () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(
      <PokemonTopSection {...DEFAULT_PROPS} sprite={undefined} on={onSpy} />
    );

    ui.find(PokemonCloseDialog).at(0).simulate(`click`);
    expect(onSpy).toHaveBeenCalledTimes(1);
    expect(onSpy.mock.results[0].value).toStrictEqual({ event: `on-close` });
  });
});

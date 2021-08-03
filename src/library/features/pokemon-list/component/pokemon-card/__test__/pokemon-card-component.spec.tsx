import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { PokemonCardContainer } from '@/library/styles/pokemon.styles';

import PokemonCard from '..';

describe(`Testing Pokemon Card`, () => {
  describe(`Testing Snapshot Component`, () => {
    it(`Testing Card From Pokemon List`, () => {
      const onClickSpy = jest.fn((param) => param);
      const ui = shallow(
        <PokemonCard
          id={1}
          image="image"
          name="Bulbasaur"
          onClick={onClickSpy}
        />
      );

      expect(toJson(ui)).toMatchSnapshot();
    });

    it(`Testing Card From My Pokemon List`, () => {
      const onClickSpy = jest.fn((param) => param);
      const ui = shallow(
        <PokemonCard
          id={1}
          customName="My Bulbasaur"
          image="image"
          name="Bulbasaur"
          onClick={onClickSpy}
        />
      );

      expect(toJson(ui)).toMatchSnapshot();
    });
  });

  it(`Testing Simulate Click Card`, () => {
    const onClickSpy = jest.fn((param) => param);
    const ui = mount(
      <PokemonCard
        id={1}
        customName="My Bulbasaur"
        image="image"
        name="Bulbasaur"
        onClick={onClickSpy}
      />
    );

    ui.find(PokemonCardContainer).at(0).simulate(`click`);
    expect(onClickSpy).toHaveBeenCalledTimes(1);
    expect(onClickSpy.mock.results[0].value).toBe(`Bulbasaur`);
  });
});

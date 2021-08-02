import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Carousel from '@/library/component/carousel';
import {
  CarouselIndicator,
  CarouselNext,
  CarouselPrev
} from '@/library/component/carousel/style';

describe(`Testing Carousel Component`, () => {
  it(`Testing Snapshot Component`, () => {
    const ui = shallow(
      <Carousel item={[`image-1.jpg`, `image-2.jpg`]} showCarousel />
    );

    expect(toJson(ui)).toMatchSnapshot();
  });

  describe(`Testing Interact Carousel`, () => {
    it(`Simulate Click Next / Previous`, () => {
      const ui = mount(
        <Carousel item={[`image-1.jpg`, `image-2.jpg`]} showCarousel />
      );

      expect(ui.find(CarouselIndicator).at(0).prop(`indicator`)).toBe(0);
      expect(ui.find(`div div`).at(0).prop(`style`)).toStrictEqual({
        transform: `translateX(0%)`
      });

      ui.find(CarouselNext).at(0).simulate(`click`);
      ui.update();

      expect(ui.find(CarouselIndicator).at(0).prop(`indicator`)).toBe(1);
      expect(ui.find(`div div`).at(0).prop(`style`)).toStrictEqual({
        transform: `translateX(-100%)`
      });

      ui.find(CarouselPrev).at(0).simulate(`click`);
      ui.update();

      expect(ui.find(CarouselIndicator).at(0).prop(`indicator`)).toBe(0);
      expect(ui.find(`div div`).at(0).prop(`style`)).toStrictEqual({
        transform: `translateX(0%)`
      });
    });
  });
});

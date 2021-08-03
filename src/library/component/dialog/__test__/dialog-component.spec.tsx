import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Dialog from '@/library/component/dialog';
import { DialogClose, DialogStyled } from '@/library/component/dialog/style';
import { PokemonBackdropStyle } from '@/library/styles/pokemon.styles';

describe(`Testing Dialog Component`, () => {
  describe(`Testing With Snapshot`, () => {
    it(`Testing With Dialog Hidden`, () => {
      const onSpy = jest.fn();
      const ui = shallow(
        <Dialog on={onSpy} show={false} title="Dialog Title">
          <Dialog.Body>Body Content</Dialog.Body>
          <Dialog.Footer>
            <button type="button">Sample Button</button>
          </Dialog.Footer>
        </Dialog>
      );

      expect(toJson(ui)).toMatchSnapshot();
    });

    it(`Testing With Dialog Shown`, () => {
      const onSpy = jest.fn();
      const ui = shallow(
        <Dialog on={onSpy} show title="Dialog Title">
          <Dialog.Body>Body Content</Dialog.Body>
          <Dialog.Footer>
            <button type="button">Sample Button</button>
          </Dialog.Footer>
        </Dialog>
      );

      expect(toJson(ui)).toMatchSnapshot();
    });
  });

  describe(`Testing Interact Dialog Component`, () => {
    it(`Testing Simulate Backdrop Click`, () => {
      const onSpy = jest.fn((param) => param);
      const ui = mount(
        <Dialog on={onSpy} show title="Dialog Title">
          <Dialog.Body>Body Content</Dialog.Body>
          <Dialog.Footer>
            <button type="button">Sample Button</button>
          </Dialog.Footer>
        </Dialog>
      );

      expect(ui.find(PokemonBackdropStyle).at(0).prop(`show`)).toBe(true);
      ui.find(PokemonBackdropStyle).at(0).simulate(`click`);

      expect(onSpy).toHaveBeenCalledTimes(1);
      expect(onSpy.mock.results[0].value).toStrictEqual({ event: `on-close` });
    });

    it(`Testing Simulate Dialog Close`, () => {
      const onSpy = jest.fn((param) => param);
      const ui = mount(
        <Dialog on={onSpy} show title="Dialog Title">
          <Dialog.Body>Body Content</Dialog.Body>
          <Dialog.Footer>
            <button type="button">Sample Button</button>
          </Dialog.Footer>
        </Dialog>
      );

      expect(ui.find(DialogStyled).at(0).prop(`show`)).toBe(true);
      ui.find(DialogClose).at(0).simulate(`click`);

      expect(onSpy).toHaveBeenCalledTimes(1);
      expect(onSpy.mock.results[0].value).toStrictEqual({ event: `on-close` });
    });
  });
});

import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Dialog from '@/library/component/dialog';
import { DialogClose } from '@/library/component/dialog/style';
import FormRegistrationDialog from '@/library/features/my-pokemon/component/form-register-dialog';
import { Text } from '@/library/styles/general.styles';
import {
  MyPokemonButtonOk,
  MyPokemonTextfield
} from '@/library/styles/pokemon.styles';

describe(`Testing Form Registration Dialog`, () => {
  describe(`Testing Snapshot Component`, () => {
    it(`Testing Initial Case`, () => {
      const onSpy = jest.fn((param) => param);
      const ui = shallow(<FormRegistrationDialog on={onSpy} show />);

      expect(toJson(ui)).toMatchSnapshot();
    });

    it(`Testing Form Registration When Error Is Not Undefined`, () => {
      const onSpy = jest.fn((param) => param);
      const ui = shallow(
        <FormRegistrationDialog on={onSpy} show error="Error sample" />
      );

      expect(toJson(ui)).toMatchSnapshot();
    });
  });

  describe(`Testing Interact Form Registration Dialog`, () => {
    it(`Testing Simulate Close Dialog`, () => {
      const onSpy = jest.fn((param) => param);
      const ui = mount(<FormRegistrationDialog on={onSpy} show />);

      ui.find(DialogClose).at(0).simulate(`click`);

      expect(onSpy).toHaveBeenCalledTimes(1);
      expect(onSpy.mock.results[0].value).toStrictEqual({ event: `on-close` });
    });

    it(`Testing Simulate Save Pokemon`, () => {
      const onSpy = jest.fn((param) => param);
      const ui = mount(<FormRegistrationDialog on={onSpy} show />);

      ui.find(MyPokemonTextfield).simulate(`change`, {
        target: { value: `Sample Pokemon Name` }
      });
      ui.find(MyPokemonButtonOk).simulate(`click`);

      expect(onSpy).toHaveBeenCalledTimes(1);
      expect(onSpy.mock.results[0].value).toStrictEqual({
        event: `on-submit`,
        payload: `Sample Pokemon Name`
      });
    });

    it(`Testing Simulate Save Pokemon (add error)`, () => {
      const onSpy = jest.fn((param) => param);
      const ui = mount(
        <FormRegistrationDialog on={onSpy} show error="Error Example" />
      );

      expect(ui.find(Dialog.Body).at(0).find(Text).at(0).text()).toBe(
        `Error Example`
      );
      expect(ui.find(MyPokemonButtonOk).at(0).prop(`disabled`)).toBe(true);

      ui.find(MyPokemonTextfield).simulate(`change`, {
        target: { value: `Sample Pokemon Name` }
      });
      expect(ui.find(MyPokemonButtonOk).at(0).prop(`disabled`)).toBe(false);
      ui.find(MyPokemonButtonOk).simulate(`click`);

      expect(onSpy).toHaveBeenCalledTimes(1);
      expect(onSpy.mock.results[0].value).toStrictEqual({
        event: `on-submit`,
        payload: `Sample Pokemon Name`
      });
    });
  });
});

import { mount } from 'enzyme';

import Dialog from '@/library/component/dialog';
import ConfirmationDialog from '@/library/features/my-pokemon/component/confirmation-dialog';
import { Text } from '@/library/styles/general.styles';
import {
  MyPokemonButtonCancel,
  MyPokemonButtonOk
} from '@/library/styles/pokemon.styles';

describe(`Testing Confirmation Dialog`, () => {
  it(`Cross check label confirmation dialog`, () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(<ConfirmationDialog on={onSpy} show name="Mega Raichu" />);

    expect(ui.find(Dialog.Body).at(0).find(Text).at(0).text()).toBe(
      `Are you sure delete pokemon Mega Raichu ?`
    );
  });

  it(`Simulation Cancel Delete Pokemon`, () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(<ConfirmationDialog on={onSpy} show name="Mega Raichu" />);

    ui.find(MyPokemonButtonOk).at(0).simulate(`click`);

    expect(onSpy).toHaveBeenCalledTimes(1);
    expect(onSpy.mock.results[0].value).toStrictEqual({ event: `on-close` });
  });

  it(`Simulation Delete Pokemon`, () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(<ConfirmationDialog on={onSpy} show name="Mega Raichu" />);

    ui.find(MyPokemonButtonCancel).at(0).simulate(`click`);

    expect(onSpy).toHaveBeenCalledTimes(1);
    expect(onSpy.mock.results[0].value).toStrictEqual({ event: `on-delete` });
  });
});

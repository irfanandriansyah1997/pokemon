import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import MyPokemonProvider from '@/library/features/my-pokemon';
import ConfirmationDialog from '@/library/features/my-pokemon/component/confirmation-dialog';
import ErrorDialog from '@/library/features/my-pokemon/component/error-dialog';
import FormRegistrationDialog from '@/library/features/my-pokemon/component/form-register-dialog';
import PokemonRegisterDialog from '@/library/features/my-pokemon/component/register-dialog';
import { getPokemon } from '@/library/features/my-pokemon/helper';
import {
  MyPokemonButtonCancel,
  MyPokemonButtonOk,
  PokemonRegisterFAB
} from '@/library/styles/pokemon.styles';

jest.mock(`@/library/features/my-pokemon/hooks/my-pokemon.hooks.ts`);

describe(`Case Delete Pokemon`, () => {
  beforeAll(() => {
    localStorage.setItem(
      `pokemon-list`,
      JSON.stringify([
        {
          customName: `Sample Pokemon Name`,
          id: 2,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
          name: `ivysaur`
        }
      ])
    );
  });

  it(`Testing Simulate Cancel Delete Pokemon`, async () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(
      <MyPokemonProvider>
        <PokemonRegisterDialog
          on={onSpy}
          saved
          pokemon={{
            customName: `Sample Pokemon Name`,
            id: 2,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
            name: `ivysaur`
          }}
          show
        />
      </MyPokemonProvider>
    );

    ui.find(PokemonRegisterFAB).at(0).simulate(`click`);

    await act(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(() => {
            ui.update();
            resolve();
          }, 100);
        })
    );

    expect(ui.find(FormRegistrationDialog).at(0).prop(`show`)).toBeFalsy();
    expect(ui.find(ConfirmationDialog).at(0).prop(`show`)).toBeTruthy();
    expect(ui.find(ErrorDialog).at(0).prop(`show`)).toBeFalsy();

    ui.find(ConfirmationDialog)
      .at(0)
      .find(MyPokemonButtonOk)
      .at(0)
      .simulate(`click`);

    await act(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(() => {
            ui.update();
            resolve();
          }, 100);
        })
    );

    expect(ui.find(FormRegistrationDialog).at(0).prop(`show`)).toBeFalsy();
    expect(ui.find(ConfirmationDialog).at(0).prop(`show`)).toBeFalsy();
    expect(ui.find(ErrorDialog).at(0).prop(`show`)).toBeFalsy();
  });

  it(`Testing Simulate Delete Pokemon`, async () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(
      <MyPokemonProvider>
        <PokemonRegisterDialog
          on={onSpy}
          saved
          pokemon={{
            customName: `Sample Pokemon Name`,
            id: 2,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
            name: `ivysaur`
          }}
          show
        />
      </MyPokemonProvider>
    );

    ui.find(PokemonRegisterFAB).at(0).simulate(`click`);

    await act(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(() => {
            ui.update();
            resolve();
          }, 100);
        })
    );

    expect(ui.find(FormRegistrationDialog).at(0).prop(`show`)).toBeFalsy();
    expect(ui.find(ConfirmationDialog).at(0).prop(`show`)).toBeTruthy();
    expect(ui.find(ErrorDialog).at(0).prop(`show`)).toBeFalsy();

    ui.find(ConfirmationDialog)
      .at(0)
      .find(MyPokemonButtonCancel)
      .at(0)
      .simulate(`click`);

    await act(
      () =>
        new Promise<void>((resolve) => {
          setTimeout(() => {
            ui.update();
            resolve();
          }, 100);
        })
    );

    expect(getPokemon()).toStrictEqual([]);
  });
});

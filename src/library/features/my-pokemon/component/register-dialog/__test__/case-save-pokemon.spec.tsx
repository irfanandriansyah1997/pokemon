import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import Dialog from '@/library/component/dialog';
import { DialogClose } from '@/library/component/dialog/style';
import MyPokemonProvider from '@/library/features/my-pokemon';
import ErrorDialog from '@/library/features/my-pokemon/component/error-dialog';
import FormRegistrationDialog from '@/library/features/my-pokemon/component/form-register-dialog';
import PokemonRegisterDialog from '@/library/features/my-pokemon/component/register-dialog';
import { getPokemon } from '@/library/features/my-pokemon/helper';
import {
  MyPokemonButtonOk,
  MyPokemonTextfield,
  PokemonRegisterFAB
} from '@/library/styles/pokemon.styles';

jest.mock(`@/library/features/my-pokemon/hooks/my-pokemon.hooks.ts`);

describe(`Case Save Pokemon`, () => {
  beforeAll(() => {
    localStorage.setItem(`pokemon-list`, JSON.stringify([]));
  });

  afterEach(() => {
    jest.spyOn(global.Math, `random`).mockRestore();
  });

  it(`Testing Simulate Save Pokemon`, async () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(
      <MyPokemonProvider>
        <PokemonRegisterDialog
          on={onSpy}
          saved={false}
          pokemon={{
            id: 2,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
            name: `ivysaur`
          }}
          show
        />
      </MyPokemonProvider>
    );

    jest.spyOn(global.Math, `random`).mockReturnValue(0.5);
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

    expect(ui.find(FormRegistrationDialog).at(0).prop(`show`)).toBeTruthy();
    expect(ui.find(ErrorDialog).at(0).prop(`show`)).toBeFalsy();

    ui.find(FormRegistrationDialog)
      .at(0)
      .find(MyPokemonTextfield)
      .simulate(`change`, {
        target: { value: `Sample Pokemon Name` }
      });
    ui.find(FormRegistrationDialog)
      .at(0)
      .find(MyPokemonButtonOk)
      .at(0)
      .simulate(`click`);

    expect(getPokemon()).toStrictEqual([
      {
        customName: `Sample Pokemon Name`,
        id: 2,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
        name: `ivysaur`
      }
    ]);
  });

  it(`Testing Simulate Save Duplicate Pokemon`, async () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(
      <MyPokemonProvider>
        <PokemonRegisterDialog
          on={onSpy}
          saved={false}
          pokemon={{
            id: 2,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
            name: `ivysaur`
          }}
          show
        />
      </MyPokemonProvider>
    );

    jest.spyOn(global.Math, `random`).mockReturnValue(0.5);
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

    expect(ui.find(FormRegistrationDialog).at(0).prop(`show`)).toBeTruthy();
    expect(ui.find(ErrorDialog).at(0).prop(`show`)).toBeFalsy();

    ui.find(FormRegistrationDialog)
      .at(0)
      .find(MyPokemonTextfield)
      .simulate(`change`, {
        target: { value: `Sample Pokemon Name` }
      });
    ui.find(FormRegistrationDialog)
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

    expect(
      ui.find(FormRegistrationDialog).at(0).find(Dialog.Body).at(0).text()
    ).toBe(`Duplicate Pokemon`);
  });

  it(`Testing Simulate Cancel Save Pokemon`, async () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(
      <MyPokemonProvider>
        <PokemonRegisterDialog
          on={onSpy}
          saved={false}
          pokemon={{
            id: 2,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
            name: `ivysaur`
          }}
          show
        />
      </MyPokemonProvider>
    );

    jest.spyOn(global.Math, `random`).mockReturnValue(0.5);
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

    expect(ui.find(FormRegistrationDialog).at(0).prop(`show`)).toBeTruthy();
    expect(ui.find(ErrorDialog).at(0).prop(`show`)).toBeFalsy();

    ui.find(FormRegistrationDialog)
      .at(0)
      .find(DialogClose)
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
    expect(ui.find(ErrorDialog).at(0).prop(`show`)).toBeFalsy();
  });

  it(`Testing Simulate Click Pokeball But Pokemon Ran Away`, async () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(
      <MyPokemonProvider>
        <PokemonRegisterDialog
          on={onSpy}
          saved={false}
          pokemon={{
            id: 2,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`,
            name: `ivysaur`
          }}
          show
        />
      </MyPokemonProvider>
    );

    jest.spyOn(global.Math, `random`).mockReturnValue(15);
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
    expect(ui.find(ErrorDialog).at(0).prop(`show`)).toBeTruthy();

    ui.find(ErrorDialog).at(0).find(DialogClose).at(0).simulate(`click`);
    ui.update();

    expect(ui.find(FormRegistrationDialog).at(0).prop(`show`)).toBeFalsy();
    expect(ui.find(ErrorDialog).at(0).prop(`show`)).toBeFalsy();
  });
});

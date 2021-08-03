import { mount } from 'enzyme';

import MyPokemonProvider from '@/library/features/my-pokemon';
import PokemonRegisterDialog from '@/library/features/my-pokemon/component/register-dialog';

jest.mock(`@/library/features/my-pokemon/hooks/my-pokemon.hooks.ts`);

describe(`Case Pokemon Null`, () => {
  beforeAll(() => {
    localStorage.setItem(`pokemon-list`, JSON.stringify([]));
  });

  afterEach(() => {
    jest.spyOn(global.Math, `random`).mockRestore();
  });

  it(`Testing Render`, async () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(
      <MyPokemonProvider>
        <PokemonRegisterDialog
          on={onSpy}
          saved={false}
          pokemon={undefined}
          show
        />
      </MyPokemonProvider>
    );

    expect(ui.html()).toMatchSnapshot();
  });
});

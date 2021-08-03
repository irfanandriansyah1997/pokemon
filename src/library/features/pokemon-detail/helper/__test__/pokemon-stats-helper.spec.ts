import { translateLabelStats } from '@/library/features/pokemon-detail/helper';

describe(`Testing Pokemon States Helper`, () => {
  describe(`Testing Translate Label Stats Section`, () => {
    it(`When we set parameter label correct`, () => {
      expect(translateLabelStats(`attack`)).toBe(`Attack`);
      expect(translateLabelStats(`defense`)).toBe(`Defense`);
      expect(translateLabelStats(`hp`)).toBe(`Hp`);
      expect(translateLabelStats(`special-attack`)).toBe(`Spc. Attack`);
      expect(translateLabelStats(`special-defense`)).toBe(`Spc. Defense`);
      expect(translateLabelStats(`speed`)).toBe(`Speed`);
    });

    it(`When we set parameter label wrong`, () => {
      expect(translateLabelStats(`Unknown Key`)).toBe(`Unknown Key`);
    });
  });
});

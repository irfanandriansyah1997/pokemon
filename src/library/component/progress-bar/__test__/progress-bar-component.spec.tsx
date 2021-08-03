import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ProgressBar from '@/library/component/progress-bar';

describe(`Testing Progress Bar`, () => {
  describe(`Testing With Snapshot`, () => {
    it(`Testing With Value Under 50%`, () => {
      const ui = shallow(<ProgressBar maxValue={100} value={45} />);

      expect(toJson(ui)).toMatchSnapshot();
    });

    it(`Testing With Value Under 75%`, () => {
      const ui = shallow(<ProgressBar maxValue={100} value={70} />);

      expect(toJson(ui)).toMatchSnapshot();
    });

    it(`Testing With Value Greater Than 75%`, () => {
      const ui = shallow(<ProgressBar maxValue={100} value={90} />);

      expect(toJson(ui)).toMatchSnapshot();
    });
  });

  describe(`Testing Progress Bar`, () => {
    it(`Testing With Value Under 50%`, () => {
      const ui = mount(<ProgressBar maxValue={100} value={45} />);

      expect(ui.html()).toMatchSnapshot();
    });

    it(`Testing With Value Under 75%`, () => {
      const ui = mount(<ProgressBar maxValue={100} value={70} />);

      expect(ui.html()).toMatchSnapshot();
    });

    it(`Testing With Value Greater Than 75%`, () => {
      const ui = mount(<ProgressBar maxValue={100} value={90} />);

      expect(ui.html()).toMatchSnapshot();
    });
  });
});

import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DialogClose } from '@/library/component/dialog/style';
import ErrorDialog from '@/library/features/my-pokemon/component/error-dialog';

describe(`Testing Error Dialog Component`, () => {
  it(`Testing Snapshot Component`, () => {
    const onSpy = jest.fn((param) => param);
    const ui = shallow(<ErrorDialog on={onSpy} show />);

    expect(toJson(ui)).toMatchSnapshot();
  });

  it(`Simulate Close Dialog`, () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(<ErrorDialog on={onSpy} show />);

    ui.find(DialogClose).at(0).simulate(`click`);

    expect(onSpy).toHaveBeenCalledTimes(1);
    expect(onSpy.mock.results[0].value).toStrictEqual({ event: `on-close` });
  });
});

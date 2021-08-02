import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ITabActionItem } from '../interface';
import { TabActionItem } from '../style';
import TabAction from '..';

const TAB_LIST_ITEM: ITabActionItem[] = [
  {
    id: 0,
    text: `Tab List 1`
  },
  {
    id: 1,
    text: `Tab List 2`
  }
];

describe(`Tab Action Testing`, () => {
  it(`Testing Snapshot`, () => {
    const onSpy = jest.fn((param) => param);
    const ui = shallow(
      <TabAction active={0} list={TAB_LIST_ITEM} on={onSpy} />
    );

    expect(toJson(ui)).toMatchSnapshot();
  });

  it(`Testing Simulate Click Tab Action Item`, () => {
    const onSpy = jest.fn((param) => param);
    const ui = mount(<TabAction active={0} list={TAB_LIST_ITEM} on={onSpy} />);

    expect(ui.find(TabActionItem).length).toBe(2);
    expect(ui.find(TabActionItem).at(0).prop(`active`)).toBeTruthy();
    expect(ui.find(TabActionItem).at(1).prop(`active`)).toBeFalsy();

    ui.find(TabActionItem).at(1).simulate(`click`);

    expect(onSpy).toHaveBeenCalledTimes(1);
    expect(onSpy.mock.results[0].value).toStrictEqual({
      event: `on-change-index`,
      payload: 1
    });
  });
});

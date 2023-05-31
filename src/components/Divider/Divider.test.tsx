import React from 'react';
import renderer from 'react-test-renderer';

import {Divider} from './';

const props = {
  size: 16,
};

const propsHorizontal = {
  size: 16,
  horizontal: true,
};

describe('<Divider />', () => {
  it('Should render corretly', () => {
    const divider = renderer.create(<Divider {...props} />);
    expect(divider).toBeTruthy();
  });

  it('Should render corretly with horizontal', () => {
    const divider = renderer.create(<Divider {...propsHorizontal} />);
    expect(divider).toBeTruthy();
  });

  it('Should render corretly with size', () => {
    const inst = renderer.create(<Divider {...propsHorizontal} />);
    const size = inst.root.props.size;
    expect(size).toBe(16);
  });

  it('Should take Snapshot', () => {
    const snapshot = renderer.create(<Divider {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

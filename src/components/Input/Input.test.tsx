import React from 'react';
import renderer from 'react-test-renderer';

import {Input} from './';

describe('<Input />', () => {
  it('Should take Snapshot', () => {
    const snapshot = renderer.create(<Input />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

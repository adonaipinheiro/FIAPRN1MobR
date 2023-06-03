import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import renderer from 'react-test-renderer';

import {Button} from './';

const mockFn = jest.fn();

const props = {
  text: 'Entrar',
};

const propsLoading = {
  text: 'Entrar',
  loading: true,
};

const propsNotPrimary = {
  text: 'Entrar',
  primary: false,
  onPress: mockFn,
};

describe('<Button />', () => {
  it('Should render corretly', () => {
    const button = renderer.create(<Button {...props} />);
    expect(button).toBeTruthy();
  });

  it('Should render corretly with loading', () => {
    const button = renderer.create(<Button {...propsLoading} />);
    expect(button).toBeTruthy();
  });

  it('Should render corretly with primary false', () => {
    const button = renderer.create(<Button {...propsNotPrimary} />);
    expect(button).toBeTruthy();
  });

  it('Should render corretly with text', () => {
    const inst = renderer.create(<Button {...propsNotPrimary} />);
    const text = inst.root.findByType(Text);
    expect(text.props.children).toBe(propsNotPrimary.text);
  });

  it('Should render corretly with onPress()', () => {
    const inst = renderer.create(<Button {...propsNotPrimary} />);
    const button = inst.root.findByType(TouchableOpacity);
    button.props.onPress();
    expect(button.props.onPress).toBeCalledTimes(1);
    expect(button).toBeTruthy();
  });

  it('Should take Snapshot', () => {
    const snapshot = renderer.create(<Button {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

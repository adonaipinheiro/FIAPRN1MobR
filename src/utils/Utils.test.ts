import {$COLORS} from './colors';

describe('$COLORS', () => {
  it('Should returns a color with opacity', () => {
    const opacity = 5;
    const expectedColor = `#000${opacity}`;
    const result = $COLORS.blackWithOpacity(opacity);
    expect(result).toEqual(expectedColor);
  });

  it('Should returns black when opacity is not provided', () => {
    const expectedColor = '#0000';
    const result = $COLORS.blackWithOpacity();
    expect(result).toEqual(expectedColor);
  });
});

import getPalette from './get-palette';
import { darkPalette, lightPalette } from '../palettes';

describe('getPalette', () => {
  test('Корректное значение dark', () => {
    expect(getPalette('dark')).toEqual({ palette: darkPalette });
  });
  test('Корректное значение light', () => {
    expect(getPalette('light')).toEqual({ palette: lightPalette });
  });
  test('Значение dark не должно возвращать lightPalette', () => {
    expect(getPalette('dark')).not.toEqual({ palette: lightPalette });
  });
  test('Значение light не должно возвращать darkPalette', () => {
    expect(getPalette('light')).not.toEqual({ palette: darkPalette });
  });
});

import convertBooleanToAnswer from './convert-boolean-to-answer';

describe('convertBooleanToAnswer', () => {
  test('Корректное значение true', () => {
    expect(convertBooleanToAnswer(true)).toBe('Да');
  });
  test('Корректное значение false', () => {
    expect(convertBooleanToAnswer(false)).toBe('Нет');
  });
  test('Значение true не должно возвращать Нет', () => {
    expect(convertBooleanToAnswer(true)).not.toBe('Нет');
  });
  test('Значение false не должно возвращать Да', () => {
    expect(convertBooleanToAnswer(false)).not.toBe('Да');
  });
});

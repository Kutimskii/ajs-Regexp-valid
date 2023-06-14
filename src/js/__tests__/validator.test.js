import Validator from '../Validator';

test.each([
  ['1AsddF', false],
  ['-AsddF', false],
  ['_AsddF', false],
  ['Asd34d2', false],
  ['Asd34d-', false],
  ['Asd34d_', false],
  ['Asd343d2', false],
  ['Asd34d', true],
  ['As-d34d', true]])('test validator', (userName, expected) => {
  const result = new Validator(userName).validateUsername();
  expect(result).toEqual(expected);
});

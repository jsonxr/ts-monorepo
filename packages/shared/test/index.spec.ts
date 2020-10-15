import { whatIsTheMeaningOfLife } from '../src/index';

describe('meaning of life', () => {
  it('should be 42', () => {
    expect(whatIsTheMeaningOfLife()).toEqual(42);
  });
});

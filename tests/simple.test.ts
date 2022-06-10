import add from '@src/simple'

describe('test add function', () => {
  it('should return 15 when 10 and 5 are added', () => {
    expect(add(10,5)).toBe(15);
  });

  it('should return 5 when 2 and 3 are added',() => {
    expect(add(2,3)).toBe(5);
  });
});

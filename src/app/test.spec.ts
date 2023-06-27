import { Calculator } from './testservice';

describe('testingservice', () => {
  it('should add two numbers', () => {
    const service = new Calculator();
    expect(service.add(2, 2)).toBe(4);
  });

  it('should subtract two numbers', () => {
    const service = new Calculator();
    expect(service.add(2, 2)).toBe(0);
  });

  it('should multiply two numbers', () => {
    const service = new Calculator();
    expect(service.add(2, 4)).toBe(8);
  });
});

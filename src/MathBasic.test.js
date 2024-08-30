const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe('A Function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect( () => MathBasic.add() ).toThrowError();
      expect( () => MathBasic.add(1) ).toThrowError();
      expect( () => MathBasic.add(1, 2, 3) ).toThrowError();
      expect( () => MathBasic.add(1, 2, 3, 4) ).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect( () => MathBasic.add('1', '2') ).toThrowError();
      expect( () => MathBasic.add(true, {}) ).toThrowError();
      expect( () => MathBasic.add(null, false) ).toThrowError();
    });

    it('should return a + b when given two number parameters', () => {
      expect( MathBasic.add(2, 2) ).toEqual(4);
      expect( MathBasic.add(16, 8) ).toEqual(24);
      expect( MathBasic.add(3, 7) ).toEqual(10);
    });
  });

  describe('A function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect( () => MathBasic.subtract() ).toThrowError();
      expect( () => MathBasic.subtract(1) ).toThrowError();
      expect( () => MathBasic.subtract(1, 2, 3) ).toThrowError();
      expect( () => MathBasic.subtract(1, 2, 3, 4) ).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect( () => MathBasic.subtract('1', '2') ).toThrowError();
      expect( () => MathBasic.subtract(true, {}) ).toThrowError();
      expect( () => MathBasic.subtract(null, false) ).toThrowError();
    });

    it('should return a-b when given two number parameters', () => {
      expect( MathBasic.subtract(5, 3) ).toEqual(2);
      expect( MathBasic.subtract(20, 10) ).toEqual(10);
      expect( MathBasic.subtract(4, 1) ).toEqual(3);
    });
  });

  describe('A function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect( () => MathBasic.multiply() ).toThrowError();
      expect( () => MathBasic.multiply(1) ).toThrowError();
      expect( () => MathBasic.multiply(1, 2, 3) ).toThrowError();
      expect( () => MathBasic.multiply(1, 2, 3, 4) ).toThrowError();
    });

    it('should throw when given non-number parameters', () => {
      expect( () => MathBasic.multiply('1', '2') ).toThrowError();
      expect( () => MathBasic.multiply(true, {}) ).toThrowError();
      expect( () => MathBasic.multiply(null, false) ).toThrowError();
    });

    it('should throw a*b when given two number parameters', () => {
      expect( MathBasic.multiply(5, 3) ).toEqual(15);
      expect( MathBasic.multiply(10, 2) ).toEqual(20);
      expect( MathBasic.multiply(2, 2) ).toEqual(4);
    });
  });

  describe('A function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect( () => MathBasic.divide() ).toThrowError();
      expect( () => MathBasic.divide(1) ).toThrowError();
      expect( () => MathBasic.divide(1, 2, 3) ).toThrowError();
      expect( () => MathBasic.divide(1, 2, 3, 4) ).toThrowError();
    });

    it('should throw when given non-number parameters', () => {
      expect( () => MathBasic.divide('1', '2') ).toThrowError();
      expect( () => MathBasic.divide(true, {}) ).toThrowError();
      expect( () => MathBasic.divide(null, false) ).toThrowError();
    });

    it('should throw 1/b when given to number parameters', () => {
      expect( MathBasic.divide(8, 2) ).toEqual(4);
      expect( MathBasic.divide(10, 5) ).toEqual(2);
      expect( MathBasic.divide(15, 5) ).toEqual(3);
    })
  });
});
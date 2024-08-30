class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  _validateParameters(expectedCount, args) {
    if (args.length !== expectedCount) {
      throw new Error(`fungsi hanya menerima ${expectedCount} parameter`);
    }
    args.forEach((arg) => {
      if (typeof arg !== 'number') {
        throw new Error('fungsi hanya menerima parameter number');
      }
    });
  }

  calculateRectanglePerimeter(...args) {
    this._validateParameters(2, args);

    const [length, width] = args;

    // formula: ( 2 * (length + width) )
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    this._validateParameters(2, args);

    const [length, width] = args;

    // formula ( length * width )
    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    this._validateParameters(3, args);

    const [sideA, sideB, base] = args;

    // formula ( sideA + sideB + base )
    return this._mathBasic.add(this._mathBasic.add(sideA, sideB), base);
  }

  calculateTriangleArea(...args) {
    this._validateParameters(2, args);

    const [base, height] = args;

    // formula ( 0.5 * base * height )
    return this._mathBasic.multiply(0.5, this._mathBasic.multiply(base, height));
  }
}

module.exports = FigureCalculator;

const validateArgs = (args) => {
  if (args.length !== 2) {
    throw new Error('Fungsi ini hanya menerima 2 parameter');
  }

  const [a, b] = args;

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Fungsi hanya menerima parameter number');
  }

  return [a, b];
};

const MathBasic = {
  add: (...args) => {
    const [a, b] = validateArgs(args);
    return a + b;
  },

  subtract: (...args) => {
    const [a, b] = validateArgs(args);
    return a - b;
  },

  multiply: (...args) => {
    const [a, b] = validateArgs(args);
    return a * b;
  },

  divide: (...args) => {
    const [a, b] = validateArgs(args);
    return a / b;
  },
};

module.exports = MathBasic;

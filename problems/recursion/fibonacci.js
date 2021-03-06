// find the nth instance of the fibonacci sequence

fibonacci = n => {
  if (typeof n !== 'number') {
    return null;
  }

  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  return fibonacci(n);
};

module.exports = fibonacci;

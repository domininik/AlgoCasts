// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, memo = {}) {
  // === memoization solution ===

  if (n < 2) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
  return memo[n];

  // === recursive solution ===

  // if (n < 2) {
  //   return n;
  // } else {
  //   return fib(n - 2) + fib(n - 1);
  // }

  // === iterative solution ===

  // let array = [0, 1];

  // if (n > 1) {
  //   for (let i = 2; i <= n; i++) {
  //     array[i] = array[i - 2] + array[i - 1];
  //   }
  // }

  // return array[n];
}

module.exports = fib;

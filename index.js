// Section 6: Timing our code

function addUpTo_forLoop(n) {
  let total = 0;
  let i = 1;

  for (i; i <= n; i++) {
    total += i;
  }

  return total;
}

const t1 = performance.now();
console.log('addUpTo_forLoop(100000000): ', addUpTo_forLoop(100000000));
const t2 = performance.now();
console.log(`Time differential: ${t2 - t1}`);

// Far quicker solution
function addUpTo_simplified(n) {
  return n * (n + 1) / 2;
}

const t3 = performance.now();
console.log('addUpTo_simplified(100000000): ', addUpTo_simplified(100000000));
const t4 = performance.now();
console.log(`Time differential: ${t4 - t3}`);
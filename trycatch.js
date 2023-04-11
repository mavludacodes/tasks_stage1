// In a try catch construction, wrap the code: console.log (a), let a = 3.
// And display an error - ‘let must be declared’ before use.

try {
  console.log(a);
  let a = 3;
} catch {
  console.log("let must be declared");
}

/* When running 1/0, the error 'cannot be divided by zero' */
try {
  const result = 1 / 0;
  if (result === Infinity) throw "cannot be divided by zero";
} catch (e) {
  console.log(e);
}

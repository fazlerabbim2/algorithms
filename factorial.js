// Example with for loop
function factorial (num){
let total = 1;
if (num === 1 || num === 0) return total;
else if (num < 0) return -1;
for (let i = num; i > 1; i--){
total *= i;
}
return total;
}

console.log(factorial(10))

// Example with for loop

function factorialR (num){
if (num === 1 || num === 0) return 1; // BASE CASE to stop recursion
else if (num < 0) return -1;
return num * factorialR(num-1)
}

console.log(factorialR(6))

// 1. Display even numbers from 1 to 100
console.log("Even numbers from 1 to 100:");
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// 2. Calculator function using switch
function calculate(a, b, operation) {
    switch(operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}

console.log("Calculator examples:");
console.log("10 + 5 =", calculate(10, 5, 'add'));
console.log("10 - 3 =", calculate(10, 3, 'subtract'));
console.log("6 * 7 =", calculate(6, 7, 'multiply'));
console.log("20 / 4 =", calculate(20, 4, 'divide'));

// 3. findTax() function using switch
function findTax(salary) {
    let taxRate;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            return "Invalid salary";
    }
    return salary * taxRate;
}

console.log("Tax on ₹1200000 =", findTax(1200000)); // Output: 240000

// 4. Sum of products of corresponding digits
function sumOfDigitProducts(n1, n2) {
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let length = Math.max(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < length; i++) {
        let d1 = parseInt(str1[i] || 0);
        let d2 = parseInt(str2[i] || 0);
        sum += d1 * d2;
    }

    return sum;
}

console.log("Sum of digit products for 6 & 34 =", sumOfDigitProducts(6, 34)); // Output: 24
console.log("Sum of digit products for 123 & 456 =", sumOfDigitProducts(123, 456)); // Output: 38
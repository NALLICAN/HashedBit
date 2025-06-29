// Q1) Remove states starting with vowels
let states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Kerala", "Assam", "Goa"];
let filteredStates = states.filter(s => !/^[AEIOU]/i.test(s));
console.log("Q1:", filteredStates);

// Q2) Reverse words in string
let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
console.log("Q2:", reversedStr);

// Q3) Replace 'INDIA' with 'INDONESIA' using splice
let stringArr = Array.from('INDIA');
stringArr.splice(2, 0, 'O', 'N', 'E', 'S', 'I');
let replacedString = stringArr.join('');
console.log("Q3:", replacedString);

// Q4) Count vowels and consonants in string
let sampleStr = "JavaScript is a versatile language";
let vowels = 'aeiouAEIOU';
let vowelCount = 0, consonantCount = 0;
for (let ch of sampleStr) {
  if (/[a-zA-Z]/.test(ch)) {
    vowels.includes(ch) ? vowelCount++ : consonantCount++;
  }
}
console.log("Q4: Vowels =", vowelCount, ", Consonants =", consonantCount);

// Q5) Replace wrong word in sentence
function correctfn(sentence, wrong, correct) {
  return sentence.replace(new RegExp(wrong, 'g'), correct);
}
console.log("Q5:", correctfn("This is a wromg sentence", "wromg", "wrong"));

// Q6) Filter numbers greater than 5
let inputArr = [1,2,3,9,10,7,5,4,3];
let filteredNums = inputArr.filter(n => n > 5);
console.log("Q6:", filteredNums);

// Q7) Average scores using map and reduce
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];
let averages = students.map(({name, scores}) => ({
  name,
  average: Math.round(scores.reduce((a,b)=>a+b,0) / scores.length)
}));
console.log("Q7:", averages);

// Q8) Repeated sum of digits until single digit
function repeatedSum(num) {
  while (num > 9) {
    num = num.toString().split('').reduce((a,b) => a + +b, 0);
  }
  return num;
}
console.log("Q8:", repeatedSum(456));

// Q9) Count words in paragraph
function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}
console.log("Q9:", countWords("This is a sample paragraph with several words."));

// Q10) Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log("Q10:", reverseString("Hello"));

// Q11) Average of each student’s subjects from an object array
let input = {
  student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

let output = {};
for (let student in input) {
  let marks = Object.values(input[student]);
  let avg = Math.round(marks.reduce((a,b) => a + b, 0) / marks.length);
  output[student] = { average: avg };
}
console.log("Q11:", output);
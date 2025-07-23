// problem 1
const calculateGeneration = () => {
  const age = parseInt(document.getElementById("ageInput").value);
  const birthYear = new Date().getFullYear() - age;
  let result1 = "";

  switch (true) {
    case birthYear >= 1946 && birthYear <= 1964:
      result1 = "You are a member of the Baby Boomer Generation!";
      break;
    case birthYear >= 1965 && birthYear <= 1980:
      result1 = "You are part of Generation X!";
      break;
    case birthYear >= 1981 && birthYear <= 1996:
      result1 = "You belong in the Y Generation!";
      break;
    case birthYear >= 1997 && birthYear <= 2012:
      result1 = "Generation Z is your generation!";
      break;
    case birthYear >= 2013 && birthYear <= 2025:
      result1 = "You are part of Generation Alpha.";
      break;
    default:
      result1 = "Sorry - your generation is not listed.";
      break;
  }

  document.getElementById("prob1Result").textContent = result1;
};

// problem 2
let grades = [87, 56, 92, 77];
let sum = 0.0;
let avg;
let result2 = "";

for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}

avg = sum / grades.length;

if (avg > 0.75) {
  result2 = "You are in the top 25% of the class!";
} else if (avg >= 0.6 && avg <= 0.75) {
  result2 = "You passed the class!";
} else if (avg < 0.6) {
  result2 = "Sorry - you did not pass the class. Better luck next time!";
} else {
  result2 = "error...";
}

document.getElementById("prob2Result").textContent = result2;

// problem 3
const getRand = () => {};

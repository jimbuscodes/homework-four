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
const getRand = () => {
  let rand = Math.floor(Math.random() * 5) + 1;
  let result3 = "";

  switch (rand) {
    case 1:
      result3 = "1: The lowest number you can get";
      break;
    case 2:
      result3 = "2: This is the lowest even number you can get";
      break;
    case 3:
      result3 = "3: Right smack in the middle";
      break;
    case 4:
      result3 = "4: Good number!";
      break;
    case 5:
      result3 = "5: Way to roll!";
      break;
  }

  document.getElementById("prob3Result").textContent = result3;
};

// problem 4
const fiveDaysAhead = () => {
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const currentDay = document.getElementById("dayInput").value;
  let result4 = "";
  let currentIndex = 0;

  switch (currentDay) {
    case "Monday":
      currentIndex = 0;
      break;
    case "Tuesday":
      currentIndex = 1;
      break;
    case "Wednesday":
      currentIndex = 2;
      break;
    case "Thursday":
      currentIndex = 3;
      break;
    case "Friday":
      currentIndex = 4;
      break;
    case "Saturday":
      currentIndex = 5;
      break;
    case "Sunday":
      currentIndex = 6;
      break;
    default:
      document.getElementById("prob4Result").textContent = "error...";
      break;
  }

  let futureIndex = (currentIndex + 5) % week.length;
  result4 = week[futureIndex];

  document.getElementById(
    "prob4Result"
  ).textContent = `It will be ${result4} in 5 days.`;
};

// problem 5

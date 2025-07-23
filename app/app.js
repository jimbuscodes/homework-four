// problem 1
const calculateGeneration = () => {
  const age = parseInt(document.getElementById("ageInput").value);
  const birthYear = new Date().getFullYear() - age;
  let result = "";

  switch (true) {
    case birthYear >= 1946 && birthYear <= 1964:
      result = "You are a member of the Baby Boomer Generation!";
      break;
    case birthYear >= 1965 && birthYear <= 1980:
      result = "You are part of Generation X!";
      break;
    case birthYear >= 1981 && birthYear <= 1996:
      result = "You belong in the Y Generation!";
      break;
    case birthYear >= 1997 && birthYear <= 2012:
      result = "Generation Z is your generation!";
      break;
    case birthYear >= 2013 && birthYear <= 2025:
      result = "You are part of Generation Alpha.";
      break;
    default:
      result = "Sorry - your generation is not listed.";
      break;
  }

  document.getElementById("prob1Result").textContent = result;
};

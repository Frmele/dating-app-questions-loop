'use strict';

//////////////////////////////////////////////////////////////////
// Creating the questions array

// Option 1
// This way of creating the array is the easiest.
const questions = [
  "What is your first name?",
  "What is your last name?",
  "What is your age?",
  "Where do you live?",
  "What is your gender? (female, male, other)",
  "Which genders are you interested in dating?",
  "What is your main hobby?",
  "What is your favourite movie?"
];


// Here we change the underlying array.
while (questions.length > 0) {
  const question = questions.shift(); // Read and remove the first question.
  prompt(question);
}

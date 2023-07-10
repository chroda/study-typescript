let languages: Array<string> = ["Portuguese", "English", "Spanish", "French"];
console.log(languages);
languages.push("Mandarin");
console.log(languages);
console.log(languages.length);

// ==> Array with Spread Operator
let fruits: Array<string> = ["apple", "banana", "orange"];
let food: Array<string> = ["pizza", "hamburger", ...fruits];
console.log(food);

const funcLanguages = (langs: Array<string>): void => {
  for (let i = 0; i < langs.length; i++) {
    console.log(langs[i]);
  }
};

funcLanguages(languages);

// ==> Tuple
let person: [string, string, number];

person = ["John Doe", "Developer", 34];

console.log(person);

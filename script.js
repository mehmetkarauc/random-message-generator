ArrOne = [
  "You",
  "Your",
  "You",
  "Your",
  "You",
  "Your",
  "You",
  "Your",
  "You",
  "Your",
];
ArrTwo = ["1", "2", "3", "1", "2", "3", "1", "2", "3", "1"];
ArrThree = [
  "Age",
  "Years",
  "Age",
  "Years",
  "Age",
  "Years",
  "Age",
  "Years",
  "Age",
  "Years",
];

console.log(
  ArrOne[Math.floor(Math.random() * 10)] +
    " " +
    ArrTwo[Math.floor(Math.random() * 10)] +
    " " +
    ArrThree[Math.floor(Math.random() * 10)]
);

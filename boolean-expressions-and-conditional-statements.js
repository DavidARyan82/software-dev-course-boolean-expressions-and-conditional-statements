/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasCompass = true;
const hasSword = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains") {
  if (hasTorch && hasCompass) {
    console.log("You use your torch and compass to safely navigate through the rocky trails.");
    const mountainChoice = readline.question("You reach a cave. Do you 'enter' or 'camp outside'? ");
    if (mountainChoice === "enter") {
      if (hasSword) {
        console.log("You fight off a wild creature and find a chest of gold.");
      } else {
        console.log("A wild creature attacks you, but you escape narrowly.");
      }
    } else {
      console.log("You rest peacefully and enjoy the mountain view under the stars.");
    }
  } else if (!hasTorch && !hasCompass) {
    console.log("It's too dark and you lose your way in the mountains. You should've packed better!");
  } else {
    console.log("You make some progress but struggle without all your gear.");
  }
} 
else if (choice === "village" || hasMap) {
  console.log("You head to the village and find it bustling with traders and adventurers.");
  const villageChoice = readline.question("Do you visit the 'market' or the 'inn'? ");
  if (villageChoice === "market") {
    console.log("You buy a shiny sword and some supplies.");
  } else if (villageChoice === "inn") {
    console.log("You rest at the inn and overhear tales of treasure in the mountains.");
  } else {
    console.log("You wander around the village aimlessly, enjoying the scenery.");
  }
} 
else {
  console.log("You stand still, unable to decide, as the sun sets and darkness falls.");
}

console.log("The adventure ends based on your choices and items.");

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
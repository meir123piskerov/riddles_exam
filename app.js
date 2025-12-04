import input from "analiza-sync";
import {
  addSolveTime,
  CreatePlayer,
  measureSolveTime,
  showStats,
} from "./utils/function.js";
import array_of_riddles from "./riddles/all_riddles.js";
console.log("Welcome to the Riddle Game:");
let flag = true;

while (flag) {
  let name = input("pls enter your name: ");
  let player = CreatePlayer(name);
  let flag_2 = true;
  while (flag_2) {
    let user_choice = input(
      "riddle: (enter the number of the riddle u want to solve) \nstatus: (to see the status) \nexit: (to exit the game):"
    );
    if (user_choice == "1" || "2" || "3" || "exit" || "status") {
      switch (user_choice) {
        case "1":
          console.log("first riddle:");
          let a = measureSolveTime(array_of_riddles[0]);
          addSolveTime(player, a);
          console.log("Correct!!!");

          break;
        case "2":
          console.log("second riddle:");
          let b = measureSolveTime(array_of_riddles[1]);
          addSolveTime(player, b);
          console.log("Correct!!!");
          break;
        case "3":
          console.log("third riddle:");
          let c = measureSolveTime(array_of_riddles[2]);
          addSolveTime(player, c);
          console.log("Correct!!!");

          break;
        case "status":
          console.log(`Good job , ${player.name}`);
          showStats(player);

          break;
        case "exit":
          flag_2 = false;
          flag = false;
          break;
      }
    } else {
      console.log("invalid input try again");
    }
  }
}

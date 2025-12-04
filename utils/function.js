import input from "analiza-sync";

export function CreatePlayer(player) {
  let new_player = {
    name: player,
    times: [],
  };
  return new_player;
}

export function addSolveTime(player, seconds) {
  player.times.push(seconds);
}

export function showStats(player) {
  let count_len = 0;
  for (let i = 0; i < player.times.length; i++) {
    count_len++;
  }
  let count_seconds = 0;
  for (let i = 0; i < player.times.length; i++)
    count_seconds += player.times[i];
  console.log(`Total time: ${Math.floor(count_seconds / 1000)}`);
  let avg = count_seconds / count_len;
  console.log(`Average per riddle : ${Math.floor(avg / 1000)}`);
}

export function askRiddle(riddle) {
  console.log(`level of the riddle :${riddle.name}`);
  console.log(riddle.taskDescription);
  if (riddle["choices"] != undefined) console.log(["Dog", "Cow", "Cat"]);
}

export function correctAnswer(riddle, user_input) {
  let user_input_to_number = Number(user_input);
  if (riddle.correct === user_input_to_number) return false;
}

export function measureSolveTime(riddle) {
  let flag = true;
  askRiddle(riddle);
  let start_time = performance.now();
  while (flag) {
    let user_answer = input("enter your answer:");
    if (correctAnswer(riddle, user_answer) === false) {
      flag = false;
    } else {
      console.log("pls try again:");
    }
  }
  let end_time = performance.now();
  return end_time - start_time;
}

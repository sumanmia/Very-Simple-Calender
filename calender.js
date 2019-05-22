console.log("Sun  Mon  Tue  Wed  Thu  Fri  Sat");

("\n Month Of April\n");

let days = 31;
let startingDay = 3;

for (let i = 0; i <= 5; i++) {
  dayRow = "";
  for (let j = 1; j <= 7; j++) {
    let currentDay = 7 * i + j - startingDay;

    if (currentDay > days) {
      break;
    } else if (currentDay < 1) {
      currentDay = " ";
    }

    if (currentDay > 9) {
      dayRow += currentDay + "   ";
    } else {
      dayRow += currentDay + "    ";
    }
  }
  console.log(dayRow);
}


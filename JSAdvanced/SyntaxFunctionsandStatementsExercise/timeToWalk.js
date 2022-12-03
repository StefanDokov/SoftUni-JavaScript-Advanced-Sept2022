function test(steps, leng, speed) {
    let hours = 0;
    let mins = 0;

    let distance = steps * leng / 1000;
    let minbreak = Math.trunc(distance / 0.5);
    let timetaken = Math.round((distance / speed) * 3600);
    while (timetaken > 59) {
        timetaken -= 60;
        mins += 1;
        if (mins == 60){
            hours += 1;
            mins = 0;
        }

    }
    mins += minbreak;
    if (mins >= 60){
        hours += 1;
        mins = mins - 60;
    }

    let fulltime = "";
    if (hours > 9) {
        fulltime += `${hours}:`;
    } else {
        fulltime += `0${hours}:`;
    }
    if (mins > 9) {
        fulltime += `${mins}:`;
    } else {
        fulltime += `0${mins}:`;
    }
    if (timetaken > 9) {
        fulltime += `${timetaken}`;
    } else {
        fulltime += `0${timetaken}`;
    }
  console.log(fulltime);
    





}


test(4000, 0.60, 5);
console.log(`--------`);
test(2564, 0.70, 5.5)
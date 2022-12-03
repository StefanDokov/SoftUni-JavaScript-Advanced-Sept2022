function test(zoom) {

  let board = [[false, false, false],
  [false, false, false],
  [false, false, false]]

  let marker = "X";
  for (let i = 0; i < zoom.length; i++) {

    let [row, col] = zoom[i].split(" ");
    if (board[row][col] != false) {
      console.log(`This place is already taken. Please choose another!`);
      continue;
    } else {
      board[row][col] = marker;
      if (marker == "X") {
        marker = "O";
      } else if (marker = "O") {
        marker = "X";
      }
    }

  let res = checker(board);
    if (res == "XXX" || res == "OOO") {
      console.log(`Player ${res[0]} wins!`);
      board.forEach(el => console.log(el.join("\t")));
      return;

    }
    if (!board[0].includes(false) && !board[1].includes(false) && !board[2].includes(false)) {
      console.log(`The game ended! Nobody wins :(`);
      board.forEach(el => console.log(el.join("\t")));
      return;
    }



    function checker(arr) {
      let b = "";
      b += arr[0][0];
      b += arr[1][1];
      b += arr[2][2];
      if (b == 'XXX' || b == "OOO") {
        return b;
      }
      let c = "";
      c += arr[0][2];
      c += arr[1][1];
      c += arr[2][0];
      if (c == 'XXX' || c == "OOO") {
        return c;
      }

      for (let i = 0; i < arr.length; i++) {
        let h = arr[i].reduce((x, y) => x + y);
        if (h == "XXX" || h == "OOO") {
          return h;

        }
        let m = [];
        for (let k = 0; k < arr.length; k++) {

          m.push(arr[k][i]);

        }
        let p = m.reduce((f, l) => f + l);
        if (p == "XXX" || p == "OOO") {
          return p;

        }
      }



    }


  }
}
test(["0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0"]
);
console.log(`----------`);
test(["0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1"]

);
console.log(`--------`);
test(["0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0"]
);
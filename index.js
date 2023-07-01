let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let result = document.querySelector(".result");
let btnS = document.querySelectorAll(".btn");
let resetButton = document.querySelector("#reset");
let conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let ticTacToe = (element, index) => {
  if (cells[index] === "") {
    element.value = currentPlayer;
    element.disabled = true;
    cells[index] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "0" : "X";
    result.innerHTML = `${currentPlayer} o'yinchining navbati `;
    for (let i = 0; i < conditions.length; i++) {
      let condition = conditions[i];
      let a = cells[condition[0]];
      let b = cells[condition[1]];
      let c = cells[condition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        result.innerHTML = `${a} g'olib bo'ldi`;
        btnS.forEach((btn) => (btn.disabled = true));
        break;
      }
    }
  }
};

function reset() {
  cells = ["", "", "", "", "", "", "", "", ""];
  btnS.forEach((btn) => {
    btn.value = "";
    btn.disabled = false;
  });
  currentPlayer = "X";
  result.innerHTML = `X o'yinchining navbati`;
}

resetButton.addEventListener("click", reset);
btnS.forEach((btn, i) => {
  btn.addEventListener("click", () => ticTacToe(btn, i));
});

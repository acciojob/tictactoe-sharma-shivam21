let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];
let player1 = "";
let player2 = "";

// Winning combinations
const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Start game on submit
document.getElementById("submit").addEventListener("click", () => {
  player1 = document.getElementById("player-1").value.trim();
  player2 = document.getElementById("player-2").value.trim();

  if (player1 === "" || player2 === "") {
    alert("Please enter both player names!");
    return;
  }

  document.getElementById("input-form").style.display = "none";
  document.getElementById("game").style.display = "block";
  updateMessage();
});

// Update message area
function updateMessage(msg = "") {
  const message = document.getElementById("message");
  if (msg) {
    message.textContent = msg;
  } else {
    message.textContent = `${currentPlayer === "X" ? player1 : player2}, you're up!`;
  }
}

// Handle cell click
document.querySelectorAll(".cell").forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
      updateMessage(`${currentPlayer === "X" ? player1 : player2}, congratulations you won!`);
      gameActive = false;
    } else if (board.every(cell => cell !== "")) {
      updateMessage("It's a draw!");
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      updateMessage();
    }
  });
});

// Win check
function checkWin() {
  return winCombos.some(combo => {
    return combo.every(index => board[index] === currentPlayer);
  });
}
//your JS code here. If required.
let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];
let player1 = "";
let player2 = "";

// Winning combinations
const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Start game on submit
document.getElementById("submit").addEventListener("click", () => {
  player1 = document.getElementById("player-1").value.trim();
  player2 = document.getElementById("player-2").value.trim();

  if (player1 === "" || player2 === "") {
    alert("Please enter both player names!");
    return;
  }

  document.getElementById("input-form").style.display = "none";
  document.getElementById("game").style.display = "block";
  updateMessage();
});

// Update message area
function updateMessage(msg = "") {
  const message = document.getElementById("message");
  if (msg) {
    message.textContent = msg;
  } else {
    message.textContent = `${currentPlayer === "X" ? player1 : player2}, you're up!`;
  }
}

// Handle cell click
document.querySelectorAll(".cell").forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
      updateMessage(`${currentPlayer === "X" ? player1 : player2}, congratulations you won!`);
      gameActive = false;
    } else if (board.every(cell => cell !== "")) {
      updateMessage("It's a draw!");
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      updateMessage();
    }
  });
});

// Win check
function checkWin() {
  return winCombos.some(combo => {
    return combo.every(index => board[index] === currentPlayer);
  });
}

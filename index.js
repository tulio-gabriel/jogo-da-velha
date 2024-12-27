let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let selected;

let player = "X";

let currentPlayer = document.getElementById("currentPlayer")



function init() {
  selected = [];
  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", playerMove);
  });
}

init();

function playerMove(e) {
  const index = e.target.getAttribute("id");
  e.target.innerText = player
  e.target.removeEventListener("click", playerMove);
  selected[index]=player;

  setTimeout(() => {
    check();
  }, [100]);  

  player=player==="X" ? "O" : "X";
  currentPlayer.innerHTML =`Jogador da Vez: ${player}`;

}

function check(){
let playerLastMove = player === "X" ? "O" : "X";

const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

    for( pos of positions)
    {
      if(pos.every((item) => items.includes(item)))
      {
        alert("Jogador " + playerLastMove + " ganhou!");
        init();
        return;
      }

      if(selected.filter((item) => item).length === 9)
      {
        alert("Empate!");
        init();
        return;
      }
    }
}


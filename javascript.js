const container = document.querySelector('.container')
function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows*cols); i++) {
    let cell = document.createElement('div');
      cell.addEventListener("mouseover", () => {
        cell.classList.add("color-change")
      })
    container.appendChild(cell).className = "grid-item";
  }
  }
  
createGrid(16,16);

let btn = document.querySelector("button");
let reset = document.querySelector("#reset");
btn.addEventListener("click", () => {
  let size = prompt("What size grid do you want? Insert a number between 8 and 64 ");
  if (size > 7 && size < 65) {
    createGrid(size, size);
  }
  else return;
})
reset.addEventListener("click", () => {
  let cells = document.querySelectorAll('.grid-item')
  cells.forEach(cell => {
    cell.classList.remove("color-change")
  })
})
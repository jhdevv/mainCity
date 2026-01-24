const player = document.getElementById("player");
const chao = document.querySelector(".platform").getBoundingClientRect();
let colision_chao = chao.y
let x = 50;
let y_objeto = 200;
let velocityY = 0;
let gravity = 0.5;
let isJumping = false;

// Teclado
document.addEventListener("keydown", (e) => {
    //e.preventDefault()
  if (e.key === "d" || e.key === "D"){x += 5}
  if (e.key === "a" || e.key === "A"){ x -= 5;}

  if (e.key === " " && !isJumping) {
    velocityY = -10;
    isJumping = true;
  }
});

// Loop do jogo
function gameLoop() {
  velocityY += gravity;
  y_objeto += velocityY;

  // chão
if (y_objeto <= colision_chao - 83) {
  gravity = 0.5;
  isJumping = true;
} else {
  y_objeto = colision_chao - 83;
  velocityY = 0;
  gravity = 0;
  isJumping = false;
}



 if (x + chao.left > chao.left && x < chao.width) {
   console.log("colisão horizontal OK");
}
// NÃO mexe em velocityY, gravity ou isJumping aqui

  player.style.left = x + "px";
  player.style.top = y_objeto + "px";

  requestAnimationFrame(gameLoop);
}
 console.log(chao)
gameLoop();



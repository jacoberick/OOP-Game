/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
$("#btn__reset").on("click", function() {
  game = new Game();
  game.startGame();
});

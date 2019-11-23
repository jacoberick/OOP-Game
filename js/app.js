/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game, phrase;
$("#btn__reset").on("click", function() {
  game = new Game();
  game.startGame();
});

$("button.key").on("click", function() {
  let letter = $(this).text();
  game.handleInteraction(letter);
});

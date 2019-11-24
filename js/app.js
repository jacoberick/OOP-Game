/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//arrays of letters to create keys
const setQwerty = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const setAsdfgh = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const setZxcvbn = ["z", "x", "c", "v", "b", "n", "m"];

//`keyCreation` hold the template of a key button
function keyCreation(letterSet, keyrowNum) {
  letterSet.forEach(function(key) {
    let html = `<button class="key key-${key}">${key}</button>`;
    $(`#kr${keyrowNum}`).append(html);
  });
}
//passing parameters to fill in template above
keyCreation(setQwerty, "1");
keyCreation(setAsdfgh, "2");
keyCreation(setZxcvbn, "3");

let game, phrase;
$("#btn__reset").on("click", function() {
  game = new Game();
  game.startGame();
});

$("button.key").on("click", function() {
  let letter = $(this).text();
  game.handleInteraction(letter);
});

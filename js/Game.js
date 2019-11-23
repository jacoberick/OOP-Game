/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      "nag a ram",
      "soft as a grape",
      "break out",
      "space out",
      "a watched pot never boils"
    ];
    this.activePhrase = null;
  }
  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let numPhrases = game.phrases.length;
    let randInt = Math.floor(Math.random() * numPhrases);
    return game.phrases[randInt];
  }
  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    $("#overlay").hide();
    let randomPhrase = game.getRandomPhrase();
    game.activePhrase = new Phrase(randomPhrase);
    game.activePhrase.addPhraseToDisplay();
  }

  handleInteraction(value) {
    const phrase = game.activePhrase;
    let check = phrase.checkLetter(value);
    check ? this.checkForWin() : this.removeLife();
  }
  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    let win = true;
    let phraseList = $("#phraseList .letter");
    phraseList.each(function() {
      $(this).hasClass("hide") ? (win = false) : true;
    });
    win ? alert("you win") : false;
  }

  removeLife() {
    let lives = $(".tries");
    let fails = this.missed;
    lives.each(function(index) {
      fails < 5 && fails === index
        ? $(this)
            .find("img")
            .attr("src", "images/lostHeart.png")
        : false;
    });
    this.missed++;
    this.missed === 5 ? alert("suckaaaaa") : false;
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {}
}

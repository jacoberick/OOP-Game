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
    game.activePhrase = randomPhrase;
    let phrase = new Phrase(randomPhrase);
    phrase.addPhraseToDisplay();
  }
}

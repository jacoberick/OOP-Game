/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay(phrase) {
    let characterArray = [...this.phrase];
    let html = `<div id="phrase" class="section"><ul id='phraseList'>`;
    characterArray.forEach(function(char) {
      char === " "
        ? (html += `<li class='space'>${char}</li>`)
        : (html += `<li class='hide letter letter-${char}'>${char}</li>`);
    });
    html += `</ul></div>`;
    $(".main-container #banner").after(html);
  }
  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter)
      ? (this.showMatchedLetter(letter), true)
      : false;
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    $(`.letter-${letter}`).removeClass("hide");
    $(`.letter-${letter}`).addClass("show");
  }
}

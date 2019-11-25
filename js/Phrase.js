/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Phrase class
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  /**
   * Displays phrase on game board
   */
  addPhraseToDisplay(phrase) {
    //converts phrase into an array containing phrase letters
    let characterArray = [...this.phrase];
    //begin html construction
    let html = `<div id="phrase" class="section"><ul id='phraseList'>`;
    //creates an li for each item in characterArray using forEach
    characterArray.forEach(function(char) {
      char === " "
        ? (html += `<li class='space'>${char}</li>`)
        : (html += `<li class='hide letter letter-${char}'>${char}</li>`);
    });
    html += `</ul></div>`;
    //insert html variable into index.html
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

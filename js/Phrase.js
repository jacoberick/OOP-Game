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
    let html = `<div id="phrase" class="section"><ul>`;
    characterArray.forEach(function(char) {
      if (char === " ") {
        html += `<li class='space'>${char}</li>`;
      } else {
        html += `<li class='hide letter ${char}'>${char}</li>`;
      }
    });
    html += `</ul></div>`;
    $(".main-container #banner").after(html);
  }
}

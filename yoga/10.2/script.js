'use strict';
class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  newDiv(str) {
    let nDiv = document.createElement('div');
    nDiv.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
    nDiv.textContent = str;
    document.body.appendChild(nDiv);
  }
}
let a = new Options(200, 400, '#aaa', 24, 'center');   

a.newDiv('Какая-то сторока');
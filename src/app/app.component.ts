import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onButtonClickHandler() {

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.useNumbers) {
      validChars = validChars + numbers;
    }
    if (this.useLetters) {
      validChars = validChars + letters;
    }
    if (this.useSymbols) {
      validChars = validChars + symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword = generatedPassword + validChars[index];
    }
    this.password = generatedPassword;

    console.log(`
    Generating Password using: \n
    Letters: ${this.useLetters} \n
    Numbers: ${this.useNumbers} \n
    Symbols: ${this.useSymbols} \n
    `)
  }

  onChangeLengthHandler(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    console.log(parsedValue);
  }

  onChangeLettersHandler() {
    this.useLetters = !this.useLetters;
  }
  onChangeNumbersHandler() {
    this.useNumbers = !this.useNumbers;
  }
  onChangeSymbolsHandler() {
    this.useSymbols = !this.useSymbols;
  }

  // genPassword() {
  //   return this.password;
  // }

  // getName() {
  //   return 'Alexa';
  // }
}

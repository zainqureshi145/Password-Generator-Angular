import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onButtonClickHandler() {
    console.log(this.useLetters);
    console.log(this.useNumbers);
    console.log(this.useSymbols);
    this.password = "Your Password";
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

  genPassword() {
    return this.password;
  }

  getName() {
    return 'Alexa';
  }
}

import { Component } from '@angular/core';
const dnaCipher = require('dna-cipher');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public plaintext: string = '';
  public ciphertext: string = '';

  public encipher(): void {
    if (this.plaintext) {
      this.ciphertext = dnaCipher.encipher(this.plaintext);
    }
  }

  public decipher(): void {
    if (this.ciphertext) {
      this.plaintext = dnaCipher.decipher(this.ciphertext);
    }
  }
}

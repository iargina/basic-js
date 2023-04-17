const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = "";
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const letter = message[i];

      if (this.alphabet.indexOf(letter) === -1) {
        encryptedMessage += letter;
        continue;
      }

      const keyLetter = key[j % key.length];
      const keyIndex = this.alphabet.indexOf(keyLetter);
      const shift = this.alphabet.indexOf(letter) + keyIndex;
      const newIndex = shift % this.alphabet.length;
      encryptedMessage += this.alphabet[newIndex];
      j++;
    }

    return this.direct
      ? encryptedMessage
      : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let message = "";
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const letter = encryptedMessage[i];

      if (this.alphabet.indexOf(letter) === -1) {
        message += letter;
        continue;
      }

      const keyLetter = key[j % key.length];
      const keyIndex = this.alphabet.indexOf(keyLetter);
      const shift = this.alphabet.indexOf(letter) - keyIndex;
      const newIndex = shift >= 0 ? shift : this.alphabet.length + shift;
      message += this.alphabet[newIndex];
      j++;
    }

    return this.direct ? message : message.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

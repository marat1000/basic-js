const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(type) {
    this.type = type;
    this.CODE_FL = 65;
    this.CODE_LL = 90;
    this.ALF = ``;
    let i = this.CODE_FL;
    while (i !== this.CODE_LL + 1) {
      this.ALF = this.ALF + String.fromCharCode(i);
      i++;
    }
  }

  encrypt(message, key) {
    if (typeof message !== `string` || typeof key !== `string`) {
      throw new Error(`Incorrect arguments!`)
    }
    let res = ``;
    let count = 0;
    let messageToUp = message.toUpperCase();
    let keyToUp = key.toUpperCase();
    for (let letter of messageToUp) {
      if (this.ALF.indexOf(letter) > -1) {
        res += this.ALF[(letter.charCodeAt(0) + keyToUp.charCodeAt(count % keyToUp.length)) % this.ALF.length];
        count++;
      } else {
        res += letter;
      }
    }
    if (this.type === false) {
      res = res.split(``).reverse().join(``);
    }
    return res;
  }

  decrypt(message, key) {
    if (typeof message !== `string` || typeof key !== `string`) {
      throw new Error(`Incorrect arguments!`)
    }
    let res = ``;
    let count = 0;
    let messageToUp = message.toUpperCase();
    let keyToUp = key.toUpperCase();
    for (let letter of messageToUp) {
      if (this.ALF.indexOf(letter) > -1) {
        res += this.ALF[(letter.charCodeAt(0) + this.ALF.length - keyToUp.charCodeAt(count % keyToUp.length)) % this.ALF.length];
        count++;
      }
      else {
        res += letter;
      }
    }
    if (this.type === false) {
      res = res.split(``).reverse().join(``);
    }
    return res;
  }
  // encrypt(message, key) {
  //   if (typeof message !== `string` || typeof key !== `string`) {
  //     throw new Error(`Incorrect arguments!`)
  //   }
  //   let res = ``;
  //   let count = 0;
  //   let messageToUp = message.toUpperCase();
  //   let keyToUp = key.toUpperCase();
  //   for (let letter of messageToUp) {
  //     if (letter.charCodeAt(0) >= this.CODE_FL && letter.charCodeAt(0) <= this.CODE_LL) {
  //       res += String.fromCharCode((letter.charCodeAt(0) + keyToUp.charCodeAt(count % keyToUp.length)) % (this.CODE_LL - this.CODE_FL + 1) + this.CODE_FL);
  //       count++;
  //     } else {
  //       res += letter;
  //     }
  //   }
  //   if (this.type === false) {
  //     res = res.split(``).reverse().join(``);
  //   }
  //   return res;
  // }
  //
  // decrypt(message, key) {
  //   if (typeof message !== `string` || typeof key !== `string`) {
  //     throw new Error(`Incorrect arguments!`)
  //   }
  //   let res = ``;
  //   let count = 0;
  //   let messageToUp = message.toUpperCase();
  //   let keyToUp = key.toUpperCase();
  //   for (let letter of messageToUp) {
  //     if (letter.charCodeAt(0) >= this.CODE_FL && letter.charCodeAt(0) <= this.CODE_LL) {
  //       res += String.fromCharCode( (letter.charCodeAt(0) + (this.CODE_LL - this.CODE_FL + 1) - keyToUp.charCodeAt(count % keyToUp.length)) % (this.CODE_LL - this.CODE_FL + 1) + this.CODE_FL);
  //       count++;
  //     }
  //     else {
  //       res += letter;
  //     }
  //   }
  //   if (this.type === false) {
  //     res = res.split(``).reverse().join(``);
  //   }
  //   return res;
  // }
}

module.exports = {
  VigenereCipheringMachine
};

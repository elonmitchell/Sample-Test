export default class Fibonacci {
  numbers = [];
  constructor () {
    this.numbers = [];
  }

  /**
   * generate fibonacci numbers up to the max
   * @param {number} max - threshold for termination in fibonacci sequence
   * @param {number} first - first number
   * @param {number} second - second number
   */
  generate (max = 100, first = 1, second = 2) {
    this.numbers = [first, second];
    const loop = (num) => {
      if (num <= max) {
        const cursor = this.numbers.length
        this.numbers[cursor] = num;
        const next = this.numbers[cursor - 1] + this.numbers[cursor];
        loop(next);
      }
    }
    loop(first + second);
  }

  /**
   * generate fibonacci numbers by index of last term
   * @param {number} index - index of the last term in fibonacci sequence
   * @param {number} first - first number
   * @param {number} second - second number
   */
  nth (index = 10, first = 1, second = 2) {
    this.numbers = [first, second];
    const loop = (num) => {
      if (this.numbers.length < index) {
        const cursor = this.numbers.length
        this.numbers[cursor] = num;
        const next = this.numbers[cursor - 1] + this.numbers[cursor];
        loop(next);
      }
    }
    loop(first + second);
    return this.numbers[this.numbers.length - 1]
  }

  get sequence () {
    return this.numbers
  }

  get sum () {
    return this.numbers.reduce((sum, num) => sum + num);
  }

  get sumOfEvens () {
    return this.numbers.reduce((sum, num) => ((num % 2) === 0 ? sum + num : sum), 0);
  }

  get sumOfOdds () {
    return this.numbers.reduce((sum, num) => ((num % 2) === 1 ? sum + num : sum), 0);
  }
}

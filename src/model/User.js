import { ERRORS } from '../constants/index.js';
import Lotto from '../Lotto.js';
import { RandomNumbers } from '../utils/index.js';

class User {
    #numbers;
    #lottos;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers / 1000;
        this.#lottos = [];
    }

    #validate(numbers) {
        const n = Number(numbers);

        if (Number.isNaN(n)) {
            throw new Error(ERRORS.AMOUNT_NAN);
        }
        if (!Number.isInteger(n)) {
            throw new Error(ERRORS.AMOUNT_NOT_INT);
        }
        if (n % 1000 !== 0) {
            throw new Error(ERRORS.AMOUNT_NOT_THOUSANDS);
        }
        if (n < 1000) {
            throw new Error(ERRORS.AMOUNT_TOO_SMALL);
        }
    }

    generateLottos() {
        for (let i = 0; i < this.#numbers; i++) {
            const lotto = this.#createLotto();
            this.#lottos.push(lotto);
        }
    }

    #createLotto() {
        const numbers = RandomNumbers.pick();
        numbers.sort((a, b) => a - b);
        return new Lotto(numbers);
    }

    getLottoCount() {
        return this.#numbers;
    }

    getLottos() {
        return this.#lottos;
    }

}

export default User;

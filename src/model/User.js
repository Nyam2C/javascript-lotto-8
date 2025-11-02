import { ERRORS } from '../constants/index.js';
import { Lotto } from './index.js';     
import RandomNumbers from '../utils/index.js';

class User {
    #numbers;
    #lottos;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers / 1000;
        this.#lottos = [];
        console.log(this.#numbers);
    }

    #validate(numbers) {
        const n = Number(numbers);
        this.#validateIsNumber(n);
        this.#validateIsInteger(n);
        this.#validateIsThousandsUnit(n);
        this.#validateMinAmount(n);
    }

    #validateIsNumber(numbers) {
        if (Number.isNaN(numbers)) {
            throw new Error(ERRORS.AMOUNT_NAN);
        }
    }

    #validateIsInteger(numbers) {
        if (!Number.isInteger(numbers)) {
            throw new Error(ERRORS.AMOUNT_NOT_INT);
        }
    }

    #validateIsThousandsUnit(numbers) {
        if (numbers % 1000 !== 0) {
            throw new Error(ERRORS.AMOUNT_NOT_THOUSANDS);
        }
    }

    #validateMinAmount(numbers, min = 1000) {
        if (numbers < min) {
            throw new Error(ERRORS.AMOUNT_TOO_SMALL);
        }
    }

    generateAndStoreLottos() {
        for (let i = 0; i < this.#numbers; i++) {
            const lottoNumbers = RandomNumbers.pick();
            lottoNumbers.sort((a, b) => a - b);
            const lotto = new Lotto(lottoNumbers);
            this.#lottos.push(lotto);
        }
    }

}

export default User;

import { ERRORS, LOTTO_RULES } from '../constants/index.js';

export const validateWinningNumbers = (numbers) => {

    if (numbers.length !== LOTTO_RULES.NUMBERS_PER_TICKET) {
        throw new Error(ERRORS.WINNING_COUNT_INVALID);
    }
    
    if (numbers.some(number => Number.isNaN(number))) {
        throw new Error(ERRORS.WINNING_NAN);
    }

    if (numbers.some(number => !Number.isInteger(number))) {
        throw new Error(ERRORS.WINNING_NOT_INT);
    }

    if (numbers.some(number => number < LOTTO_RULES.NUMBER_MIN || number > LOTTO_RULES.NUMBER_MAX)) {
        throw new Error(ERRORS.WINNING_RANGE_INVALID);
    }

    if (new Set(numbers).size !== LOTTO_RULES.NUMBERS_PER_TICKET) {
        throw new Error(ERRORS.WINNING_HAS_DUPLICATE);
    }

};

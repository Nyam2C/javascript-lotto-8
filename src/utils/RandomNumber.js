import { Random } from '@woowacourse/mission-utils';
import { LOTTO_RULES } from '../constants/lottoRules.js';

const RandomNumbers = {
    pick: () =>
        Random.pickUniqueNumbersInRange(
            LOTTO_RULES.NUMBER_MIN,
            LOTTO_RULES.NUMBER_MAX,
            LOTTO_RULES.NUMBERS_PER_TICKET,
        ),
};

export default RandomNumbers;
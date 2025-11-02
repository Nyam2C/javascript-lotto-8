import { Random } from '@woowacourse/mission-utils';

const RandomNumbers = {
    pick: () =>
        Random.pickUniqueNumbersInRange(
            1,
            45,
            6,
        ),
};

export default RandomNumbers;
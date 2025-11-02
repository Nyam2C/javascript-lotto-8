import { Random } from '@woowacourse/mission-utils';

const RandomNumbers = {
    pick: () =>
        Random.pickNumberInRange(
            1,
            45,
            6,
        ),
};

export default getRandomNumbers;
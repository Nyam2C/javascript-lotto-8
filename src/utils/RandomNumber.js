import { Random } from '@woowacourse/mission-utils';

const getRandomNumbers = {
    pick: (numbers) =>
        Random.pickNumberInRange(
            1,
            45,
            numbers,
        ),
};

export default getRandomNumbers;
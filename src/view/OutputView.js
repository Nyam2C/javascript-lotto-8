import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPTS, PRIZE_BY_RANK, RANK_LINES, RANK } from "../constants/index.js";

const OutputView = {
    printPurchaseCount(count) {
        MissionUtils.Console.print(PROMPTS.PURCHASE_COUNT(count));
    },

    printLottos(lottos) {
        lottos.forEach((lotto) => {
            MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
        });
    },

    printResults(results, purchaseAmount) {
        const counts = {
            [RANK.FIRST]: results.first || 0,
            [RANK.SECOND]: results.second || 0,
            [RANK.THIRD]: results.third || 0,
            [RANK.FOURTH]: results.fourth || 0,
            [RANK.FIFTH]: results.fifth || 0,
        };

        let totalPrize = 0;

        MissionUtils.Console.print(PROMPTS.STATISTICS);

        for (let i = 0; i < RANK_LINES.length; i += 1) {
            const line = RANK_LINES[i];

            let bonusBall = '';
            if (line.bonus) {
                bonusBall = ', 보너스 볼 일치';
            }

            const prize = PRIZE_BY_RANK[line.rank];
            const count = counts[line.rank] || 0;

            totalPrize += prize * count;

            MissionUtils.Console.print(
                PROMPTS.RESULTS(line.numbers, bonusBall, prize.toLocaleString(), count)
            );
        }
        const yieldRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
        MissionUtils.Console.print(PROMPTS.RATE_OF_RETURN(yieldRate));

    },

    printError(errorMessage) {
        MissionUtils.Console.print(errorMessage);
    },
}

export default OutputView;
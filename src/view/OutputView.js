import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPTS, PRIZE_BY_RANK, RANK_LINES, RANK } from "../constants/index.js";

class OutputView {
    static printPurchaseCount(count) {
        MissionUtils.Console.print(PROMPTS.PURCHASE_COUNT(count));
    }

    static printLottos(lottos) {
        lottos.forEach((lotto) => {
            MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
        });
    }

    static printResults(results, purchaseAmount) {
        const counts = this.#mapResultsToCounts(results);

        MissionUtils.Console.print(PROMPTS.STATISTICS);

        const totalPrize = this.#calculateAndPrintRanks(counts);
        this.#printYieldRate(totalPrize, purchaseAmount);
    }

    static #mapResultsToCounts(results) {
        return {
            [RANK.FIRST]: results.first || 0,
            [RANK.SECOND]: results.second || 0,
            [RANK.THIRD]: results.third || 0,
            [RANK.FOURTH]: results.fourth || 0,
            [RANK.FIFTH]: results.fifth || 0,
        };
    }

    static #calculateAndPrintRanks(counts) {
        let totalPrize = 0;

        RANK_LINES.forEach(line => {
            const prize = PRIZE_BY_RANK[line.rank];
            const count = counts[line.rank] || 0;
            const bonusBall = line.bonus ? ', 보너스 볼 일치' : '';

            totalPrize += prize * count;

            MissionUtils.Console.print(
                PROMPTS.RESULTS(line.numbers, bonusBall, prize.toLocaleString(), count)
            );
        });

        return totalPrize;
    }

    static #printYieldRate(totalPrize, purchaseAmount) {
        const yieldRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
        MissionUtils.Console.print(PROMPTS.RATE_OF_RETURN(yieldRate));
    }

    static printError(errorMessage) {
        MissionUtils.Console.print(errorMessage);
    }
}

export default OutputView;
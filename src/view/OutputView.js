import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPTS } from "../constants/index.js";

const OutputView = {
    printPurchaseCount(count) {
        MissionUtils.Console.print(PROMPTS.PURCHASE_COUNT(count));
    },

    printLottos(lottos) {
        lottos.forEach((lotto) => {
            MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
        });
    },

    printResults(results) {
        MissionUtils.Console.print(PROMPTS.STATISTICS);
        results.forEach((result) => {
            MissionUtils.Console.print(result);
        });
    },

    printError(errorMessage) {
        MissionUtils.Console.print(errorMessage);
    },
}

export default OutputView;
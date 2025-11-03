import { InputView } from '../view/index.js';
import { OutputView } from '../view/index.js';
import { User } from '../model/index.js';
import { validateWinningNumbers, validateBonusNumber } from '../utils/index.js';
import { LOTTO_RULES } from "../constants/index.js";



export class LottoController {
    async run() {
        try {
            const purchaseAmount = await InputView.readPurchaseAmount();
            const user = new User(purchaseAmount);
            OutputView.printPurchaseCount(user.getLottoCount());

            user.generateLottos();

            const lottos = user.getLottos();
            OutputView.printLottos(lottos);

            const winningNumbers = await InputView.readWinningNumbers();
            validateWinningNumbers(winningNumbers);

            const bonusNumber = await InputView.readBonusNumber();
            validateBonusNumber(bonusNumber, winningNumbers);

            const results = this.countMatchedNumbers(lottos, winningNumbers, bonusNumber);
            OutputView.printResults(results, purchaseAmount);

        } catch (error) {
            OutputView.printError(error.message);
        }
    }

    countMatchedNumbers(lottos, winning, bonus) {
        const rank = {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0,
            fifth: 0,
        }

        for (const lotto of lottos) {
            const merged = [...lotto.getNumbers(), ...winning];
            const matchcount = LOTTO_RULES.NUMBERS_PER_TICKET * 2 - new Set(merged).size;
            const isBonusMatched = lotto.getNumbers().includes(bonus);

            if (matchcount === 6) {
                rank.first++;
                continue;
            }
            if (matchcount === 5 && isBonusMatched) {
                rank.second++;
                continue;
            }
            if (matchcount === 5 && !isBonusMatched) {
                rank.third++;
                continue;
            }
            if (matchcount === 4) {
                rank.fourth++;
                continue;
            }
            if (matchcount === 3) {
                rank.fifth++;
                continue;
            }
        }

        return rank;
    }

}
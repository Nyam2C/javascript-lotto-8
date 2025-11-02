import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPTS } from "../constants/index.js";

const InputView = {
    async readPurchaseAmount() {
        const input = await MissionUtils.Console.readLineAsync(PROMPTS.PURCHASE_AMOUNT);
        return input;
    },

    async readWinningNumbers() {
        const input = await MissionUtils.Console.readLineAsync(PROMPTS.WINNING_NUMBER);
        const winningNumbers = input.split(',').map(x => Number(x.trim()));
        return winningNumbers;
    },

    async readBonusNumber() {
        const input = await MissionUtils.Console.readLineAsync(PROMPTS.BONUS_NUMBER);
        const bonusNumber = Number(input.trim());
        return bonusNumber;
    },
}

export default InputView;
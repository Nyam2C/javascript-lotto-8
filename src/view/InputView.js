import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPTS } from "../constants/index.js";

const InputView = {
    async readPurchaseAmount() {
        const input = await MissionUtils.Console.readLineAsync(PROMPTS.PURCHASE_AMOUNT);
        return input;
    },
}

export default InputView;
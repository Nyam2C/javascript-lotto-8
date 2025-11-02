import { InputView } from '../view/index.js';
import { OutputView } from '../view/index.js';
import { User } from '../model/index.js';

export class LottoController {
    async run() {
        try {
            const purchaseAmount = await InputView.readPurchaseAmount();
            const user = new User(purchaseAmount);

        } catch (error) {
            OutputView.printError(error.message);
            throw error;
        }
    }
}
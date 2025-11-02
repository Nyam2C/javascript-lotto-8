import { InputView } from '../view/index.js';
import { OutputView } from '../view/index.js';

export class LottoController {
    async run() {
        try {
            const purchaseAmount = await InputView.readPurchaseAmount();

        } catch (error) {
        }
    }
}
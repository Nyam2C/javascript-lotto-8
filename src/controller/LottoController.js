import { InputView } from '../view/index.js';
import { OutputView } from '../view/index.js';
import { User } from '../model/index.js';

export class LottoController {
    async run() {
        try {
            const purchaseAmount = await InputView.readPurchaseAmount();
            const user = new User(purchaseAmount);
            OutputView.printPurchaseCount(user.getLottoCount());
            user.generateLottos();
            const lottos = user.getLottos();
            OutputView.printLottos(lottos);

        } catch (error) {
            OutputView.printError(error.message);
            throw error;
        }
    }
}
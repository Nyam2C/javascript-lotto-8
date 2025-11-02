const PROMPT = {
    PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
    PURCHASE_COUNT: (count) => `\n${count}개를 구매했습니다.`,
    WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
    STATISTICS: "\n당첨 통계\n---",
    RESULTS: (numbers, bonusBall, prize, count) =>
        `${numbers}개 일치${bonusBall} (${prize}원) - ${count}개`,
    RATE_OF_RETURN: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export default PROMPT;
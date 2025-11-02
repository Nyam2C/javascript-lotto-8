const ERRORS = {
    AMOUNT_NAN: '[ERROR] 구입 금액은 숫자여야 합니다.',
    AMOUNT_NOT_INT: '[ERROR] 구입 금액은 정수여야 합니다.',
    AMOUNT_NOT_THOUSANDS: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
    AMOUNT_TOO_SMALL: '[ERROR] 구입 금액은 1,000원 이상이어야 합니다.',

    WINNING_COUNT_INVALID: '[ERROR] 당첨 번호는 6개여야 합니다.',
    WINNING_RANGE_INVALID: '[ERROR] 당첨 번호는 1부터 45 사이여야 합니다.',
    WINNING_HAS_DUPLICATE: '[ERROR] 당첨 번호는 중복될 수 없습니다.',
    WINNING_NOT_INT: '[ERROR] 당첨 번호는 정수여야 합니다.',
    WINNING_NAN: '[ERROR] 당첨 번호는 숫자여야 합니다.',

    BONUS_RANGE_INVALID: '[ERROR] 보너스 번호는 1부터 45 사이여야 합니다.',
    BONUS_HAS_DUPLICATE: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
    BONUS_NOT_INT: '[ERROR] 보너스 번호는 정수여야 합니다.',
    BONUS_NAN: '[ERROR] 보너스 번호는 숫자여야 합니다.',
}

export default ERRORS;
import { validateWinningNumbers, validateBonusNumber } from "../src/utils/InputValidatos.js";

describe("당첨 번호 검증 테스트", () => {
  test("올바른 당첨 번호를 입력하면 예외가 발생하지 않는다.", () => {
    expect(() => {
      validateWinningNumbers([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("당첨 번호가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 NaN이 포함되면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers([1, 2, 3, 4, 5, NaN]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers([1, 2, 3, 4, 5, 5.5]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");

    expect(() => {
      validateWinningNumbers([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 중복이 있으면 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 검증 테스트", () => {
  test("올바른 보너스 번호를 입력하면 예외가 발생하지 않는다.", () => {
    expect(() => {
      validateBonusNumber(7, [1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("보너스 번호가 NaN이면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(NaN, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(7.5, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(46, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");

    expect(() => {
      validateBonusNumber(0, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호에 포함되면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});

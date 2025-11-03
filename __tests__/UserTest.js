import User from "../src/model/User.js";

describe("User 클래스 테스트", () => {
  describe("구입 금액 검증", () => {
    test("올바른 금액(1000)을 입력하면 User 객체가 생성된다.", () => {
      expect(() => {
        new User("1000");
      }).not.toThrow();
    });

    test("올바른 금액(8000)을 입력하면 로또 개수가 8개가 된다.", () => {
      const user = new User("8000");
      expect(user.getLottoCount()).toBe(8);
    });

    test("문자를 입력하면 예외가 발생한다.", () => {
      expect(() => {
        new User("1000j");
      }).toThrow("[ERROR]");
    });

    test("NaN 값을 입력하면 예외가 발생한다.", () => {
      expect(() => {
        new User("abc");
      }).toThrow("[ERROR]");
    });

    test("정수가 아닌 값(1000.5)을 입력하면 예외가 발생한다.", () => {
      expect(() => {
        new User("1000.5");
      }).toThrow("[ERROR]");
    });

    test("1000 단위가 아닌 값(1500)을 입력하면 예외가 발생한다.", () => {
      expect(() => {
        new User("1500");
      }).toThrow("[ERROR]");
    });

    test("최소 금액보다 작은 값(500)을 입력하면 예외가 발생한다.", () => {
      expect(() => {
        new User("500");
      }).toThrow("[ERROR]");
    });
  });

  describe("로또 생성", () => {
    test("로또를 생성하면 구매한 개수만큼 로또가 생성된다.", () => {
      const user = new User("5000");
      user.generateLottos();
      expect(user.getLottos().length).toBe(5);
    });

    test("생성된 로또의 각 번호는 6개여야 한다.", () => {
      const user = new User("3000");
      user.generateLottos();
      user.getLottos().forEach((lotto) => {
        expect(lotto.getNumbers().length).toBe(6);
      });
    });

    test("생성된 로또의 번호는 오름차순으로 정렬되어 있다.", () => {
      const user = new User("2000");
      user.generateLottos();
      user.getLottos().forEach((lotto) => {
        const numbers = lotto.getNumbers();
        for (let i = 0; i < numbers.length - 1; i++) {
          expect(numbers[i] <= numbers[i + 1]).toBe(true);
        }
      });
    });
  });
});

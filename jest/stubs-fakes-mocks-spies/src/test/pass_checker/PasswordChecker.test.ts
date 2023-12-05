import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });


  it("Password with less than 8 chars is invalid", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it("Password with more than 8 chars is ok", () => {
    const actual = sut.checkPassword("12345678Aa");
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  xit("Password with no upper case letter is invalid", () => {
    const actual = sut.checkPassword("1234abcd");
    expect(actual).toBe(false);
  });

  xit("Password with upper case letter is valid", () => {
    const actual = sut.checkPassword("1234abcdA");
    expect(actual).toBe(true);
  });

  xit("Password with no lower case letter is invalid", () => {
    const actual = sut.checkPassword("1234ABCD");
    expect(actual).toBe(false);
  });

  xit("Password with lower case letter is valid", () => {
    const actual = sut.checkPassword("1234ABCDa");
    expect(actual).toBe(true);
  });
});

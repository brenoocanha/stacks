export enum PasswordErrors {
  SHORT = 'Password is too short!',
  NO_UPPER_CASE = 'Upper case letter required!',
  NO_LOWER_CASE = 'Lower case letter required!',
};

export interface CheckResult {
  valid: boolean;
  reasons: PasswordErrors[];
}

export class PasswordChecker {

  public checkPassword(password: string): CheckResult {
    if (password.length < 8) {

    }
    if (password == password.toLowerCase()) {

    }
    if (password == password.toUpperCase()) {

    }
    return {
      valid: true,
      reasons: [],
    };
  }

}
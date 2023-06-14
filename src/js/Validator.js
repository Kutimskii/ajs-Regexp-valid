export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const validName = /^[^-_\d][-\w\d]*[^-_0-9]$/.test(this.userName);
    const exeptThreeNumbInRow = !/\d{3}/.test(this.userName);
    if (validName && exeptThreeNumbInRow) {
      return true;
    } return false;
  }
}

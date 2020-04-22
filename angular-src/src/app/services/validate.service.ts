import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.name == null || user.username == null
      || user.email == null || user.password == null) {
      return false;
    } else {
      if (user.name.length > 0 && user.username.length > 0 && user.email.length > 0 && user.password.length > 0)
        return true;
      else
        return false;
    }
  }

  validateGoogle(user) {
    if (this.usernameIsValid(user.username) && this.passwordIsValid(user.password)) {
      return true;
    } else {
      return false;
    }
  }

  usernameIsValid = function (username) {
    if (username == null || username.length < 3 || username.length > 15 || username.includes(" "))
      return false;
    else
      return true;
  }

  nameIsValid = function (name) {
    if (name == null || name.length < 4 || name.length > 25)
      return false;
    else
      return true;
  }

  passwordIsValid = function (password) {
    if (password == null || password.length < 8 || password.length > 25 || password.includes(" "))
      return false;
    else
      return true;
  }

  validateAuthentication(user) {
    if (user.username == null || user.password == null) {
      return false;
    } else {
      if (user.username.length > 0 && user.password.length > 0)
        return true;
      else
        return false;
    }
  }

  validateEmail(email) {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
  }
}

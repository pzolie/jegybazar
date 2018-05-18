import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from './user-model';

@Injectable()
export class UserService {
  isLoggedIn = false;

  private _user: UserModel;

  constructor(private  _router: Router) { }

  login(email: string, password: string): boolean {
    if (email === 'angular' && password === 'angular') {
      this._user = new UserModel(UserModel.exampleUser);
      this.isLoggedIn = true;
      this._router.navigate(['/user']);
    }
    return false;
  }

  register(param?: UserModel) {
    if(param) {
      this._user = new UserModel(param);
    } else {
      this._user = new UserModel(UserModel.exampleUser);
    }
    this.isLoggedIn = true;
    this._router.navigate(['/user']);
  }

  logout(){
    this._user = new UserModel();
    this.isLoggedIn = false;
    this._router.navigate(['/home']);
  }
}

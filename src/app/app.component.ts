import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './shared/interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-autentification';

  userLogedIn :boolean = false;
  user: User =
  {
    name: 'aaaaa',
    email: 'bbbbb',
    password: 'ccccc'
  };
}

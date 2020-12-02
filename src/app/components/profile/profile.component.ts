import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User =
  {
    name: 'aaaaa',
    email: 'bbbbb',
    password: 'ccccc'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

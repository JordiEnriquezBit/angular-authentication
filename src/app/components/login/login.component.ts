import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup : FormGroup;

  constructor(private fb: FormBuilder){}

    ngOnInit(): void
    {
      this.buildForm();
    }

  private buildForm(){
    const minPassLength = 4;
    this.formGroup = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(minPassLength)
      ]]
    });
  }


  public getError(controlName: string): string[] {
    let error =  [];
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
     // error = JSON.stringify(control.errors);
      error = [...Object.keys(control.errors)];
    }
    return error;
  }

  logIn()
  {
    console.log(this.formGroup.value);
  }
}

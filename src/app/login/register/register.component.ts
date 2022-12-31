import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formControler!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formControler = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/'),
        ],
      ],
      phones: this.fb.array([]),
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$'
          ),
        ],
      ],
    });

    this.addPhone();
  }

  get username() {
    return this.formControler.get('username');
  }
  get email() {
    return this.formControler.get('email');
  }
  get phones() {
    return this.formControler.get('phones') as FormArray;
  }
  get password() {
    return this.formControler.get('password');
  }
  get passwordConfirm() {
    return this.formControler.get('passwordConfirm');
  }

  addPhone() {
    let phone = this.fb.group({
      phonePrefix: '',
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
    this.phones.push(phone);
  }

  registerSubmit() {
    if (this.formControler.valid) {
      alert('Registered successfully!');
    }
    else (this.formControler.invalid)
    {
      alert('Invalid fields or just missing!');
    }
  }
}

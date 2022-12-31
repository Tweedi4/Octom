import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  login!: string;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/'),
        ],
      ],
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
  }

  loginSubmit() {
    if (this.loginForm.valid) {
      alert('Logged in successfully!');
    } else (this.loginForm.invalid)
    {
      alert('Invalid fields or just missing!');
    }
  }
}

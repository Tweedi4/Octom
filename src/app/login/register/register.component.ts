import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  emailRegister(valeur: String) {
    console.log(valeur);
  }
  passwordRegister(valeur: String) {
    console.log(valeur);
  }
  passwordConfRegister(valeur: String) {
    console.log(valeur);
  }

}

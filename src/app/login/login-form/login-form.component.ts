import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  recupEmail(valeur:string) {
    console.log(valeur)
  }
  recupPassword(valeur:string) {
    console.log(valeur)
  }
}

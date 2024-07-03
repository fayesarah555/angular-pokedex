import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule] 
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  login() {
    // Simulate login logic (replace with actual authentication)
    if (this.username === 'user' && this.password === 'password') {
      // Successful login, navigate to home or dashboard
      console.log('Login successful');
      this.loginError = '';
      // Redirect or perform necessary action upon successful login
    } else {
      // Handle login error (show message to user)
      this.loginError = 'Invalid username or password';
    }
  }
}

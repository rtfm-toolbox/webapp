import { Component, OnInit } from '@angular/core';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'toolbox';
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  hideAppAlert() {

  }

}
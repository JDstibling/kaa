import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  user$ = this.usersService.currentUserProfile$;

  constructor(
    public auth: AuthService, 
    private route: Router, 
    public usersService: UsersService,){}

  logout() {
    this.auth.logout().subscribe(() => {
      this.route.navigate(['']);
    })
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  user$ = this.authService.currentUser$;

  iconDefault = "../../../assets/images/icon/iconUser2.png";
  
  constructor(public authService: AuthService) {}


  ngOnInit(): void {
    
  }
}
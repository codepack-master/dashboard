import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SocialAuthService, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: SocialAuthService, private route: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      console.log(user);
      if(user){
        this.route.navigateByUrl('/admin');
      }
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    
  }

}

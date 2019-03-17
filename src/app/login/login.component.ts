import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router,
     ) { }

  ngOnInit() {
    console.log('hit');
  }

  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
    console.log(username,password);
    
  	if(username == 'admin' && password == 'admin') {
     // this.user.setUserLoggedIn();
  		this.router.navigate(['dashboard']);
  	}
  }

}

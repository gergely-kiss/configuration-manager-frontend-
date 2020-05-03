import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  operationOptions: any;

  constructor(private service: RestApiService, private router: Router) { }

  ngOnInit(): void {
  }

  doLogin(){
    const response = this.service.login(this.userName, this.password);
    response.subscribe(data => {
    this.router.navigate(['home']);
    });
  }

}

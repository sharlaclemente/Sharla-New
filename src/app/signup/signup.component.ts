import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public signup = {
  email: '',
  password: '',
  repeatpassword: '',
};

  constructor(public http: HttpClient ) { }

  ngOnInit() {
   }

   submit() {
     this.http.post('http://localhost:8080/sendEmail', this.signup)
     .subscribe( (res: any) => {
       console.log(res);
     }, (error) => {
       console.log(error);
     });
   }
  }

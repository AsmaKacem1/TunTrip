import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-front-layout',
  templateUrl: './auth-front-layout.component.html',
  styleUrls: ['./auth-front-layout.component.css']
})
export class AuthFrontLayoutComponent implements OnInit {

  myForm=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    birthdayDay:new FormControl(),
    birthdayYear:new FormControl(),
    birthdayMonth:new FormControl(),
  })

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){

  }

}

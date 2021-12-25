import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-front-layout',
  templateUrl: './auth-front-layout.component.html',
  styleUrls: ['./auth-front-layout.component.css']
})
export class AuthFrontLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm) {
    
}
}

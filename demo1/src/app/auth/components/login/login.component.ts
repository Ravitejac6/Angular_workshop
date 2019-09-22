import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private authService: AuthService) { }


  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).pipe(take(1)).subscribe(d=>{
      console.log(d);
    })
  }

}

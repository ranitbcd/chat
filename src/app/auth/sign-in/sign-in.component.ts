import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(
    private auth: AuthServiceService,
    public _fb: FormBuilder,
    private router: Router
  ) {}
  public registration_form: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.registration_form = this._fb.group({
      userId: null,
      email: null,
      password: null,
      cnfPassword: null,
    });
  }
  async registerUser(){
        const payload = this.registration_form.getRawValue();
        console.log(payload)
        await this.auth.registerUser('/register',payload).subscribe((res:any)=>{
          console.log(res)
        })
  }
}

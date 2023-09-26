import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    public Router : Router,
    private auth: AuthServiceService,
    private _fb: FormBuilder,
  ){}
  public logInForm: FormGroup
  handleSignInRoute(){
    this.Router.navigate(['auth/signIn'])
  }
  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.logInForm= this._fb.group({
      userId:null,
      password:null
    });
  }
  getLoginCredition(){
    console.log(this.logInForm);
    let params = this.logInForm.getRawValue()
    this.auth.makeApiCall('/userLogin',params).subscribe((res:any)=>{
      console.log(res)
    })
  }
}

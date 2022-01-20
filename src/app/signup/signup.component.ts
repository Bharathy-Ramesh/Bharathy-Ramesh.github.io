import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators} from '@angular/forms';
import { DataserveService } from '../services/dataserve.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SignupComponent implements OnInit {

  signform:FormGroup;
  hide:boolean = true;
  constructor(private dataservice : DataserveService) {
    this.signform = new FormGroup({
      'name': new FormControl(),
      'password': new FormControl('', [Validators.required]),
      'cpassword': new FormControl(),
      'email': new FormControl('', [Validators.required, Validators.email])     
    });
   }
   StrengthMsg :any;
   strongpwd:any;
   bool:any;
   getErrorMessage() {
     if (this.signform.controls['email'].hasError('required')) {
       return 'You must enter a value';
     }
 
     return this.signform.controls['email'].hasError('email') ? 'Not a valid email' : '';
   }
  ngOnInit(): void {
    console.log(this.signform);
    this.dataservice.enableroute(false);
  }
  SignUP(value:any){
    console.log("check",value);
  }

  typingPwd(){
    this.strongpwd = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    if(this.strongpwd.test(this.signform.controls['password'].value)){
      this.bool = true;
      this.StrengthMsg = "Good";
    }else{
      this.StrengthMsg = "Please strength your password";
      this.bool = false;
    }
  }

  get f(){
    return this.signform.controls;
  }

}


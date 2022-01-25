import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormArray, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataserveService } from '../services/dataserve.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent implements OnInit {

  userForm:FormGroup;
  hide:boolean = true;
  data:any = [];
  constructor(private router:Router, private http: HttpClient, private dataservice :DataserveService) {
    this.userForm = new FormGroup({
      'username': new FormControl(),
      'password': new FormControl()
    });
   }
  ngOnInit(): void {
    this.dataservice.enableroute(false);
  }
  showDetails(){    
    this.router.navigate(['/signup']);  
  }; 
  Login(logindet:any){
    console.log(logindet);
    this.dataservice.login(logindet.value.username, logindet.value.password).subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
           if(data) this.router.navigate(['/books']); 
           else this.router.navigate(['/signin']);
      });
      //this.router.navigate(['/apis']);
   }
    
  }
  


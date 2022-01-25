import { Component, OnInit } from '@angular/core';
import { DataserveService } from './services/dataserve.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book_Store';
  searchBook: any;
  flagset:any;
  constructor(public dataservice : DataserveService, public router:Router, public route : ActivatedRoute){}
  ngDoCheck(){
    this.dataservice.flagdet.subscribe((res) => 
      {  
         this.flagset = res;
      });
  }
  scrolltop(){
    this.dataservice.changeMessage(this.searchBook);
  }  
  logout(){
    this.dataservice.logout();
  }
}

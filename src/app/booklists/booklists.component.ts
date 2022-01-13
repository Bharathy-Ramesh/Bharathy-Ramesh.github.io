import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserveService } from '../services/dataserve.service';


@Component({
  selector: 'app-booklists',
  templateUrl: './booklists.component.html',
  styleUrls: ['./booklists.component.css']
})
export class BooklistsComponent implements OnInit {
  searchBook:any;
  bookdata : any ;
  constructor(public http : HttpClient, public router:Router, public route : ActivatedRoute, public dataservice : DataserveService) { }

  ngOnInit(){
    this.getDetails();
    this.dataservice.getData();
    this.dataservice.enableroute(false);
    this.dataservice.getbooks.subscribe(res =>
      {
        this.bookdata = res;
      });
  }
  
  getDetails(){
    this.dataservice.currentDetails.subscribe((res) => 
      {  
         this.searchBook = res;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserveService } from '../dataserve.service';


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
    this.getData();
    this.getDetails();
  }
  getData(){
    this.http.get('assets/bookname.json').subscribe( x =>
      {
        this.bookdata = x;
      })
  }
  navigate(det:any){
    debugger;
    this.router.navigate(['/bookdetail'],{ queryParams:det});
  }
  getDetails(){
    this.dataservice.currentDetails.subscribe((res) => 
      {  
         this.searchBook = res;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserveService } from '../services/dataserve.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  book_detail : any; 
  id : any;
  constructor(public router : ActivatedRoute, public dataservice : DataserveService) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      params => {
        this.id = params['id'];
      }
    )
    
    this.dataservice.getbooks.subscribe(res =>
      {
        if(res.length > 0){
          var data = res.filter( (x:any) => {
            return x.id == this.id;
          })
        this.book_detail = data[0];
        }
      });
  }

}

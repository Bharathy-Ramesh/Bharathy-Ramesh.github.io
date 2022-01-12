import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  book_detail : any; 
  constructor(public router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(
      params => {
        this.book_detail = params;
      }
    )    
  }

}

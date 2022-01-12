import { Component, OnInit } from '@angular/core';
import { DataserveService } from './dataserve.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book_Store';
  searchBook: any;
  constructor(public dataservice : DataserveService){}

  scrolltop($el:any){
    $el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    this.dataservice.changeMessage(this.searchBook);
  }

  
}

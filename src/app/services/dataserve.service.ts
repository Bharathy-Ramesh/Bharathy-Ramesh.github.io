import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable,ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserveService {

  constructor(public http : HttpClient) { }
  public editDataDetails: any = "";
  public flagchange :any = true; 
  public books:any = [];

  private inputSource = new  BehaviorSubject(this.editDataDetails);
  private flagsource = new BehaviorSubject(this.flagchange);
  private bookdata = new BehaviorSubject(this.books);

  currentDetails = this.inputSource.asObservable();
  flagdet = this.flagsource.asObservable();
  getbooks = this.bookdata.asObservable();

  changeMessage(details: string) {
    this.inputSource.next(details)
    }

  enableroute(val:any){
    this.flagsource.next(val);
  }

  getData(){
    this.http.get('assets/bookname.json').subscribe( x =>
      {
        this.bookdata.next(x);
      });
  }
}

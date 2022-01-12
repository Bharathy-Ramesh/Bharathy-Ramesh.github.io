import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable,ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserveService {

  constructor() { }
  public editDataDetails: any = ""; 
  private inputSource = new  BehaviorSubject(this.editDataDetails);
  currentDetails = this.inputSource.asObservable();
  changeMessage(details: string) {
    debugger;
    this.inputSource.next(details)
    }
}

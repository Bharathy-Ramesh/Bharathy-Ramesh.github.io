import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, ReplaySubject, of, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class DataserveService {
  userData;
  
  constructor(public http : HttpClient, public fireauth : AngularFireAuth) { 
    this.userData = fireauth.authState;
  }
  
  
  public editDataDetails: any = "";
  public flagchange :any = true; 
  public books:any = [];
  logged : boolean = false;

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

  
  login(user:any, pwd:any):Observable <any>{
    debugger;
  //    this.logged = user !== '' && pwd !== '';
  //    localStorage.setItem('localdata', this.logged ? "true" : "false");
  //    return of(this.logged).pipe(
  //     delay(1000),
  //     tap(val => { 
  //        console.log("Is User Authentication is successful: " + val); 
  //     })
  //  );
  return of(this.fireauth.signInWithEmailAndPassword(user, pwd).then(res => {
      console.log(`You're in!`);
      localStorage.setItem('localdata', "true");
      })
      .catch(err => {
      console.log('Something went wrong:',err.message);
      localStorage.setItem('localdata', "false");
      }))
      // return of(this.logged).pipe(
      //       tap(val => { 
      //          console.log("Is User login is successful: " + val); 
      //       })
      // );
  }

  SignUp(email: string, password: string):Observable <any> {
    this.fireauth
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
    console.log('You are Successfully signed up!', res);
    })
    .catch(error => {
    console.log('Something is wrong:', error.message);
    });
    return of(this.logged).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
);
    }

  logout(){
    localStorage.removeItem('localdata');
 }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { interval, Subscription, Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public accounts: {name: string, status: string}[] = [];
  private subscription: Subscription;

  constructor(private accountService: AccountService){

    // this.subscription = interval(1000).subscribe(result => {
    //   console.log(result);
    // }, error => {
    //   console.log(error);
    // }, () => {
    //   console.log('gotovo');
    // })

    this.subscription = this.customInterval().subscribe(result => {
      console.log(result)
    }, error => {
      alert(error.message)
    }, () => {
      console.log("kraj")
    })

  }

  customInterval(){
    const obs = new Observable(subscriber => {
      let count = 0;
      setInterval(() => {
        subscriber.next(count)
        if(count === 2){
          subscriber.complete();
        }
        if(count === 3){
          subscriber.error(new Error("Desila se greska"));
        }
        count++;
      }, 1000)
    });
    return obs;
  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
    this.accountService.fetchUsers();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

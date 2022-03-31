import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) {}

  addAccount(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
    this.loggingService.logStatus(newAccount.status);
  }

  changeStatus(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.logStatus(updateInfo.newStatus);
  }

  fetchUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        console.log(response);
      });
  }
}

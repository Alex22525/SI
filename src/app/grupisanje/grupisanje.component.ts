import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-grupisanje',
  templateUrl: './grupisanje.component.html',
  styleUrls: ['./grupisanje.component.css']
})
export class GrupisanjeComponent implements OnInit {
  title: string = "Ovo je nas naslov";
  editButton: boolean = true;
  usernames: User[] = [
    {username: 'marko', firstName: 'Marko'},
    {username: 'janko', firstName: 'Janko'},
    {username: 'ana', firstName: 'Ana'},
    {username: 'mirko', firstName: 'Mirko'}
  ]

  constructor() { }

  ngOnInit(): void {
  }


  onClick(){
    this.editButton = !this.editButton;
  }

}

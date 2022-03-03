import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoValue: string = '';

  public todos: Todo[] = [
    {id: 1, title: 'Danas cu da kodiram 8 sati'},
    {id: 2, title: 'Danas cu da ucim Angular'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(todo: string){
    this.todos.push({id: this.todos.length +1, title: todo})
  }

  onDelete(id: number){
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  onEdit(todo: Todo){
    this.todos[todo.id].title = todo.title;
  }

}

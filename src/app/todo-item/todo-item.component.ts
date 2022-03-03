import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //@Input('alijas') title: string = '';
  @Input() todo: Todo = {id: 0, title: ''};
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  public edit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number){
    this.deleteTodo.emit(id);
  }

  onEdit(todo: Todo){
    this.editTodo.emit(todo);
  }



}

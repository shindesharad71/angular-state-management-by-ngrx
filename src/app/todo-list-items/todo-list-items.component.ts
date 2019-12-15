import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.scss']
})
export class TodoListItemsComponent implements OnInit {
  todoListItems: Observable<Todo[]>;
  
  constructor(private store: Store<{todoListItems: Todo[]}>) {
    this.todoListItems = store.pipe(select('todoListItems'));
   }

  ngOnInit() {
  }

}

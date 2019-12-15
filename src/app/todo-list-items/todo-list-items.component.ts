import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { Store, select } from '@ngrx/store';
import { RemoveItem } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.scss']
})

export class TodoListItemsComponent implements OnInit {
  todoList: Observable<Todo[]>;

  constructor(private store: Store<{ todoList: Todo[] }>) {
    this.todoList = store.pipe(select('todoList'));
  }

  ngOnInit() {
  }

  RemoveItem(itemIndex) {
    this.store.dispatch(new RemoveItem(itemIndex));
  }

}

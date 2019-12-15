import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { Store, select } from '@ngrx/store';
import { AddItem } from '../actions/todo.actions';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  todoList: Observable<Todo[]>;

  constructor(private store: Store<{todoList: Todo[]}>) {
    this.todoList = store.pipe(select('todoList'));
   }

  ngOnInit() {
  }
  
  AddItem(taskName: string) {
    const todoListItem = new Todo();
    todoListItem.taskName = taskName;

    this.store.dispatch(new AddItem(todoListItem));
  }

}


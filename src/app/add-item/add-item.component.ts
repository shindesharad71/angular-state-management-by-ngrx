import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../models/todo";
import { Store, select } from "@ngrx/store";
import { AddItem } from "../actions/todo.actions";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.scss"]
})
export class AddItemComponent implements OnInit {
  todoList: Observable<Todo[]>;
  listItemName = "";

  constructor(private store: Store<{ todoList: Todo[] }>) {
    this.todoList = store.pipe(select("todoList"));
  }

  ngOnInit() {}

  AddItem() {
    if (this.listItemName.length) {
      const todoListItem = new Todo();
      todoListItem.taskName = this.listItemName;
      this.listItemName = "";

      this.store.dispatch(new AddItem(todoListItem));
    }
  }
}

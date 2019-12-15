import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Todo } from "../models/todo";
import { Store, select } from "@ngrx/store";

@Component({
  selector: "app-ngrx-states-logger",
  templateUrl: "./ngrx-states-logger.component.html",
  styleUrls: ["./ngrx-states-logger.component.scss"]
})
export class NgrxStatesLoggerComponent implements OnInit, OnDestroy {
  
  storeSubscription: Subscription;
  storeStates = [];
  language = 'json';
  
  constructor(private store: Store<{ todoList: Todo[] }>) {
    this.storeSubscription = this.store.subscribe(
      res => {
        this.storeStates.push(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {}

  stringify(item) {
    return JSON.stringify(item);
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }
}

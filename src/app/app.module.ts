import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PrismModule } from '@ngx-prism/core';

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { TodoReducer } from "../app/reducers/todo.reducer";
import { TodoListItemsComponent } from "./todo-list-items/todo-list-items.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { NgrxStatesLoggerComponent } from './ngrx-states-logger/ngrx-states-logger.component';

@NgModule({
  declarations: [AppComponent, TodoListItemsComponent, AddItemComponent, NgrxStatesLoggerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    PrismModule,
    StoreModule.forRoot({ todoList: TodoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

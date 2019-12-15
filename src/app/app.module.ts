import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { TodoReducer } from '../app/reducers/todo.reducer';
import { TodoListItemsComponent } from './todo-list-items/todo-list-items.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListItemsComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todoList: TodoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

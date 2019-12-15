import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { TodoReducer } from '../app/reducers/todo.reducer';
import { TodoListItemsComponent } from './todo-list-items/todo-list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListItemsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todo: TodoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

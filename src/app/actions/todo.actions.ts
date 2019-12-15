import { Action } from '@ngrx/store';

export enum TodoActionTypes {
    Add = '[Todo Component] Add',
    Remove = '[Todo Component] Remove'
}

export class ActionEx implements Action {
    readonly type;
    payload: any;
}

export class AddItem implements ActionEx {
    readonly type = TodoActionTypes.Add;
    constructor(public payload: any) {        
    }
}

export class RemoveItem implements ActionEx {
    readonly type = TodoActionTypes.Remove;
    constructor(public payload: any) {
    }
  }
import { ActionEx, TodoActionTypes } from '../actions/todo.actions';

export const initialState = [];

export function TodoReducer(state = initialState, action: ActionEx) {
    switch (action.type) {
        case TodoActionTypes.Add:
            return [...state, action.payload];
        case TodoActionTypes.Remove:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];
        default:
            return state;
    }
}
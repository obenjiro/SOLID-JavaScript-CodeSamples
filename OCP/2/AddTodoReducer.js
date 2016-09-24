import { BaseReducer } from './BaseReducer'
import { ReducerPool } from './ReducerPool'
import { ADD_TODO } from '../constants/TodoActionTypes'

export class AddTodoReducer extends BaseReducer {
    getNewState(state, action) {
        if (action.type == ADD_TODO) {
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }, 
                ...state
            ]
        } else {
            return state;
        }
    }
}

ReducerPool.register(new AddTodoReducer());
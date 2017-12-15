import { combineReducers } from 'redux'
import { SET_STACK, LOAD_STACKS, ADD_STACK } from '../actions'

// by setting a parameter to an empty object, we are changing the default return from 'undefined' to '{}'
function stack(currentReduxState = {}, action) {
    switch (action.type) {
        case SET_STACK:
            return action.stack
        default:
            return currentReduxState
    }
}

// currentReduxState is instantiated as an array here due to the stack of cards itself being an array.
function stacks(currentReduxState = [], action) {
    switch(action.type) {
        case LOAD_STACKS:
            return action.stacks
        case ADD_STACK:
            return [...currentReduxState,{ ...action.stack, id: currentReduxState.length }]
         default:
            return currentReduxState
    }
}

export default combineReducers({ stack, stacks })
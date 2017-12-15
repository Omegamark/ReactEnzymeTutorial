export const SET_STACK = 'SET_STACK'
export const LOAD_STACKS = 'LOAD_STACKS'
export const ADD_STACK = 'ADD_STACK'

// This function is called an action creater function
export function setStack (stack) {
    // This is one way to return the action
    /* 
    const action = {
        type: 'SET_STACK',
        stack: stack
    }
    return action
    */
    // This is another
    return {
        type: SET_STACK,
        stack
    }
}

export function loadStacks(stacks) {
    return {
        type: LOAD_STACKS,
        stacks
    }
}

export function addStack(stack) {
    return {
        type: ADD_STACK,
        stack               // stack: stack
    }
}
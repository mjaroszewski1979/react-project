import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle() {
            showCounter = !state.showCounter;
        }
    }
});


export default counterSlice;
export const counterActions = counterSlice.actions;

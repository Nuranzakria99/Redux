import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },

  //it is not accsess in Reactjs directly to mutinting the state but in redux toolkit there's immer libarary do that
  incremant: (state) => {
    state.value += 1;
  },
  descremant: (state) => {
    state.value -= 1;
  },
});

export const {incremant , descremant} = counterSlice.actions
export default counterSlice.reducer


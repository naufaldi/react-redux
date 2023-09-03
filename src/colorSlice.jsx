import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: 'color',
  initialState: { value: false },
  reducers: {
    changeColor: (state) =>{
      // merubah color dari true ke false/ false ke true depends on state
      state.value = !state.value;
    }
  }
})

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  headerText: string;
  footerText: string;
}
const initialState: UIState = {
  headerText: "Default",
  footerText: "Default",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      const text = action.payload || "Default";
      state.headerText = text;
      state.footerText = text;
    },
  },
});

export const { setText } = uiSlice.actions;

export default uiSlice.reducer

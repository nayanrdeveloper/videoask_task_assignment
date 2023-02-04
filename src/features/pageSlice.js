import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  welcomePage: true,
  campaignPage: false,
  thirdChoicePage: false,
  webinarPage: false,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    pageChange: (state, action) => {
      Object.keys(state).forEach((key) => {
        if (action.payload.page === key) {
          state[key] = true;
        } else {
          state[key] = false;
        }
      });
    },
  },
});

export const { pageChange } = pageSlice.actions;

export const pages = (state) => state.page;

export default pageSlice.reducer;

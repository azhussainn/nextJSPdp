import { createSlice } from "@reduxjs/toolkit";
import { getInitialCategoryData } from "@components/pdp/utils";

const initialState = {
  data: null,
  initialChoices: null,
};


const pdpSlice = createSlice({
  name: "pdp",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.initialChoices = getInitialCategoryData(action.payload.basic_details)
    },
    setCustomizeData: (state, action) => {
        state.initialChoices = action.payload.choicesData
        state.data = {
                ...state.data,
                basic_details: {
                  ...state.data.basic_details,
                  ...action.payload.basic_details
                },
                product_details: {
                  ...state.data.product_details,
                  ...action.payload.product_details
            },
        }
    },
  },
});

export const { setData, setCustomizeData } = pdpSlice.actions;
export default pdpSlice.reducer;

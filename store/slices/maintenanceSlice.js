import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
  maintenanceState: false,
};

// Actual Slice
export const maintenanceSlice = createSlice({
  name: "maintenance",
  initialState,
  reducers: {

    // Action to set the authentication status
    setmaintenanceState(state, action) {
      state.maintenanceState = action.payload;
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.maintenance,
        };
      },
    },

  },
});

export const { setmaintenanceState } = maintenanceSlice.actions;

export const selectmaintenanceState = (state) => state.maintenance.maintenanceState;

export default maintenanceSlice.reducer;
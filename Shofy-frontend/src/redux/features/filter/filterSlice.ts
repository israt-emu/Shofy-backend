import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  path: "/dashboard/seller",
  category: "",
  subCategory: "",
};
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searched: (state, action) => {
      state.searchText = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSubCategory: (state, action) => {
      state.subCategory = action.payload;
    },

    pathChange: (state, action) => {
      state.path = action.payload;
    },
    resetSearch: (state) => {
      state.searchText = "";
    },
  },
});

export const {searched, pathChange, resetSearch, setCategory, setSubCategory} = filterSlice.actions;
export default filterSlice.reducer;

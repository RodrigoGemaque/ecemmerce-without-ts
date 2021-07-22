import { createSlice } from '@reduxjs/toolkit';


const categorySlice = createSlice({
  name: 'category',
  initialState: null,
  reducers: {
    setCategoryToEdit(state, action) {
      return state = action.payload;
    },
    clearCategoryToEdit(state) {
      return state = null;
    }
  }
})

export const { setCategoryToEdit, clearCategoryToEdit } = categorySlice.actions;
export default categorySlice.reducer;
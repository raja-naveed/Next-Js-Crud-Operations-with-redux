// UserReducer.jsx
import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../data/data";

const userSlice = createSlice({
  name: "user",
  initialState: Data,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id == id);
      if (existingUser) {
        // Use immer to ensure immutability
        existingUser.name = name;
        existingUser.email = email;
      }
    },
      deleteUser: (state, action) => {
        const { id } = action.payload;
        const existingUser = state.find((user) => user.id == id);
        if (existingUser) {
          return state.filter((user) => user.id !== id);
        }          
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;

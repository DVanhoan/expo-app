import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Auth {
  id: number;
  text: string;
}

interface AuthsState {
  list: Auth[];
}

const initialState: AuthsState = {
  list: [],
};

const authSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      const newTodo: Auth = {
        id: Date.now(),
        text: action.payload,
      };
      state.list.push(newTodo);
    },
    signup: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { login, signup } = authSlice.actions;
export default authSlice.reducer;

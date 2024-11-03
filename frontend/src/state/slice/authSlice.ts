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

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Auth = {
        id: Date.now(),
        text: action.payload,
      };
      state.list.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;

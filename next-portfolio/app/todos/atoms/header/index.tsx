"use client";

import { useAppDispatch } from "~/lib/store/hooks";
import TodoTextInput from "../todo-text-input";
import { addTodo } from "~/lib/features/todos/slice";

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <TodoTextInput
        newTodo
        onSave={(text: string) => {
          if (text.length !== 0) {
            dispatch(addTodo({ text }));
          }
        }}
        placeholder="What needs to be done?"
      />
    </div>
  );
};

export default Header;

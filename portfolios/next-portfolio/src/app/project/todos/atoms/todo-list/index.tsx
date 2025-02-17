import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useAppSelector } from "~/lib/store/hooks";
import { getVisibleTodos } from "../../selectors";
import TodoItem from "../todo-item";
import styles from "./styles.module.css";

const TodoList = () => {
  const filteredTodos = useAppSelector(getVisibleTodos);

  const prefersReducedMotion = useReducedMotion();

  return (
    <ul className={styles.todoList}>
      <AnimatePresence initial={false}>
        {filteredTodos.map((todo) => (
          <motion.div
            key={todo.id}
            className="grid transition-[grid-template-rows]"
            initial={{
              gridTemplateRows: prefersReducedMotion ? "1fr" : "0fr",
            }}
            animate={{
              gridTemplateRows: "1fr",
            }}
            exit={{
              gridTemplateRows: prefersReducedMotion ? "1fr" : "0fr",
            }}
            transition={{
              type: "spring",
              duration: prefersReducedMotion ? 0 : 0.3,
              ease: "easeInOut",
            }}
          >
            <div className="overflow-hidden">
              <TodoItem todo={todo} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;

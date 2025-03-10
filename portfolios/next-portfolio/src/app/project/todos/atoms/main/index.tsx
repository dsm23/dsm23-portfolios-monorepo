"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  clearCompleted,
  completeAllTodos,
  getTodos,
} from "~/lib/features/todos/slice";
import { useAppDispatch, useAppSelector } from "~/lib/store/hooks";
import { getCompletedTodoCount } from "../../selectors";
import Footer from "../footer";
import VisibleTodoList from "../todo-list";
import styles from "./styles.module.css";

const MainSection = () => {
  const dispatch = useAppDispatch();
  const completedCount = useAppSelector(getCompletedTodoCount);
  const todos = useAppSelector(getTodos);

  const todosCount = todos.length;

  const handleClick = () => dispatch(completeAllTodos());

  const handleClearCompleted = () => dispatch(clearCompleted());

  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={styles.main}>
      {!!todosCount && (
        <span>
          <input
            className={styles.toggleAll}
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={handleClick} />
        </span>
      )}
      <VisibleTodoList />
      <AnimatePresence initial={false}>
        {!!todosCount && (
          <motion.div
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
              <Footer
                completedCount={completedCount}
                activeCount={todosCount - completedCount}
                onClearCompleted={handleClearCompleted}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MainSection;

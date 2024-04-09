import Main from "~/components/main";
import GoBack from "~/components/styled-go-back";
import ViewSource from "~/components/view-source";
import Header from "./atoms/header";
import MainSection from "./atoms/main";

import styles from "./styles.module.css";
import Anchor from "~/components/anchor";

const Todos = () => (
  <Main className="w-full px-6 py-8">
    <GoBack className="mb-4" href="/#projects" />
    <ViewSource pathname="app/todos/page.tsx" />

    <h1 className="text-4xl uppercase tracking-widest text-sky-600">Todomvc</h1>

    <p>
      Refactored from the todomvc{" "}
      <Anchor href="https://github.com/reduxjs/redux/tree/master/examples/todomvc">
        redux example
      </Anchor>{" "}
      with reducers and actions replaced with the modern slices pattern.
    </p>

    <div className="mx-auto max-w-[550px]">
      <div className={styles.todoapp}>
        <Header />
        <MainSection />
      </div>

      <p className="text-center leading-none">Double-click to edit a todo</p>
    </div>
  </Main>
);

export default Todos;

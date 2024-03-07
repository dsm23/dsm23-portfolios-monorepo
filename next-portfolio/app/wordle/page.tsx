// "use client";

import { Fragment, useEffect, useState } from "react";
import { cookies } from "next/headers";
import cx from "clsx";
import { Confetti } from "@neoconfetti/react";
import Main from "~/components/main";
import StyledGoBack from "~/components/styled-go-back";

import styles from "./styles.module.css";
import { createPageData } from "./actions";

const Wordle = () => {
  createPageData();

  const [index, guesses, answers] = serialized.split("-");

  const [guesses, setGuesses] = useState(["", "", "", "", "", ""]);
  const [answers, setAnswers] = useState([]);

  const answer =
    answers.length >= 6
      ? words[Math.floor(Math.random() * words.length)]
      : null;

  useEffect(() => {});

  const won = answers.at(-1) === "xxxxx";

  const i = won ? -1 : answers.length;

  const currentGuess = guesses[i] || "";

  const submittable = currentGuess.length === 5;

  // let classnames: Record<string, "exact" | "close" | "missing">;

  async function update(prevState: any, formData: any) {
    "use server";

    const data = await formData();
    const key = data.get("key");

    const i = answers.length;

    if (key === "backspace") {
      guesses[i] = guesses[i].slice(0, -1);
    } else {
      guesses[i] += key;
    }

    // cookies.set('wordle', game.toString(), { path: '/' });
  }

  // const [won, setWon] = useState(false);

  return (
    <Main className="w-full px-6 py-8">
      <StyledGoBack className="mb-4" href="/#projects" />

      <h1 className="text-4xl uppercase tracking-widest text-sky-600">
        Wordle
      </h1>
      <p>A port of the Sverdle example that come in the SvelteKit template</p>

      <form
        className={styles.form}
        method="POST"
        action="?/enter"
        // use:enhance={() => {
        // 	// prevent default callback from resetting the form
        // 	return ({ update }) => {
        // 		update({ reset: false });
        // 	};
        // }}
      >
        <div
          className={cx(styles.grid, {
            [styles.playing]: !won,
            //  "bad-guess": form?.badGuess
          })}
        >
          {Array.from({ length: 6 }, (_, i) => i).map((row) => {
            const current = row === i;

            return (
              <Fragment key={`game-row-${row}`}>
                <h2 className="sr-only">Row {row + 1}</h2>
                <div
                  className={cx(styles.row, {
                    [styles.current]: current,
                  })}
                >
                  {Array.from({ length: 5 }, (_, i) => i).map((column) => {
                    const guess = current ? currentGuess : guesses[row];
                    const answer = answers[row]?.[column];
                    const value = guess?.[column] ?? "";
                    const selected = current && column === guess.length;
                    const exact = answer === "x";
                    const close = answer === "c";
                    const missing = answer === "_";

                    return (
                      <div
                        key={`game-${row}-${column}`}
                        className={cx(styles.letter, {
                          [styles.exact]: exact,
                          [styles.close]: close,
                          [styles.missing]: missing,
                          [styles.selected]: selected,
                        })}
                      >
                        {value}
                        <span className="sr-only">
                          {exact
                            ? "(correct)"
                            : close
                              ? "(present)"
                              : missing
                                ? "(absent)"
                                : "empty"}
                        </span>
                        <input
                          name="guess"
                          disabled={!current}
                          type="hidden"
                          value={value}
                        />
                      </div>
                    );
                  })}
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className="controls">
          {won || answers.length >= 6 ? (
            <>
              {!won && answer && <p>the answer was "{answer}"</p>}
              <button
                data-key="enter"
                className={cx(styles.restart, styles.selected)}
                formaction="?/restart"
              >
                {won ? "you won :)" : `game over :(`} play again?
              </button>
            </>
          ) : (
            <div className={styles.keyboard}>
              <button
                data-key="enter"
                disabled={!submittable}
                className={cx({
                  [styles.selected]: submittable,
                })}
              >
                enter
              </button>

              <button
                onClick={update}
                data-key="backspace"
                // formaction="?/update"
                name="key"
                value="backspace"
              >
                back
              </button>

              {["qwertyuiop", "asdfghjkl", "zxcvbnm"].map((row) => (
                <div className={styles.row} key={`row-${row}`}>
                  {row.split("").map((letter) => (
                    <button
                      // onClick={update}
                      key={`letter-${letter}`}
                      data-key={letter}
                      className={cx(letter)}
                      // disabled={submittable}
                      // formaction="?/update"
                      name="key"
                      value={letter}
                      // aria-label={`${letter} ${description[letter] || ''}`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </form>

      {won && <Confetti force={0.7} />}
    </Main>
  );
};

export default Wordle;

"use server";

import { cookies } from "next/headers";
import { words } from "~/utils/words";

export async function createPageData() {
  const serialized = cookies().get("wordle");

  let index: number;
  let guesses: string[];
  let answers: string[];

  if (serialized) {
    const foo = serialized.value.split("-");

    index = Number(foo[0]);
    guesses = foo[1].split(" ") ?? [];
    answers = foo[2].split(" ") ?? [];
  } else {
    index = Math.floor(Math.random() * words.length);
    guesses = ["", "", "", "", "", ""];
    answers = [];
  }

  const answer = words[index];

  return {
    index,
    guesses,
    answers,
    answer,
  };
}

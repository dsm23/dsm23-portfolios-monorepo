"use client";

import { useId, useMemo, useState } from "react";
import type { ChangeEventHandler } from "react";
import { Input, Label, Main, StyledGoBack, ViewSource } from "~/components";
import { cn } from "~/utils";

const Page = () => {
  const id = useId();
  const [limit, setLimit] = useState(100);
  const [targetNumber, setTargetNumber] = useState<number | null>(null);

  const nums = useMemo(
    () =>
      Array.from({ length: limit }, (_, i) => i + 1).sort(
        () => Math.random() - 0.5,
      ),
    [limit],
  );

  const divisibleNumbers = nums.filter((num) =>
    targetNumber ? targetNumber % num === 0 : false,
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLimit(Number(event.target.value));
  };

  const handleMouseOver = (newNumber: number) => () => {
    setTargetNumber(newNumber);
  };

  const handleMouseOut = () => {
    setTargetNumber(null);
  };

  return (
    <Main className="w-full px-6 py-8">
      <StyledGoBack className="mb-4" href="/#projects" />
      <ViewSource pathname="app/divisibles/page.tsx" />

      <h1 className="text-4xl uppercase tracking-widest text-sky-600">
        Divisibles
      </h1>
      <p>
        Enter a number equal or greater than 1 and 1 to N blocks will appear in
        a random order. Hover over a block to see which numbers are its divisors
        or whether that number is prime.
      </p>

      <form className="mt-8">
        <Label>Enter a number</Label>

        <Input
          id={id}
          className="mb-8"
          type="number"
          value={limit}
          min={1}
          onChange={handleChange}
        />

        <output className={cn("ml-4", { invisible: !targetNumber })}>
          <span className="font-semibold">{targetNumber}</span>{" "}
          {divisibleNumbers.length === 2 ? "is" : "is not"} a prime number
        </output>
      </form>

      <div className="flex flex-wrap text-white">
        {nums.map((num) => (
          <div
            className={cn(
              "m-3 bg-slate-700 p-3 transition-colors duration-200",
              {
                "bg-red-600": divisibleNumbers.includes(num),
              },
            )}
            key={`number-${num}`}
            onMouseOver={handleMouseOver(num)}
            onMouseOut={handleMouseOut}
          >
            <span className="block min-w-[2ch] text-center">{num}</span>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default Page;
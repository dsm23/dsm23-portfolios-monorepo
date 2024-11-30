"use client";

import { ChangeEventHandler, useId, useState } from "react";
import { useAsync, useDebounce, useLocalStorage } from "react-use";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/card";
import Input from "~/components/input";
import Label from "~/components/label";
import MagnifyingGlass from "~/components/svgs/magnifying-glass";
import ThreeDots from "~/components/svgs/three-dots";
import { cn, sleep } from "~/utils";

type Animal = {
  id: number;
  type: string;
  age: number;
  name: string;
};

const fetcher = async (query?: string) => {
  const response = await fetch(
    query ? "/api/animals?" + new URLSearchParams({ query }) : "/api/animals",
  );
  const data = await response.json();

  return data.animals as Animal[];
};

const Animals = () => {
  const id = useId();
  const [query, setQuery] = useLocalStorage<string>("lastQuery");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useDebounce(
    () => {
      setDebouncedQuery(query);
    },
    300,
    [query],
  );

  const { value: [animals] = [], loading } = useAsync(
    () => Promise.all([fetcher(debouncedQuery), sleep(250)]),
    [debouncedQuery],
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="mt-4">
      <Label htmlFor={id}>Animal</Label>
      <Input
        id={id}
        startIcon={<MagnifyingGlass />}
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />

      <div className="my-4 border-b-2 border-white" />

      <ThreeDots
        className={cn({
          invisible: !loading,
          visible: loading,
        })}
      />

      {animals?.length === 0 && <div>No animals found</div>}

      <ul className="space-y-4">
        {animals?.map((animal) => (
          <li key={animal.id}>
            <Card>
              <CardContent>
                <CardHeader>
                  <CardTitle>{animal.type}</CardTitle>
                  <CardDescription>
                    {animal.name} ({animal.age} years old)
                  </CardDescription>
                </CardHeader>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Animals;

"use client";

import { ChangeEventHandler } from "react";
import { useAsync, useLocalStorage } from "react-use";
import Input from "~/components/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/card";
import Label from "~/components/label";
import { useId } from "react";
import MagnifyingGlass from "~/components/svgs/magnifying-glass";
import { cn, sleep } from "~/utils";
import ThreeDots from "~/components/svgs/three-dots";

type Animal = {
  id: number;
  type: string;
  age: number;
  name: string;
};

const fetcher = async (query: string | undefined) => {
  const response = await fetch(
    query ? "/api/animals?" + new URLSearchParams({ query }) : "/api/animals",
  );
  const data = await response.json();

  return data.animals as Animal[];
};

const Animals = () => {
  const id = useId();
  const [query, setQuery] = useLocalStorage<string>("lastQuery");

  const { value: [animals] = [], loading } = useAsync(
    () => Promise.all([fetcher(query), sleep(250)]),
    [query],
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

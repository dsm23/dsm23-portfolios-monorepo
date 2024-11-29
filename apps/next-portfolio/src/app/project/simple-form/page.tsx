"use client";

import type { ChangeEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AsYouType } from "libphonenumber-js/min";
import { toast } from "sonner";
import Anchor from "~/components/anchor";
import Button from "~/components/button";
import Checkbox from "~/components/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/form";
import Input from "~/components/input";
import Main from "~/components/main";
import { RadioGroup, RadioGroupItem } from "~/components/radio";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/select";
import GoBack from "~/components/styled-go-back";
import Textarea from "~/components/textarea";
import Toaster from "~/components/toast";
import ViewSource from "~/components/view-source";
import DatePicker from "./date-picker";
import schema from "~/utils/schema";
import sleep from "~/utils/sleep";

type Values = z.infer<typeof schema>;

const Page = () => {
  const form = useForm<Values>({
    defaultValues: {
      firstName: "",
      lastName: "",
      employed: false,
      toppings: [],
      sauces: [],
      phoneNumber: "",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const { control, formState, handleSubmit, reset, watch } = form;

  const { errors, isSubmitting } = formState;

  const onSubmit: SubmitHandler<Values> = async (values) => {
    toast.promise(sleep(3000), {
      loading: "Loading..., (not actually doing anything)",
      success: () => (
        <pre className="mt-2 w-[340px] rounded-md p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
      error: "Error",
    });

    await sleep(9000);
  };

  const items = [
    {
      id: "ketchup",
      label: "Ketchup",
    },
    {
      id: "mustard",
      label: "Mustard",
    },
    {
      id: "mayonnaise",
      label: "Mayonnaise",
    },
    {
      id: "guacamole",
      label: "Guacamole",
    },
  ] as const;

  return (
    <Main className="w-full px-6 py-8">
      <GoBack className="mb-4" href="/#projects" />
      <ViewSource pathname="app/project/simple-form/page.tsx" />

      <h1 className="text-4xl uppercase tracking-widest text-sky-600">
        Simple form example
      </h1>
      <p>
        An example of a simple form using{" "}
        <Anchor
          href="https://react-hook-form.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-hook-form
        </Anchor>{" "}
        and{" "}
        <Anchor
          href="https://ui.shadcn.com/docs/components/form"
          target="_blank"
          rel="noopener noreferrer"
        >
          shadcn/ui
        </Anchor>
      </p>

      <div className="container mx-auto">
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is just a description for test purposes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is just a description for test purposes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="employed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Employed</FormLabel>
                    <FormDescription>
                      This is just a description for test purposes.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="favoriteColour"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Favourite Colour</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a colour" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="#ff0000">❤️ Red</SelectItem>
                      <SelectItem value="#00ff00">💚 Green</SelectItem>
                      <SelectItem value="#0000ff">💙 Blue</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    This is just a description for test purposes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="toppings"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Toppings</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      multiple
                      onChange={(event) =>
                        event.target.selectedOptions != null
                          ? field.onChange(
                              [...event.target.selectedOptions].map(
                                (opt) => opt.value,
                              ),
                            )
                          : field.onChange([])
                      }
                    >
                      <option value="chicken">🐓 Chicken</option>
                      <option value="ham">🐷 Ham</option>
                      <option value="mushrooms">🍄 Mushrooms</option>
                      <option value="cheese">🧀 Cheese</option>
                      <option value="tuna">🐟 Tuna</option>
                      <option value="pineapple">🍍 Pineapple</option>
                    </select>
                  </FormControl>
                  <FormDescription>
                    This is just a description for test purposes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="sauces"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Sauces</FormLabel>
                    <FormDescription>Select any sauces</FormDescription>
                  </div>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={control}
                      name="sauces"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked != null
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="stooge"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Best stooge</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="larry" />
                        </FormControl>
                        <FormLabel className="font-normal">Larry</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="moe" />
                        </FormControl>
                        <FormLabel className="font-normal">Moe</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="curly" />
                        </FormControl>
                        <FormLabel className="font-normal">Curly</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* https://viclafouch.github.io/mui-tel-input/ */}

            <FormField
              control={control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        field.onChange(e.target.value.replace(/\s/g, ""))
                      }
                      value={new AsYouType("GB").input(field.value)}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter a telephone number, like 01632 960001, 020 7946 0001
                    or +44 808 157 0192
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of birth</FormLabel>

                  <DatePicker
                    selected={field.value}
                    onDayClick={field.onChange}
                    disabled={(date: Date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />

                  <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormDescription>
                    This is just a description for test purposes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <pre>{JSON.stringify(watch(), null, 2)}</pre>

            <pre>{JSON.stringify(errors, null, 2)}</pre>

            <div className="mb-8 flex space-x-4">
              <Button type="button" variant="outline" onClick={() => reset()}>
                Reset
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
      <Toaster richColors />
    </Main>
  );
};

export default Page;

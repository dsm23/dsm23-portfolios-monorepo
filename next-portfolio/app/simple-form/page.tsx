"use client";

import { FormProvider, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Button,
  Checkbox,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Main,
  RadioGroup,
  RadioGroupItem,
  StyledGoBack,
  Textarea,
  Toaster,
} from "~/components";
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
        <pre className="mt-2 w-[340px]  rounded-md  p-4">
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
      <StyledGoBack className="mb-4" href="/#projects" />

      <h1 className="text-4xl uppercase tracking-widest text-sky-600">
        Simple form example
      </h1>
      <p>An example of a simple form using react-hook-form and shadcn/ui</p>

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
                  <FormControl>
                    <select {...field}>
                      <option value="#ff0000">❤️ Red</option>
                      <option value="#00ff00">💚 Green</option>
                      <option value="#0000ff">💙 Blue</option>
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
                    <FormLabel className="text-base">Sidebar</FormLabel>
                    <FormDescription>
                      Select the items you want to display in the sidebar.
                    </FormDescription>
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
                  <FormLabel>Notify me about...</FormLabel>
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
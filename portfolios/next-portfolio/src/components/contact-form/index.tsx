"use client";

import { useEffect, useState } from "react";
import type { FunctionComponent } from "react";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/form";
import Input from "~/components/input";
import ThreeDots from "~/components/svgs/three-dots";
import Textarea from "~/components/textarea";
import { cn, sleep } from "~/utils";
import { send } from "./action";

const ContactForm: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen(!open);
  };

  const prefersReducedMotion = useReducedMotion();

  const dropIn = {
    hidden: {
      y: prefersReducedMotion ? "0" : "4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: prefersReducedMotion
        ? {}
        : {
            duration: 0.2,
            type: "stiff",
            damping: 25,
          },
    },
    exit: {
      y: prefersReducedMotion ? "0" : "4vh",
      opacity: 0,
    },
  } as const;

  const schema = z.object({
    email: z
      .string()
      .email({
        message: "Please enter a valid email address",
      })
      .min(1, {
        message: "Oops! Email cannot be empty",
      }),
    message: z.string().min(1, {
      message: "Oops! Message cannot be empty",
    }),
  });

  type Values = z.infer<typeof schema>;

  const form = useForm<Values>({
    defaultValues: {
      email: "",
      message: "",
    },
    resolver: zodResolver(schema),
  });

  const { control, formState, handleSubmit, resetField } = form;

  const { isSubmitting, isSubmitSuccessful } = formState;

  useEffect(() => {
    resetField("email");
    resetField("message");
  }, [isSubmitSuccessful, open, resetField]);

  const onSubmit: SubmitHandler<Values> = async (values) => {
    await Promise.all([sleep(300), send(values)]);
  };

  return (
    <div className="fixed bottom-10 right-4 z-[99999] flex flex-col items-end md:right-10">
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            key="contact-animate"
            className="mx-4 mb-4 flex flex-col overflow-hidden rounded-xl bg-zinc-800 shadow-2xl md:mx-0"
          >
            <div className="bg-zinc-700 p-4">
              <h2 className="text-sm font-bold text-zinc-200 md:text-xl">
                Have a question? Drop in your message 👇
              </h2>
              <small className="mb-10 hidden text-xs text-zinc-400 md:block">
                It won{"'"}t take more than 10 seconds
              </small>
            </div>
            <div className="content flex flex-col bg-zinc-800 p-6">
              <FormProvider {...form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-200">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="mb-1 rounded-md border border-zinc-700 bg-zinc-800 px-2 py-1 text-zinc-400 placeholder:text-sm focus:border-gray-400 focus:outline-none"
                            placeholder="johndoe@xyz.com"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mt-4">
                        <FormLabel className="text-zinc-200">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="mb-1 rounded-md border border-zinc-700 bg-zinc-800 px-2 py-1 text-zinc-400 placeholder:text-sm focus:border-gray-400 focus:outline-none"
                            rows={3}
                            placeholder="I'd love a compliment from you."
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button className="mb-4 mt-8 grid w-full grid-cols-[1fr,_min-content,_1fr] justify-center gap-x-3 rounded-md border-2 border-zinc-800 bg-zinc-700 px-4 py-2 text-sm font-normal text-zinc-100 transition duration-200 hover:shadow-none md:py-4">
                    <span className="col-start-2">Submit</span>
                    <ThreeDots
                      className={cn("size-5", {
                        visible: isSubmitting,
                        invisible: !isSubmitting,
                      })}
                    />
                  </button>
                  <small className="mb-4 h-4 min-h-4">
                    {isSubmitSuccessful && (
                      <p className="text-sm font-semibold text-green-500">
                        Success
                      </p>
                    )}
                  </small>
                </form>
              </FormProvider>
            </div>
          </motion.div>
        )}
        <button
          onClick={handleButtonClick}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-700 shadow-lg transition duration-200 hover:scale-105 hover:shadow-xl"
        >
          <span className="sr-only">Contact form</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-zinc-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </button>
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;

"use client";

import { useTheme } from "next-themes";
import type { ComponentProps, FunctionComponent } from "react";
import { Toaster as Sonner } from "sonner";

type Props = ComponentProps<typeof Sonner>;

const Toaster: FunctionComponent<Props> = (props) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as Props["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export default Toaster;

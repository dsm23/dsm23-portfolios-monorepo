"use client";

import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import Main from "~/components/main";

type ToasterProps = ComponentProps<typeof Sonner>;

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  const { theme = "system" } = useTheme();

  return (
    <Main className="w-full px-6 py-8">
      {children}

      <Sonner
        theme={theme as ToasterProps["theme"]}
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
        richColors
      />
    </Main>
  );
};

export default Layout;

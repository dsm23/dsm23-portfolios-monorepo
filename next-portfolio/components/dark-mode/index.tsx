"use client";

import type { ComponentPropsWithoutRef, FunctionComponent } from "react";
import { useTheme } from "next-themes";
import { Content, Root } from "@radix-ui/react-dropdown-menu";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Moon,
  Sun,
} from "~/components";

type Props = Omit<ComponentPropsWithoutRef<typeof Root>, "children"> & {
  align?: ComponentPropsWithoutRef<typeof Content>["align"];
};

const DarkMode: FunctionComponent<Props> = ({ align = "center", ...props }) => {
  const { setTheme } = useTheme();

  const handleTheme = (theme: string) => () => setTheme(theme);
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuItem onClick={handleTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={handleTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DarkMode;

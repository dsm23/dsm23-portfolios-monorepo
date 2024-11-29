"use client";

import { useEffect, useState } from "react";
import type { ComponentPropsWithoutRef, FunctionComponent } from "react";
import { useTheme } from "next-themes";
import { Content, Root } from "@radix-ui/react-dropdown-menu";
import Button from "~/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "~/components/dropdown";
import Laptop from "~/components/svgs/laptop";
import Moon from "~/components/svgs/moon";
import Sun from "~/components/svgs/sun";

type Props = Omit<ComponentPropsWithoutRef<typeof Root>, "children"> & {
  align?: ComponentPropsWithoutRef<typeof Content>["align"];
};

const DarkMode: FunctionComponent<Props> = ({ align = "center", ...props }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <span className="sr-only">Theme switcher</span>
          {theme === "light" ? (
            <Sun key="light" className="size-5 text-muted-foreground" />
          ) : theme === "dark" ? (
            <Moon key="dark" className="size-5 text-muted-foreground" />
          ) : (
            <Laptop key="system" className="size-5 text-muted-foreground" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit" align={align}>
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(e) => setTheme(e)}
        >
          <DropdownMenuRadioItem className="flex gap-2" value="light">
            <Sun className="size-5 text-muted-foreground" /> <span>Light</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="dark">
            <Moon className="size-5 text-muted-foreground" /> <span>Dark</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="system">
            <Laptop className="size-5 text-muted-foreground" />{" "}
            <span>System</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DarkMode;

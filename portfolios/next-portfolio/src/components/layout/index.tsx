"use client";

import { useState } from "react";
import type { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import { Person } from "@repo/generated";
import { layoutStyles as styles } from "@repo/shared-styles";
import DarkModeToggle from "~/components/dark-mode-toggle";
import Nav from "~/components/nav";
import { cn } from "~/utils";

type Props = {
  children: ReactNode;
  profilePic: Person;
};

const Layout: FunctionComponent<Props> = ({ children, profilePic }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((open) => !open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const items = [
    "home",
    "experience",
    "education",
    "skills",
    "projects",
    "interests",
    "download",
  ];

  return (
    <div className="flex w-full flex-col font-sans lg:flex-row">
      <header className="contents">
        <Nav
          open={open}
          profilePic={profilePic}
          onExpandCollapse={handleToggle}
          onClose={handleClose}
        >
          <div className="block w-full text-gray-400 md:ml-auto md:flex md:w-auto md:items-center lg:block">
            {items.map((label) => (
              <Link
                href={`/#${label}`}
                key={`sidebar-${label}`}
                className={cn(
                  styles.navLink,
                  "group flex w-full items-center justify-start rounded py-2 uppercase hover:bg-gray-900 hover:text-white focus:outline-none lg:justify-center",
                )}
                onClick={handleClose}
              >
                <span
                  className={cn(
                    styles.navSpan,
                    "px-px py-px text-gray-400 group-focus:bg-yellow-500 group-focus:text-gray-900 lg:px-0.5",
                  )}
                >
                  {label}
                </span>
              </Link>
            ))}

            <div className="hidden w-full items-center rounded md:flex md:py-2 lg:justify-center">
              <DarkModeToggle />
            </div>
          </div>
        </Nav>
      </header>
      <div className="w-full">{children}</div>
    </div>
  );
};
export default Layout;

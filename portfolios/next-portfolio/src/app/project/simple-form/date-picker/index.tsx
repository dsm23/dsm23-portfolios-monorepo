"use client";

import type { FunctionComponent } from "react";
import type { PropsSingle } from "react-day-picker";
import { format } from "date-fns";
import Button from "~/components/button";
import CalendarDays from "~/components/svgs/calendar-days";
import { cn } from "~/utils";
import Calendar from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

type Props = Omit<PropsSingle, "selected" | "mode"> & {
  selected?: Date;
};

const DatePicker: FunctionComponent<Props> = ({ selected, ...props }) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={"outline"}
        className={cn("w-full justify-start text-left font-normal", {
          "text-muted-foreground": !selected,
        })}
      >
        <CalendarDays className="mr-2 h-4 w-4" />
        {selected ? format(selected, "PPP") : <span>Pick a date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0">
      <Calendar mode="single" selected={selected} {...props} />
    </PopoverContent>
  </Popover>
);

export default DatePicker;

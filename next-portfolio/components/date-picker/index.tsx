"use client";

import type { FunctionComponent } from "react";
import { format } from "date-fns";
import type { DayPickerSingleProps } from "react-day-picker";
import Button from "~/components/button";
import Calendar from "~/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/popover";
import { CalendarDays } from "~/components/svgs";
import { cn } from "~/utils";

type Props = Omit<DayPickerSingleProps, "selected" | "mode"> & {
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

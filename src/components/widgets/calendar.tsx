import React from "react";
import { Calendar as Cal } from "@/components/ui/calendar";

export function Calendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return <Cal mode="single" selected={date} onSelect={setDate} className="" />;
}

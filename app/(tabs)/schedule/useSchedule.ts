import { startOfDay } from "date-fns";
import { useState } from "react";

type useScheduleReturn = {
  selectedDate: Date,
  weekOffset: number,
  setSelectedDate: (date: Date) => void,
}

const useSchedule = (): useScheduleReturn => {
  const today = startOfDay(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [weekOffset, setWeekOffset] = useState<number>(0);

  return {
    selectedDate,
    weekOffset,
    setSelectedDate,
  };
};

export default useSchedule


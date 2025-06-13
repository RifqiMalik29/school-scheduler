import { addDays, startOfDay, startOfWeek } from "date-fns";
import useSchedule from "./useSchedule";

type Event = {
  id: string;
  title: string;
  room: string;
  startHour: number;
  duration: number;
  column: number;
  color: string;
};

export const ScheduleFunction = () => {
  const { weekOffset, selectedDate, setSelectedDate } = useSchedule();

  const events: Event[] = [
    {
      id: "1",
      title: "Org Mgt",
      room: "Room 101",
      startHour: 9,
      duration: 1,
      column: 0,
      color: "#FDBF5A",
    },
    {
      id: "2",
      title: "Financial Mgt",
      room: "Room 101",
      startHour: 9,
      duration: 4,
      column: 1,
      color: "#4D6CFA",
    },
    {
      id: "3",
      title: "Micro",
      room: "Room 101",
      startHour: 9,
      duration: 1,
      column: 2,
      color: "#C55FFC",
    },
    {
      id: "4",
      title: "Micro",
      room: "Room 101",
      startHour: 10,
      duration: 1,
      column: 3,
      color: "#C55FFC",
    },
  ];

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const maxColumn = Math.max(...events.map((e) => e.column));

  const today = startOfDay(new Date());

  const currentWeekStart = addDays(
    startOfWeek(today, { weekStartsOn: 1 }),
    weekOffset * 5
  );

  const selectActiveDate = (_date: Date) => {
    setSelectedDate(_date);
  };

  const days = Array.from({ length: 5 }, (_, i) => {
    const date = addDays(currentWeekStart, i); // start dari Senin (i + 1)
    return {
      key: i.toString(),
      date,
      tasks: i === 1 ? 3 : 0, // dummy
    };
  });

  return {
    hours,
    maxColumn,
    days,
    events,
    selectedDate,
    selectActiveDate,
  };
};

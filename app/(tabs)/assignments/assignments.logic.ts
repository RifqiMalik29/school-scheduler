import { format, isToday, isTomorrow } from "date-fns";

type TaskItem = {
  title: string;
  note: string;
  completed?: boolean;
};

type Assignment = {
  title: string;
  class: string;
  task: TaskItem[];
  date: string;
  color: string;
};

const AssignmentFunction = () => {
  const dummyData: Assignment[] = [
    {
      title: "Organization Management",
      class: "MGT 101",
      task: [
        {
          title: "Checklist title 1",
          note: "Note from checklist",
          completed: true,
        },
        {
          title: "Checklist title 2",
          note: "Note from checklist",
          completed: true,
        },
        {
          title: "Checklist title 3",
          note: "Note from checklist",
          completed: false,
        },
      ],
      date: "2025-06-15T17:00:00.000Z",
      color: "#FFC374",
    },
    {
      title: "Principles Macroeconomics",
      class: "EC 203",
      task: [
        {
          title: "Checklist title 4",
          note: "Note from checklist",
          completed: false,
        },
      ],
      date: "2025-06-15T17:00:00.000Z",
      color: "#4AD2C9",
    },
    {
      title: "Financial Management",
      class: "FN 215",
      task: [
        {
          title: "Checklist title 5",
          note: "Note from checklist",
          completed: false,
        },
      ],
      date: "2025-06-16T17:00:00.000Z",
      color: "#536EFF",
    },
  ];

  function groupByDate(assignments: Assignment[]) {
    const grouped: { [key: string]: Assignment[] } = {};

    assignments.forEach((item) => {
      const date = new Date(item.date);

      let key: string;

      if (isToday(date)) {
        key = `Today - ${format(date, "MMMM do, yyyy")}`;
      } else if (isTomorrow(date)) {
        key = `Tomorrow - ${format(date, "MMMM do, yyyy")}`;
      } else {
        key = format(date, "EEEE - MMMM do, yyyy");
      }

      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    });

    return grouped;
  }

  return {
    dummyData,
    groupByDate,
  };
};

export default AssignmentFunction;

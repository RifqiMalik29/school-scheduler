import { useState } from "react";

const useAssignmentForm = () => {
  const [isAllDay, setIsAllDay] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [detailForm, setDetailForm] = useState("");
  const [titleForm, setTitleForm] = useState("");

  return {
    isAllDay,
    isAlert,
    detailForm,
    titleForm,
    setIsAllDay,
    setIsAlert,
    setDetailForm,
    setTitleForm,
  };
};

export { useAssignmentForm };


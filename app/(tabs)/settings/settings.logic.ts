const SettingsFunction = () => {
  const dummyUserData = [
    {
      name: "Rifqi",
      fullname: "Rifqi Malik Iskandar",
      email: "rifqimalikiskandar@gmail.com",
    },
  ];

  const dummyClassessData = [
    {
      code: "EC 202",
      name: "Principles Microeconomics",
      color: "#C44EFB",
    },
    {
      code: "EC 203",
      name: "Principles Macroeconomics",
      color: "#4AD2C9",
    },
    {
      code: "FN 215",
      name: "Principal Management",
      color: "#536EFF",
    },
    {
      code: "MGT 101",
      name: "Organization Management",
      color: "#FFC374",
    },
  ];

  return {
    dummyClassessData,
    dummyUserData,
  };
};

export default SettingsFunction;

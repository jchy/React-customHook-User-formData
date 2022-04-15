import { useState } from "react";

const initState = {
  username: "",
  email: "",
  password: ""
};
export const useMerge = () => {
  const [state, setState] = useState(initState);
  return [state, setState];
};

import { useState } from "react";

export const useInputValidation = (initialState, validation) => {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState();
  const changeHandler = (e) => {
    const val = e?.target?.value;
    console.log({ val });
    setValue(val);
    if (validation) {
      const result = validation(val);
      if (result.isError) {
        setError(result.error);
      } else {
        setError("");
      }
    }
  };
  return { value, changeHandler, error, setValue };
};

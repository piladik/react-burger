import { useState } from "react";

function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues((currentState) => {
      const newState = {
        ...currentState,
        [name]: value,
      };
      return newState;
    });
  };

  return [values, handleChange, setValues];
}

export default useForm;

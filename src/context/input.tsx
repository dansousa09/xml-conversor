import { ChangeEvent, createContext, useContext, useState } from "react";
import inputs from "../utils/inputs";

const InputContext = createContext({
  inputSelected: 1,
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => { },
});


export const InputProvider = ({ children }) => {
  const [inputSelected, setInputSelected] = useState(inputs[0].id)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = inputs.find(input => input.value === event.target.value);
    console.log(input);
    setInputSelected(input.id);
  };

  return (
    <InputContext.Provider value={{ inputSelected, handleInputChange }}>
      {children}
    </InputContext.Provider>
  );
}

export const useInput = () => {
  const context = useContext(InputContext);

  return context;
}
import React, { useContext, useState } from "react";
import { actionTypes, AppContext } from "../contexts/appContext";
import { ReactComponent as CrossIcon } from "../images/icon-cross.svg";
import { v4 as uuidv4 } from "uuid";

const Input = () => {
  const [input, setInput] = useState("");

  const { dispatch } = useContext(AppContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    const newItem = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    dispatch({ type: actionTypes.ADD_ITEM, payload: newItem });
    setInput("");
  };

  return (
    <form className="relative " onSubmit={handleFormSubmit}>
      <div className="absolute w-5 h-5 transform -translate-y-1/2 border rounded-full md:w-6 md:h-6 border-lm-line dark:border-dm-line top-1/2 left-4"></div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Create a new todo.."
        className="inline-block w-full py-3 pr-12 border-none rounded-md outline-none pl-14 text-lm-text dark:text-dm-text md:text-lg bg-lm-secondry dark:bg-dm-secondary"
      />

      <button type="submit" className="hidden"></button>
      <CrossIcon
        className={`${
          input ? "" : "hidden"
        } absolute transform scale-75 -translate-y-1/2 cursor-pointer   top-1/2 right-4 `}
        onClick={() => setInput("")}
      />
    </form>
  );
};

export default Input;

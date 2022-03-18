import React, { useState } from "react";
import { ReactComponent as CrossIcon } from "../images/icon-cross.svg";

const TodoItem = ({ item, dispatch, actionTypes, provided }) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(item.text);

  const handleCheck = () => {
    setEdit(false);
    if (item.completed)
      dispatch({
        type: actionTypes.EDIT_ITEM,
        payload: { id: item.id, completed: false },
      });
    else
      dispatch({
        type: actionTypes.EDIT_ITEM,
        payload: { id: item.id, completed: true },
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    dispatch({
      type: actionTypes.EDIT_ITEM,
      payload: { id: item.id, text: input },
    });
  };

  return (
    <div
      className=" todo-item"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {/* CHECKBOX */}
      <input
        type="checkbox"
        className=" todo-item__checkbox"
        onChange={handleCheck}
        checked={item.completed ? true : false}
      />

      {/* TEXT */}
      {edit && !item.completed ? (
        <form className="w-5/6" onSubmit={handleFormSubmit}>
          <input
            className="inline-block w-full py-2 text-sm break-words outline-none resize-none text-lm-text dark:text-dm-text md:text-base bg-lm-secondry dark:bg-dm-secondary"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <button type="submit" className="hidden"></button>
        </form>
      ) : (
        <div
          className={`w-5/6 text-sm cursor-move transition  duration-500 md:text-base break-words dark:hover:text-dm-text-hover hover:text-lm-text-hover whitespace-normal ${
            item.completed
              ? "line-through text-lm-text-fade dark:text-dm-text-fade"
              : "text-lm-text dark:text-dm-text"
          }`}
        >
          {item.text}
        </div>
      )}

      {/* options */}
      <div className="flex flex-col items-center justify-between md:justify-end md:flex-row md:self-center md:w-12">
        {item.completed ? (
          <></>
        ) : edit ? (
          <i
            className="text-sm text-green-500 transition duration-500 cursor-pointer fas fa-check todo-item__edit"
            onClick={handleFormSubmit}
          ></i>
        ) : (
          <i
            className="text-sm text-gray-600 transition duration-500 cursor-pointer fas fa-pen dark:text-gray-200 hover:text-green-500 dark:hover:text-green-500 todo-item__edit "
            onClick={() => setEdit(true)}
          ></i>
        )}

        <CrossIcon
          className="mt-1 ml-0 transition duration-500 scale-75 cursor-pointer md:ml-2 todo-item__cross md:mt-0"
          onClick={() =>
            dispatch({ type: actionTypes.REMOVE_ITEM, payload: item.id })
          }
        />
      </div>
    </div>
  );
};

export default TodoItem;

import React, { useContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { actionTypes, AppContext } from "../contexts/appContext";
import { Draggable, Droppable } from "react-beautiful-dnd";

const TodoList = () => {
  const { dispatch, state, getFilteredItems, filterMode } =
    useContext(AppContext);

  const [items, setItems] = useState([]);
  const [completedItems, setCompletedItems] = useState(0);

  useEffect(() => {
    if (state.length > 0) {
      const completed = state.reduce((acc, item) => {
        if (item.completed) return acc + 1;
        else return acc;
      }, 0);

      setCompletedItems(completed);
    }
  }, [state]);

  useEffect(() => {
    setItems(getFilteredItems(filterMode));
  }, [filterMode, getFilteredItems]);

  return (
    <div className="mt-8 overflow-hidden rounded-md shadow-lg">
      <Droppable droppableId="todo-list">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-lm-secondry dark:bg-dm-secondary"
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <TodoItem
                    item={item}
                    dispatch={dispatch}
                    actionTypes={actionTypes}
                    provided={provided}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Items footer */}

      <div className="flex items-center justify-between px-4 py-4 text-xs md:text-sm bg-lm-secondry dark:bg-dm-secondary text-lm-text-fade dark:text-dm-text-fade">
        <p>{state.length - completedItems} items left</p>

        {/* Only show when there is atleast one marked item */}
        {completedItems > 0 && (
          <p
            className="transform cursor-pointer hover:text-lm-text-hover hover:underline underline-offset-1 active:scale-95"
            onClick={() => dispatch({ type: actionTypes.CLEAR_COMPLETE })}
          >
            Clear Completed
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoList;

import React, { createContext, useReducer, useState } from "react";

export const AppContext = createContext();

export const actionTypes = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  EDIT_ITEM: "EDIT_ITEM",
  CLEAR_COMPLETE: "CLEAR_COMPLETE",
  UPDATE_ITEMS: "UPDATE_ITEMS",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_ITEM:
      const stateAfterAdd = [...state, payload];
      localStorage.setItem("fem-todo-items", JSON.stringify(stateAfterAdd));
      return stateAfterAdd;

    case actionTypes.REMOVE_ITEM:
      const stateAfterRemove = state.filter((item) => item.id !== payload);
      localStorage.setItem("fem-todo-items", JSON.stringify(stateAfterRemove));
      return stateAfterRemove;

    case actionTypes.EDIT_ITEM:
      const stateAfterEdit = state.map((item) => {
        if (item.id === payload.id) return { ...item, ...payload };
        else return item;
      });
      localStorage.setItem("fem-todo-items", JSON.stringify(stateAfterEdit));
      return stateAfterEdit;

    case actionTypes.CLEAR_COMPLETE:
      const stateAfterClearComplete = state.filter(
        (item) => item.complete === false
      );
      localStorage.setItem(
        "fem-todo-items",
        JSON.stringify(stateAfterClearComplete)
      );
      return stateAfterClearComplete;

    case actionTypes.UPDATE_ITEMS:
      const newState = payload;
      localStorage.setItem("fem-todo-items", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

const getInitialState =
  JSON.parse(localStorage.getItem("fem-todo-items")) || [];

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState);
  const [filterMode, setFilterMode] = useState("all");

  const getFilteredItems = (filter) => {
    switch (filter) {
      case "all":
        return state;

      case "active":
        return state.filter((item) => item.completed === false);

      case "completed":
        return state.filter((item) => item.completed === true);

      default:
        return state;
    }
  };

  const values = {
    state,
    dispatch,
    filterMode,
    setFilterMode,
    getFilteredItems,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;

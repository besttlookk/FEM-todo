import React, { useContext } from "react";
import Filter from "./components/Filter";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { actionTypes, AppContext } from "./contexts/appContext";
import Header from "./layouts/Header";
import { DragDropContext } from "react-beautiful-dnd";
import Footer from "./layouts/Footer";

function App() {
  const { state, dispatch } = useContext(AppContext);

  const handleOnDragEnd = (result) => {
    const items = Array.from(state);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch({ type: actionTypes.UPDATE_ITEMS, payload: items });
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="relative min-h-screen bg-lm-bg dark:bg-dm-bg font-primary">
        {/* Backgrround-image */}
        <div className="absolute top-0 left-0 right-0 bottom-auto h-64 bg-no-repeat bg-cover md:h-80 bg-lm-mobile md:bg-lm-desktop dark:bg-dm-mobile dark:md:bg-dm-desktop"></div>
        {/* Wrapper */}
        <div className="relative h-full max-w-2xl px-8 py-12 mx-auto ">
          <Header />
          <div className="mt-8">
            <Input />
          </div>

          {/* Todo Items wrapper */}
          {state.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-3 mt-8 rounded-md shadow-md h-72 bg-lm-secondry dark:bg-dm-secondary">
              <p className="text-lm-text-fade dark:text-dm-text-fade">
                No item added yet! Try adding one
              </p>
              <div className="mt-6">
                <p className="text-lg font-semibold text-center underline text-lm-text-fade dark:text-dm-text-fade underline-offset-1">
                  Key Features
                </p>
                <ul className="flex flex-col mt-2 text-sm list-disc text-lm-text-fade dark:text-dm-text-fade">
                  <li>
                    After adding a todo, you can Edit or Delete your Todo.
                  </li>
                  <li>You can Filter your todos. [All | Active | Completed]</li>
                  <li>Drag & Drop to sort your todo. </li>
                  <li>
                    Your todos is persistent, it stays there even after refresh
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <TodoList />
          )}

          {/* Filter */}
          {state.length > 0 && <Filter />}

          <Footer />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;

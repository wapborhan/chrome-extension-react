import React from "react";

const Todo = () => {
  return (
    <>
      <div class="todoListCont" id="todoListCont">
        <svg
          id="todoIcon"
          xmlns="http://www.w3.org/2000/svg"
          class="dot-icon"
          width="36"
          height="36"
          viewBox="0 0 32 32"
        >
          <g style={{ transform: "scale(0.85);", transformOrigin: "center;" }}>
            <path d="M11,30H5c-1.7,0-3-1.3-3-3v-6c0-1.7,1.3-3,3-3h6c1.7,0,3,1.3,3,3v6C14,28.7,12.7,30,11,30z" />
            <path d="M29,6H17c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S29.6,6,29,6z" />
            <path d="M24,10h-7c-0.6,0-1-0.4-1-1s0.4-1,1-1h7c0.6,0,1,0.4,1,1S24.6,10,24,10z" />
            <path d="M29,22H17c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S29.6,22,29,22z" />
            <path d="M24,26h-7c-0.6,0-1-0.4-1-1s0.4-1,1-1h7c0.6,0,1,0.4,1,1S24.6,26,24,26z" />
            <path d="M11,2H5C3.3,2,2,3.3,2,5v6c0,1.7,1.3,3,3,3h6c1.7,0,3-1.3,3-3V5C14,3.3,12.7,2,11,2z M11.7,6.7l-3,3C8.5,9.9,8.3,10,8,10 S7.5,9.9,7.3,9.7l-2-2c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0L8,7.6l2.3-2.3c0.4-0.4,1-0.4,1.4,0S12.1,6.3,11.7,6.7z" />
          </g>
        </svg>
        {/* <!-- Text to appear on hover --> */}
        <span class="tooltip-text" id="todoListHover">
          ToDo List
        </span>
      </div>
      {/* <!--  --> */}
      <div id="todoContainer" class="todo-container">
        <h2 id="todoListHeading">To Do List</h2>
        <div class="searchbar-content">
          <input
            id="todoInput"
            placeholder="Add task..."
            type="text"
            autocomplete="off"
          />
          <div class="searchControls">
            {/* <!-- Add Button --> */}
            <button id="todoAdd">+</button>
          </div>
        </div>
        <ul class="todolist" id="todoullist"></ul>
      </div>
    </>
  );
};

export default Todo;

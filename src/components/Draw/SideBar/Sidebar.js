import React, { useState } from "react";
import "./SideBar.css";
import { BsDoorOpenFill } from "react-icons/bs";
import { AiFillLayout } from "react-icons/ai";
import { SiBuildkite } from "react-icons/si";
import { FaChair } from "react-icons/fa";
import { BsFonts } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import SidebarRoom from "../SidebarToggle/Rooms/SidebarRoom";
import SidebarDoor from "../SidebarToggle/Doors/SidebarDoor";
import SidebarFurniture from "../SidebarToggle/Furniture/SidebarFurniture";

const Sidebar = () => {
  const [toggleState, setToggleState] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="sidebar">
        <ul className="bloc-tabs">
          <li
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <AiFillLayout />
          </li>
          <li
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <SiBuildkite />
          </li>
          <li
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <BsDoorOpenFill />
          </li>
          <li
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            <FaChair />
          </li>
          <li>
            <BsFonts />
          </li>
        </ul>
        <button>
          <AiOutlineQuestionCircle />
        </button>
      </div>

      <div className={toggleState === 1 ? "content active-content" : "content"}>
        <h1>Hello World</h1>
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <SidebarRoom RoomClose={setToggleState} />
      </div>

      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <SidebarDoor DoorClose={setToggleState} />
      </div>

      <div
        className={toggleState === 4 ? "content  active-content" : "content"}
      >
        <SidebarFurniture FurnitureClose={setToggleState} />
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import "./SidebarDoor.css";
import CloseIcon from "@mui/icons-material/Close";
import Door1 from "../../../../images/Doors/Door1.jpg";
import Door2 from "../../../../images/Doors/Door2.jpg";
import Door3 from "../../../../images/Doors/Door3.jpg";
import Door4 from "../../../../images/Doors/Door4.jpg";
import Door5 from "../../../../images/Doors/Door5.jpg";
import Window1 from "../../../../images/Doors/Window1.jpg";
import Window2 from "../../../../images/Doors/Window2.jpg";
import Window3 from "../../../../images/Doors/Window3.jpg";
import Window4 from "../../../../images/Doors/Window4.jpg";

const SidebarDoor = (props) => {
  return (
    <div className="sidebarDoor">
      <div className="head">
        <p>Doors and windows</p>
        <CloseIcon id="closeicon" onClick={props.DoorClose} />
      </div>

      <div className="Door">
        <img src={Door1} alt="Door1" />
        <img src={Door2} alt="Door2" />
        <img src={Door3} alt="Door3" />
        <img src={Door4} alt="Door4" />
        <img src={Door5} alt="Door5" />
        <img src={Window1} alt="Window1" />
        <img src={Window2} alt="Window2" />
        <img src={Window3} alt="Window3" />
        <img src={Window4} alt="Window4" />
      </div>
    </div>
  );
};

export default SidebarDoor;

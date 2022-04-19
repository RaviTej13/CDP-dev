import React from "react";
import "./SidebarRoom.css";
import Rect1 from "../../../../images/Rooms/Rect1.png";
import Rect2 from "../../../../images/Rooms/Rect2.png";
import Rect3 from "../../../../images/Rooms/Rect3.png";
import Rect4 from "../../../../images/Rooms/Rect4.png";
import Rect5 from "../../../../images/Rooms/Rect5.png";
import Rect6 from "../../../../images/Rooms/Rect6.png";

import CloseIcon from "@mui/icons-material/Close";

const SidebarRoom = (props) => {
  return (
    <div className="sidebarRoom">
      <div className="head">
        <p>Rooms</p>
        <CloseIcon id="closeicon" onClick={props.RoomClose} />
      </div>

      <div className="Rect">
        <img src={Rect1} alt="Rect1" onClick={props.Rect1} />
        <img src={Rect2} alt="Rect2" onClick={props.Rect2} />
        <img src={Rect3} alt="Rect3" onClick={props.Rect3} />
        <img src={Rect6} alt="Rect6" onClick={props.Rect4} />
        <img src={Rect4} alt="Rect4" onClick={props.Rect5} />
        <img src={Rect5} alt="Rect5" onClick={props.Rect6} />
      </div>
    </div>
  );
};

export default SidebarRoom;

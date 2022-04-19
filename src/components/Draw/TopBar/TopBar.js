import * as React from "react";
import "./TopBar.css";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import StraightenIcon from "@mui/icons-material/Straighten";
import SettingsIcon from "@mui/icons-material/Settings";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import logo from "../../../images/LOGO/CDPdarklogo.png";

const TopBar = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} style={{ height: "120px", width: "120px" }} alt="alt" />
      </div>
      <h4>Drawing Canvas</h4>
      <div>
        <IconButton>
          <UndoIcon className="left_icon undoredo" />
        </IconButton>
        <IconButton>
          <RedoIcon className="left_icon undoredo" />
        </IconButton>
        <IconButton>
          <StraightenIcon className="left_icon" />
        </IconButton>
        <IconButton>
          <DownloadIcon className="left_icon" />
        </IconButton>
        <IconButton>
          <SettingsIcon className="left_icon setting" />
        </IconButton>
      </div>
    </div>
  );
};

export default TopBar;

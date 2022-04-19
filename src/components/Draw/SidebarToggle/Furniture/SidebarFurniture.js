import React from "react";
import "./SidebarFurniture.css";
import CloseIcon from "@mui/icons-material/Close";
import Chair1 from "../../../../images/Furniture/Chair1.jpg";
import Chair2 from "../../../../images/Furniture/Chair2.jpg";
import Chair3 from "../../../../images/Furniture/Chair3.jpg";
import Sofa1 from "../../../../images/Furniture/Sofa1.jpg";
import Sofa2 from "../../../../images/Furniture/Sofa2.jpg";
import Sofa3 from "../../../../images/Furniture/Sofa3.jpg";
import Bed1 from "../../../../images/Furniture/Bed1.jpg";
import Bed2 from "../../../../images/Furniture/Bed2.jpg";
import Bed3 from "../../../../images/Furniture/Bed3.jpg";
import Bed4 from "../../../../images/Furniture/Bed4.jpg";
import Dining1 from "../../../../images/Furniture/Dining1.jpg";
import TeaTable from "../../../../images/Furniture/TeaTable.jpg";
import Washbin1 from "../../../../images/Furniture/Washbin1.jpg";
import Washbin2 from "../../../../images/Furniture/Washbin2.jpg";
import Bathtub from "../../../../images/Furniture/Bathtub.jpg";
import Toilet1 from "../../../../images/Furniture/Toilet1.jpg";

const SidebarFurniture = (props) => {
  return (
    <div className="sidebarFurniture">
      <div className="head">
        <p>Furniture</p>
        <CloseIcon id="closeicon" onClick={props.FurnitureClose} />
      </div>

      <div className="Furniture">
        <img src={Chair1} alt="Chair1" />
        <img src={Chair2} alt="Chair2" />
        <img src={Chair3} alt="Chair3" />
        <img src={Sofa1} alt="Sofa1" />
        <img src={Sofa2} alt="Sofa2" />
        <img src={Sofa3} alt="Sofa3" />
        <img src={Bed1} alt="Bed1" />
        <img src={Bed2} alt="Bed2" />
        <img src={Bed3} alt="Bed3" />
        <img src={Bed4} alt="Bed4" />
        <img src={Dining1} alt="Dining1" />
        <img src={TeaTable} alt="TeaTable" />
        <img src={Washbin1} alt="Washbin1" />
        <img src={Washbin2} alt="Washbin2" />
        <img src={Bathtub} alt="Bathtub" />
        <img src={Toilet1} alt="Toilet1" />
      </div>
    </div>
  );
};

export default SidebarFurniture;

import React from "react";
import { Container, BodySection, BodySec } from "./DrawElements";
import Canvas from "./Canvas/Canvas";
import Sidebar from "./SideBar/Sidebar";
import TopBar from "./TopBar/TopBar";

const Draw = () => {
  return (
    <>
      <Container>
        <TopBar />
        <BodySection>
          <BodySec>
            <Sidebar />
            <Canvas />
          </BodySec>
        </BodySection>
      </Container>
    </>
  );
};

export default Draw;

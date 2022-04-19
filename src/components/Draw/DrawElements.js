import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
`;

export const BodySection = styled.div`
  .app {
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: #dadbd3;
  }
`;

export const BodySec = styled.div`
  display: flex;
  background-color: #ededed;
  margin-top: -20px;
  margin-bottom: -10px;
  height: 100vh;
  width: 100vw;
`;

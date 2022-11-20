import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <h1>Abeni Private Chat</h1>
      <h3>
        Choose profile to chat with it 
      </h3>
    </C.Container>
  );
};

export default Default;
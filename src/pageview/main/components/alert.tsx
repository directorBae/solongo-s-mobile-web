import React from "react";
import styled from "styled-components";
import ActionButton from "../../../components/actionButton";

const AlertContainer = styled.div<{ $color: string }>`
  box-sizing: border-box;

  width: 80%;
  height: 118px;

  background: #ffffff;
  border-top: 0.5px solid #bebebe;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25),
    inset 0px 0px 8px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
`;

//TODO: blahblah

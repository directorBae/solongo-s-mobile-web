import styled from "styled-components";

const InputBarContainer = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;

  position: relative;
`;

const InputBarBox = styled.input`
  box-sizing: border-box;

  width: 100%;
  height: 40px;
  padding-left: 10px;

  display: flex;

  background: #ffffff;
  border: 0.5px solid rgba(28, 28, 28, 0.5);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  font-size: 14px;
`;

export { InputBarContainer, InputBarBox };

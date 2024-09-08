import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  width: 5rem;
  height: 0.5rem;
`;

interface UserInputProps {
  type: string;
  value: string;
  onChange: (value: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({ type, value, onChange }) => {
  return (
    <InputStyle
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default UserInput;

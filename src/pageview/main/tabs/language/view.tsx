import LanguageVM from "./vm";
import { Title } from "../../components/TabAssets";
import ActionButton from "../../../../components/actionButton";
import styled from "styled-components";

const vm = LanguageVM;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  gap: 2rem;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
`;

const LanguageView = () => {
  return (
    <>
      <Title>{vm.title}</Title>
      <ButtonContainer>
        <ActionButton
          text="한국어"
          onClick={() => {}}
          isShadow={true}
          width={"80%"}
          height={"40px"}
          fontSize="1em"
        />
        <ActionButton
          text="English"
          onClick={() => {}}
          isShadow={true}
          width={"80%"}
          height={"40px"}
          fontSize="1em"
        />
        <ActionButton
          text="汉字"
          onClick={() => {}}
          isShadow={true}
          width={"80%"}
          height={"40px"}
          fontSize="1em"
        />
        <ActionButton
          text="日本語"
          onClick={() => {}}
          isShadow={true}
          width={"80%"}
          height={"40px"}
          fontSize="1em"
        />
      </ButtonContainer>
    </>
  );
};

export default LanguageView;

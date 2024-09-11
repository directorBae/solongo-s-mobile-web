import FunctionTab from "../fuctionTabTemplates";
import ChatlogVM from "./vm";
import { Title, ButtonContainer } from "../../components/TabAssets";
import ActionButton from "../../../../components/actionButton";

const vm = ChatlogVM;

const ChatlogView = () => {
  return (
    <>
      <Title>{vm.title}</Title>
      <FunctionTab vm={vm} />
      <ButtonContainer>
        <ActionButton
          text="대화 그만 보기"
          onClick={null}
          isShadow={true}
          width="35%"
        />
        <ActionButton text="닫기" onClick={null} isShadow={true} width="35%" />
      </ButtonContainer>
    </>
  );
};

export default ChatlogView;

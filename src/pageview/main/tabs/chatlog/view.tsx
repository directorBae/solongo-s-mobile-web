import CardSlider from "../../components/cardSlider";
import ChatlogVM from "./vm";
import { Title, ButtonContainer } from "../../components/TabAssets";
import ActionButton from "../../../../components/actionButton";
import BottomTabTemplate from "../../components/bottomTabTemplate";

const vm = ChatlogVM;

const ChatlogView = () => {
  return (
    <BottomTabTemplate>
      <Title>{vm.title}</Title>
      <CardSlider vm={vm} />
      <ButtonContainer>
        <ActionButton
          text="대화 그만 보기"
          onClick={() => {}}
          isShadow={true}
          width="35%"
        />
        <ActionButton
          text="닫기"
          onClick={() => {}}
          isShadow={true}
          width="35%"
        />
      </ButtonContainer>
    </BottomTabTemplate>
  );
};

export default ChatlogView;

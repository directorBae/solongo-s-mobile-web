import CardSlider from "../../components/cardSlider";
import PalleteVM from "./vm";
import { Title, ButtonContainer } from "../../components/TabAssets";
import ActionButton from "../../../../components/actionButton";
import BottomTabTemplate from "../../components/bottomTabTemplate";

const vm = PalleteVM;

const PalleteView = () => {
  return (
    <BottomTabTemplate>
      <Title>{vm.title}</Title>
      <CardSlider vm={vm} />
      <ButtonContainer>
        <ActionButton
          text="팔레트 그만 보기"
          onClick={null}
          isShadow={true}
          width="35%"
        />
        <ActionButton text="닫기" onClick={null} isShadow={true} width="35%" />
      </ButtonContainer>
    </BottomTabTemplate>
  );
};

export default PalleteView;

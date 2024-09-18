import CardSlider from "../../components/cardSlider";
import PalleteVM from "./vm";
import { Title, ButtonContainer } from "../../components/TabAssets";
import ActionButton from "../../../../components/actionButton";
import BottomTabTemplate from "../../components/bottomTabTemplate";
import useMainPageViewModel from "../../vm";

const palletevm = PalleteVM;
const mainvm = useMainPageViewModel;

const PalleteView = () => {
  return (
    <BottomTabTemplate>
      <Title>{palletevm.title}</Title>
      <CardSlider vm={palletevm} />
      <ButtonContainer>
        <ActionButton
          text="팔레트 그만 보기"
          onClick={() => palletevm.deactivatePallete()}
          isShadow={true}
          width="35%"
        />
        <ActionButton
          text="닫기"
          onClick={() => mainvm.setShowBottomTab(false)}
          isShadow={true}
          width="35%"
        />
      </ButtonContainer>
    </BottomTabTemplate>
  );
};

export default PalleteView;

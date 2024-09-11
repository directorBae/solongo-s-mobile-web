import FunctionTab from "../fuctionTabTemplates";
import PalleteVM from "./vm";
import { Title, ButtonContainer } from "../../components/TabAssets";
import ActionButton from "../../../../components/actionButton";

const vm = PalleteVM;

const PalleteView = () => {
  return (
    <>
      <Title>{vm.title}</Title>
      <FunctionTab vm={vm} />
      <ButtonContainer>
        <ActionButton
          text="팔레트 그만 보기"
          onClick={null}
          isShadow={true}
          width="35%"
        />
        <ActionButton text="닫기" onClick={null} isShadow={true} width="35%" />
      </ButtonContainer>
    </>
  );
};

export default PalleteView;

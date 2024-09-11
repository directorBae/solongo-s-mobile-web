import PathfindVM from "./vm";
import { Title, ButtonContainer } from "../../components/TabAssets";
import DepartureIcon from "../../../../assets/svgs/departure.svg";
import ArrivalIcon from "../../../../assets/svgs/arrival.svg";
import ViaIcon from "../../../../assets/svgs/via.svg";
import styled from "styled-components";
import LocationBar from "../../components/locationBar";
import ActionButton from "../../../../components/actionButton";

const vm = PathfindVM;

const PathFindInputSection = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

  align-self: center;
`;

const PathFindInput = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const PathfindView = () => {
  return (
    <>
      <Title>{vm.title}</Title>
      <PathFindInputSection>
        <PathFindInput>
          <IconContainer>
            <img src={DepartureIcon} alt="Departure" />
          </IconContainer>
          <LocationBar placeholder="출발지를 설정..." />
        </PathFindInput>
        <PathFindInput>
          <IconContainer>
            <img src={ViaIcon} alt="Via" />
          </IconContainer>
          <LocationBar placeholder="경유지를 설정..." />
        </PathFindInput>
        <PathFindInput>
          <IconContainer>
            <img src={ArrivalIcon} alt="Arrival" />
          </IconContainer>
          <LocationBar placeholder="도착지를 설정..." />
        </PathFindInput>
      </PathFindInputSection>
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

export default PathfindView;

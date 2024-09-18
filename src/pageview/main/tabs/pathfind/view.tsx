import PathfindVM from "./vm";
import { Title, ButtonContainer } from "../../components/TabAssets";
import DepartureIcon from "../../../../assets/svgs/departure.svg";
import ArrivalIcon from "../../../../assets/svgs/arrival.svg";
import ViaIcon from "../../../../assets/svgs/via.svg";
import styled from "styled-components";
import LocationBar from "../../components/locationBar";
import ActionButton from "../../../../components/actionButton";
import BottomTabTemplate from "../../components/bottomTabTemplate";

const vm = PathfindVM;

const PathFindInputSection = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

  align-self: center;
  gap: 2.5rem;

  padding: 0.5rem 0;

  align-self: center;
  justify-self: center;
`;

const PathFindInput = styled.div`
  width: 100%;
  height: 40px;

  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 30px;

  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.img`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const PathfindView = () => {
  return (
    <BottomTabTemplate>
      <Title>{vm.title}</Title>
      <PathFindInputSection>
        <PathFindInput>
          <IconContainer src={DepartureIcon} alt="Departure" />
          <LocationBar placeholder="출발지를 설정..." />
        </PathFindInput>
        <PathFindInput>
          <IconContainer src={ViaIcon} alt="Via" />
          <LocationBar placeholder="경유지를 설정..." />
        </PathFindInput>
        <PathFindInput>
          <IconContainer src={ArrivalIcon} alt="Arrival" />
          <LocationBar placeholder="도착지를 설정..." />
        </PathFindInput>
      </PathFindInputSection>
      <ButtonContainer>
        <ActionButton
          text="길찾기"
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

export default PathfindView;

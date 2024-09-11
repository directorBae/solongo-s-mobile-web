import React from "react";
import styled from "styled-components";
import Bin from "../../../assets/svgs/bin.svg";
import ActionButton from "../../../components/actionButton";
import { CardContent } from "../../../store/types/types";

const ContentsCardContainer = styled.div<{
  $color: string;
  $textColor: string;
}>`
  /* Rectangle 7 */

  position: relative;
  width: 225px;
  height: 200px;

  background: ${(props) => props.$color};
  border-radius: 8px;

  color: ${(props) => props.$textColor};

  display: flex;
  flex-direction: column;

  padding: 1.5rem 1rem;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Pretendard;
`;

const Context = styled.div`
  margin: 2.5rem 0;
  height: 40%;

  font-family: "Pretendard";

  font-weight: 200;
  letter-spacing: 0.05rem;
  font-size: 0.9rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

// TODO: 콘텐츠카드 만들고, 색상 셋 정의하기
// 콘텐츠카드 만들면, 각 탭 만들기

const ContentsCard = ({
  color,
  textColor,
  contents,
  buttons,
}: {
  color: string;
  textColor: string;
  contents: CardContent;
  buttons?: Array<{
    title: string;
    onClick: () => void;
  }>;
}) => {
  return (
    <ContentsCardContainer $color={color} $textColor={textColor}>
      <TitleSection>
        <Title>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 600,
              marginBottom: "3px",
            }}
          >
            {contents.title}
          </div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 200,
            }}
          >
            {contents.date + "에 생성됨"}
          </div>
        </Title>
        <img src={Bin} width={20} alt="bin" style={{ cursor: "pointer" }} />
      </TitleSection>
      <Context>{contents.context}</Context>
      {buttons && (
        <ButtonContainer>
          {buttons.map((button, index) => (
            <ActionButton
              key={index}
              text={button.title}
              onClick={() => {}}
              isShadow={false}
            />
          ))}
        </ButtonContainer>
      )}
    </ContentsCardContainer>
  );
};

export default ContentsCard;

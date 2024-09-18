import { observer } from "mobx-react";
import styled from "styled-components";
import ContentsCard from "./contentsCard";
import { CardContent } from "../../../store/types/types";
import CardPlus from "../../../assets/svgs/cardPlus.svg";

// 가로 스크롤 박스의 스타일
const SliderWrapper = styled.div`
  margin: 0 0.5rem;
  overflow-x: auto; /* 가로 스크롤 활성화 */
  overflow-y: hidden; /* 세로 스크롤 비활성화 */

  display: flex;

  padding: 1rem;

  scrollbar-width: thin; /* Firefox에서 스크롤바 얇게 */
  scrollbar-color: #888 #f1f1f1; /* Firefox용 스크롤바 색상 설정 */

  /* 스크롤바 스타일 (Webkit) */
  &::-webkit-scrollbar {
    height: 8px; /* 가로 스크롤바 높이 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

const SlideItem = styled.div<{ $isCard: boolean }>`
  display: inline-block; /* 카드들을 한 줄로 나열하기 위해 설정 */

  margin-right: 20px;

  transition: transform 0.3s ease, opacity 0.3s ease; /* 애니메이션 추가 */

  ${(props) =>
    props.$isCard &&
    `&:hover {
    transform: scale(1.05); /* 호버 시 확대 */
  }`}
`;

const AddCard = styled.div`
  position: relative;
  width: 225px;
  height: 200px;

  background: rgba(227, 227, 227, 0.3);
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  padding: 1.5rem 1rem;
`;

interface SliderProps {
  vm: any;
}

const CardSlider = observer(({ vm }: SliderProps) => {
  const contents = vm.contentsList;

  return (
    <SliderWrapper>
      {contents.map((content: CardContent, index: number) => (
        <SlideItem key={index} $isCard={true}>
          <ContentsCard
            color={vm.colors[index % vm.colors.length]["bg"]}
            textColor={vm.colors[index % vm.colors.length]["text"]}
            contents={content}
            buttons={vm.cardButtons}
            deleteCard={() => {
              vm.removePalleteFromModel(index);
            }}
          />
        </SlideItem>
      ))}
      <SlideItem $isCard={false}>
        <AddCard
          onClick={() => {
            vm.addPalleteToModel({
              title: "새로운 팔레트",
              time: new Date().toLocaleString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }),
              summary: "새로운 팔레트입니다.",
              places: [],
              pathfinds: [],
            });
          }}
        >
          <img src={CardPlus} alt="Add Card" />
        </AddCard>
      </SlideItem>
    </SliderWrapper>
  );
});

export default CardSlider;

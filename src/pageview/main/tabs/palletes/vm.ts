import { makeObservable } from "mobx";
import { CardContent } from "../../../../store/types/types";
import gradientsObj from "../../../../assets/colors/gradients";

class PalleteVMClass {
  constructor() {
    makeObservable(this);
  }

  title = "팔레트 보기";
  colors = gradientsObj;

  contentsList: CardContent[] = [
    {
      title: "팔레트 1",
      date: "2024.05.21 19:43:50",
      context: "팔레트 1의 설명",
    },
    {
      title: "팔레트 1",
      date: "2024.05.21 19:43:50",
      context: "팔레트 1의 설명",
    },
    {
      title: "팔레트 1",
      date: "2024.05.21 19:43:50",
      context: "팔레트 1의 설명",
    },
    {
      title: "팔레트 1",
      date: "2024.05.21 19:43:50",
      context: "팔레트 1의 설명",
    },
  ];

  cardButtons = [
    {
      title: "불러오기",
      onClick: () => {},
    },
  ];
}

const PalleteVM = new PalleteVMClass();
export default PalleteVM;

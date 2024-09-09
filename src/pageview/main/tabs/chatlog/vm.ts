import { makeObservable } from "mobx";
import { CardContent } from "../../../../store/types/types";

class ChatlogVMClass {
  constructor() {
    makeObservable(this);
  }

  title = "이전 대화 기록 보기";
  colors = [
    {
      bg: "#0E0065",
      text: "#FFFFFF",
    },
  ];

  contentsList: CardContent[] = [
    {
      title: "경복궁 화장실 위치",
      date: "2024.05.21 19:43:50",
      context:
        "경복궁의 화장실 위치에 대해 질문했고 경복궁의 화장실은 사립문 뒤에 존재합니다.",
    },
    {
      title: "경복궁 화장실 위치",
      date: "2024.05.21 19:43:50",
      context:
        "경복궁의 화장실 위치에 대해 질문했고 경복궁의 화장실은 사립문 뒤에 존재합니다.",
    },
    {
      title: "경복궁 화장실 위치",
      date: "2024.05.21 19:43:50",
      context:
        "경복궁의 화장실 위치에 대해 질문했고 경복궁의 화장실은 사립문 뒤에 존재합니다.",
    },
    {
      title: "경복궁 화장실 위치",
      date: "2024.05.21 19:43:50",
      context:
        "경복궁의 화장실 위치에 대해 질문했고 경복궁의 화장실은 사립문 뒤에 존재합니다.",
    },
  ];
}

const ChatlogVM = new ChatlogVMClass();
export default ChatlogVM;

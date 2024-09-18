import { makeAutoObservable, observable } from "mobx";
import PalleteVM from "../pageview/main/tabs/palletes/vm";
import ChatlogVM from "../pageview/main/tabs/chatlog/vm";
import PathfindVM from "../pageview/main/tabs/pathfind/vm";
import LanguageVM from "../pageview/main/tabs/language/vm";
import { VMType } from "../store/types/types";

class VMConnector {
  palleteVM = PalleteVM;
  chatlogVM = ChatlogVM;
  pathfindVM = PathfindVM;
  languageVM = LanguageVM;

  changeDetected = false;

  // observable로 whereActivated 선언
  whereActivated: {
    [key: string]: boolean;
  } = observable({
    pallete: this.palleteVM.activated,
    chatlogs: this.chatlogVM.activated,
    pathfind: this.pathfindVM.activated,
  });

  constructor() {
    makeAutoObservable(this);
  }

  modeChanged = (beforeMode: VMType["VMMode"], afterMode: VMType["VMMode"]) => {
    switch (beforeMode) {
      case "pallete":
        this.palleteVM.deactivatePallete();
        console.log("pallete deactivated");
        break;
      case "chatlogs":
        // this.chatlogVM.deactivateChatlog();
        break;
      case "pathfind":
        // this.pathfindVM.deactivatePathfind();
        break;
      case "language":
        // this.languageVM.deactivateLanguage();
        break;
      default:
        break;
    }

    if (beforeMode !== null) {
      this.whereActivated[beforeMode] = false; // 상태 업데이트
    }

    if (afterMode !== null) {
      this.whereActivated[afterMode] = true;
      const otherModes = Object.keys(this.whereActivated).filter(
        (key) => key !== afterMode
      );
      otherModes.forEach((key) => {
        this.whereActivated[key] = false;
      });
    } else {
      this.whereActivated = {
        pallete: false,
        chatlogs: false,
        pathfind: false,
      };
    }
  };
}

const vmconnector = new VMConnector();
export default vmconnector;

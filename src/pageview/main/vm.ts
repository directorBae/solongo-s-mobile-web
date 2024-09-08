import { makeAutoObservable } from "mobx";

class MainPageVMClass {
  constructor() {
    makeAutoObservable(this);
  }

  showMode:
    | "cash"
    | "chatlogs"
    | "footprint"
    | "language"
    | "profile"
    | "pathfind"
    | "pallete"
    | null = null;
  showBottomTab = false;

  setMode = (mode: MainPageVMClass["showMode"]) => {
    console.log("setMode", mode);
    if (mode === this.showMode || mode === null) {
      this.showMode = null;
      this.showBottomTab = false;
    } else {
      this.showMode = mode;
      this.showBottomTab = true;
    }
  };

  setShowBottomTab = (show: boolean) => {
    this.showBottomTab = show;
  };
}

const MainPageVM = new MainPageVMClass();
export default MainPageVM;

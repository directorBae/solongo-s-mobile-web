import { makeAutoObservable, observable, action, reaction } from "mobx";
import { VMType } from "../../store/types/types";

interface ModeType extends VMType {
  showBottomTab: boolean;
}

class MainPageVMClass {
  showMode: ModeType = {
    VMMode: null,
    showBottomTab: false,
  };

  setMode = (mode: MainPageVMClass["showMode"]["VMMode"]) => {
    this.showMode.showBottomTab = false;
    if (mode === this.showMode.VMMode || mode === null) {
      this.showMode.VMMode = null;
      this.showMode.showBottomTab = false;
    } else {
      this.showMode.VMMode = mode;
      this.showMode.showBottomTab = true;
    }
  };

  setShowBottomTab = (show: boolean) => {
    this.showMode.showBottomTab = show;
  };

  constructor() {
    makeAutoObservable(this, {
      showMode: observable,
      setMode: action,
      setShowBottomTab: action,
    });

    reaction(
      () => this.showMode.VMMode,
      (mode) => {
        console.log("reaction:L mode changed;", mode);
        if (mode === null) {
          this.showMode.showBottomTab = false;
        }
      }
    );
  }
}

const MainPageVM = new MainPageVMClass();
export default MainPageVM;

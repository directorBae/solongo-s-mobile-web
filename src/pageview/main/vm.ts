import { makeAutoObservable, observable, action, reaction } from "mobx";
import { VMType } from "../../store/types/types";
import vmconnector from "../../vmconnector/vmconnector";

interface ModeType extends VMType {
  showBottomTab: boolean;
}

class MainPageVMClass {
  showMode: ModeType = {
    VMMode: null,
    showBottomTab: false,
  };

  isIconClicked = vmconnector.whereActivated;

  setMode = (mode: MainPageVMClass["showMode"]["VMMode"]) => {
    this.showMode.showBottomTab = false;
    if (mode !== null && this.isIconClicked[mode] === true) {
      this.showMode.showBottomTab = true;
    }
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
      isIconClicked: observable,
    });

    let previousMode: MainPageVMClass["showMode"]["VMMode"] = null;

    reaction(
      () => this.showMode.VMMode,
      (currentMode, _reaction) => {
        console.log(
          "reaction: mode changed; previous mode:",
          previousMode,
          "current mode:",
          currentMode
        );

        if (currentMode === null) {
          this.showMode.showBottomTab = false;
        }
        vmconnector.modeChanged(previousMode, currentMode);

        // 이전 모드를 업데이트
        previousMode = currentMode;
      }
    );
  }
}

const MainPageVM = new MainPageVMClass();
export default MainPageVM;

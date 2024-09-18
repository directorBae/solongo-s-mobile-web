import { makeObservable } from "mobx";

class LanguageVMClass {
  constructor() {
    makeObservable(this);
  }

  title = "언어 선택 / Choose your language";
  activated = false;
}

const LanguageVM = new LanguageVMClass();
export default LanguageVM;

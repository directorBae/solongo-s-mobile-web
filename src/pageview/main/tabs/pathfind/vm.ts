import { makeObservable } from "mobx";

class PathfindVMClass {
  constructor() {
    makeObservable(this);
  }

  title = "길찾기";
  activated = false;
}

const PathfindVM = new PathfindVMClass();
export default PathfindVM;

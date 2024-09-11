import { makeObservable } from "mobx";

class PathfindVMClass {
  constructor() {
    makeObservable(this);
  }

  title = "길찾기";
}

const PathfindVM = new PathfindVMClass();
export default PathfindVM;

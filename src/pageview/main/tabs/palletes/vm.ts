import { makeObservable, observable, action } from "mobx";
import { CardContent, Pallete } from "../../../../store/types/types";
import gradientsObj from "../../../../assets/colors/gradients";
import store from "../../../../store/store";
import { addPallete, delPallete } from "../../../../actions/palleteActions";

class PalleteVMClass {
  title = "팔레트 보기";
  colors = gradientsObj;
  activated: boolean = false;
  activatedIndex: number = -1;

  palleteList: Pallete[] = [];
  contentsList: CardContent[] = [];

  cardButtons = [
    {
      title: "불러오기",
      onClick: () => {},
    },
  ];

  constructor() {
    makeObservable(this, {
      palleteList: observable,
      contentsList: observable,
      loadFromModel: action,
      addPalleteToModel: action,
      removePalleteFromModel: action,
      activatePallete: action,
      deactivatePallete: action,
      activated: observable,
    });
  }

  loadFromModel() {
    const state = store.getState(); // 리덕스 스토어에서 상태 가져오기
    this.palleteList = state.palletes; // ViewModel의 상태에 리덕스 상태를 반영
    this.contentsList = this.palleteList.map((pallete) => {
      return {
        title: pallete.title,
        date: pallete.time,
        context: pallete.places.map((place) => place.name).join(", "),
      };
    });
  }

  activatePallete(index: number) {
    this.activated = true;
    this.activatedIndex = index;
    console.log(this.activatedIndex);
  }

  deactivatePallete() {
    this.activated = false;
  }

  addPalleteToModel(pallete: Pallete) {
    store.dispatch(addPallete(pallete)); // 리덕스 액션 디스패치
    this.loadFromModel(); // 상태를 다시 불러와서 업데이트
    this.activatePallete(
      this.palleteList.length === 0 ? -1 : this.palleteList.length - 1
    );
  }

  removePalleteFromModel(index: number) {
    store.dispatch(delPallete(index)); // 리덕스 액션 디스패치
    this.loadFromModel(); // 상태를 다시 불러와서 업데이트
  }
}

const PalleteVM = new PalleteVMClass();
export default PalleteVM;

import Cookies from "js-cookie";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./store"; // 스토어의 상태 타입
import {
  PalleteActionTypes,
  ADD,
  DELETE,
  EDIT,
  initializeFromCookies,
} from "../actions/palleteActions";
import { Pallete } from "../store/types/types";

// 쿠키에서 팔레트 데이터를 저장하는 Thunk 액션
export const savePalleteToCookies = (): ThunkAction<
  void,
  RootState,
  unknown,
  PalleteActionTypes
> => {
  return (
    dispatch: Dispatch<PalleteActionTypes>,
    getState: () => RootState
  ) => {
    // Redux의 현재 상태에서 palletes 데이터를 가져옴
    const { palletes } = getState();

    // 쿠키에 palletes 저장 (7일 동안 유효)
    Cookies.set("palletes", JSON.stringify(palletes), { expires: 7 });

    // 필요하면 추가적인 액션을 dispatch할 수 있음
  };
};

// 쿠키에서 팔레트 데이터를 가져와 초기화하는 Thunk 액션
export const initializePalleteFromCookies = (): ThunkAction<
  void,
  RootState,
  unknown,
  PalleteActionTypes
> => {
  return (dispatch: Dispatch<PalleteActionTypes>) => {
    // 쿠키에서 palletes 데이터 가져오기
    const palletesFromCookies = Cookies.get("palletes")
      ? JSON.parse(Cookies.get("palletes")!)
      : null;

    // 쿠키에 데이터가 있을 경우, 이를 초기화하는 액션을 dispatch
    if (palletesFromCookies) {
      dispatch(initializeFromCookies(palletesFromCookies));
    }
  };
};

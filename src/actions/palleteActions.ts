import { Pallete, Place, Pathfind } from "../store/types/types";

export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";
export const PLACE_ADD = "PLACE_ADD";
export const PLACE_DEL = "PLACE_DEL";
export const PLACE_ORDER_CHANGE = "PLACE_ORDER_CHANGE";

// 액션 타입 정의
interface AddPalleteAction {
  type: typeof ADD;
  payload: Pallete;
}

interface DeletePalleteAction {
  type: typeof DELETE;
  payload: number;
}

interface EditPalleteAction {
  type: typeof EDIT;
  payload: { index: number; pallete: Pallete };
}

interface PalletePlaceAddAction {
  type: typeof PLACE_ADD;
  payload: { pallete_index: number; place: Place };
}

interface PalletePlaceDelAction {
  type: typeof PLACE_DEL;
  payload: { pallete_index: number; place_index: number };
}

interface PalletePlaceOrderChangeAction {
  type: typeof PLACE_ORDER_CHANGE;
  payload: { pallete_index: number; place_index: number; target_index: number };
}

// 액션 타입을 하나로 합침
export type PalleteActionTypes =
  | AddPalleteAction
  | DeletePalleteAction
  | EditPalleteAction
  | PalletePlaceAddAction
  | PalletePlaceDelAction
  | PalletePlaceOrderChangeAction;

// 액션 생성자
export const addPallete = (pallete: Pallete): AddPalleteAction => ({
  type: ADD,
  payload: pallete,
});

export const delPallete = (index: number): DeletePalleteAction => ({
  type: DELETE,
  payload: index,
});

export const editPallete = (
  index: number,
  pallete: Pallete
): EditPalleteAction => ({
  type: EDIT,
  payload: { index, pallete },
});

export const placeAdd = (
  pallete_index: number,
  place: Place
): PalletePlaceAddAction => ({
  type: PLACE_ADD,
  payload: { pallete_index, place },
});

export const placeDel = (
  pallete_index: number,
  place_index: number
): PalletePlaceDelAction => ({
  type: PLACE_DEL,
  payload: { pallete_index, place_index },
});

export const placeOrderChange = (
  pallete_index: number,
  place_index: number,
  target_index: number
): PalletePlaceOrderChangeAction => ({
  type: PLACE_ORDER_CHANGE,
  payload: { pallete_index, place_index, target_index },
});

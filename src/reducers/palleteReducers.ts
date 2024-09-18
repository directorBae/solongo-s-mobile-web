import {
  ADD,
  DELETE,
  EDIT,
  PLACE_ADD,
  PLACE_DEL,
  PLACE_ORDER_CHANGE,
  PalleteActionTypes,
} from "../actions/palleteActions";
import { Pallete } from "../store/types/types";

// 상태 타입 정의
export interface PalleteState {
  palletes: Pallete[];
}

// 초기 상태
const initialState: PalleteState = {
  palletes: [],
};

// 리듀서
const palleteReducer = (
  state = initialState,
  action: PalleteActionTypes
): PalleteState => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        palletes: [...state.palletes, action.payload], // 새로운 팔레트를 추가
      };
    case DELETE:
      return {
        ...state,
        palletes: [...state.palletes.filter((_, i) => i !== action.payload)], // 해당 인덱스의 팔레트를 제외하고 새로운 배열을 생성
      };
    case EDIT:
      return {
        ...state,
        palletes: [
          ...state.palletes.map((pallete, i) =>
            i === action.payload.index ? action.payload.pallete : pallete
          ), // 해당 인덱스의 팔레트를 수정하고 새로운 배열을 생성
        ],
      };
    case PLACE_ADD:
      return {
        ...state,
        palletes: [
          ...state.palletes.map((pallete, i) =>
            i === action.payload.pallete_index
              ? {
                  ...pallete,
                  places: [...pallete.places, action.payload.place], // 해당 인덱스의 팔레트에 새로운 장소를 추가
                }
              : pallete
          ),
        ],
      };
    case PLACE_DEL:
      return {
        ...state,
        palletes: [
          ...state.palletes.map((pallete, i) =>
            i === action.payload.pallete_index
              ? {
                  ...pallete,
                  places: [
                    ...pallete.places.filter(
                      (_, j) => j !== action.payload.place_index
                    ), // 해당 인덱스의 팔레트에서 해당 인덱스의 장소를 제외하고 새로운 배열을 생성
                  ],
                }
              : pallete
          ),
        ],
      };
    case PLACE_ORDER_CHANGE:
      return {
        ...state,
        palletes: [
          ...state.palletes.map((pallete, i) =>
            i === action.payload.pallete_index
              ? {
                  ...pallete,
                  places: pallete.places.reduce((acc, place, j) => {
                    if (j === action.payload.place_index) {
                      return acc;
                    } else if (j === action.payload.target_index) {
                      return [
                        ...acc,
                        pallete.places[action.payload.place_index],
                      ]; // 해당 인덱스의 장소를 해당 인덱스로 이동
                    } else {
                      return [...acc, place];
                    }
                  }, [] as Pallete["places"]),
                }
              : pallete
          ),
        ],
      };
    default:
      return state;
  }
};

export default palleteReducer;

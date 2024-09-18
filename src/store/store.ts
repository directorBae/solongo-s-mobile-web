// 전체 데이터 store 및 쿠키 관리

import { configureStore } from "@reduxjs/toolkit";
import palleteReducer from "../reducers/palleteReducers";

// 스토어 생성
const store = configureStore({
  reducer: palleteReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

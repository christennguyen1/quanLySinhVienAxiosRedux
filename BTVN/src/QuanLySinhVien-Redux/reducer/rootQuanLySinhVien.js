import { combineReducers } from "redux";
import { QuanLySinhVienLoading } from "./QuanLySinhVienLoading";
import { QuanLySinhVienReducer } from "./QuanLySinhVienReducer";

export const rootQuanLySinhVien = combineReducers({
    QuanLySinhVienReducer,
    QuanLySinhVienLoading,
})
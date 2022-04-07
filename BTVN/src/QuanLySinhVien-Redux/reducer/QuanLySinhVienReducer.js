import { CAP_NHAT_DANH_SACH, SET_DANH_SACH, SUA_DANH_SACH, THEM_DANH_SACH, XOA_DANH_SACH } from "../constant/QuanLySinhVienConstant";

let initailState = {
    dssv: [],
    editSinhVien: null,
}

export const QuanLySinhVienReducer = (state = initailState, action) => {
    switch (action.type) {
        case SET_DANH_SACH: {
            state.dssv = action.setAction;
            return { ...state };
        }
        case XOA_DANH_SACH: {
            let id = action.xoaAction;
            let cloneArr = [...state.dssv];
            let index = cloneArr.findIndex((item) => {
                return item.id == id;
            })
            index !== -1 && cloneArr.splice(index, 1);
            state.dssv = cloneArr;
            return { ...state };
        }
        case THEM_DANH_SACH: {
            let id = action.themAction.id;
            if (action.themAction.id.trim() === '' && action.themAction.name.trim() === '' && action.themAction.email.trim() === '' && action.themAction.phone.trim() === '') {
                alert("Hãy nhập đầy đủ thông tin");
                return { ...state }
            }
            let cloneArr = [...state.dssv];
            let index = cloneArr.findIndex((item) => {
                return (item.id === id)
            })
            if (index !== -1) {
                alert("Trùng sinh viên mời bạn nhập lại")
                return { ...state }
            }
            else {
                cloneArr.push(action.themAction);
                state.dssv = cloneArr;
                return { ...state };
            }
        }
        case SUA_DANH_SACH: {
            state.editSinhVien = action.suaAction;
            return { ...state };
        }
        case CAP_NHAT_DANH_SACH: {
            let id = action.capNhatAction.id;
            let cloneArr = [...state.dssv];
            let index = cloneArr.findIndex((item) => {
                return (item.id === id)
            })
            if (index !== -1) {
                cloneArr[index] = action.capNhatAction;
            }
            state.dssv = cloneArr;
            return { ...state };
        }
        default:
            return { ...state };
    }
}

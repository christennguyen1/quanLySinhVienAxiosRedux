import { CAP_NHAT_DANH_SACH, SET_DANH_SACH, SUA_DANH_SACH, THEM_DANH_SACH, XOA_DANH_SACH } from "../constant/QuanLySinhVienConstant"

export const SetDanhSachActions=(value)=>{
    return {
        type:SET_DANH_SACH,
        setAction:value,
    }
}

export const XoaDanhSachActions=(value)=>{
    return {
        type:XOA_DANH_SACH,
        xoaAction:value,
    }
}

export const ThemDanhSachActions=(value)=>{
    return {
        type:THEM_DANH_SACH,
        themAction:value,
    }
}

export const SuaDanhSachActions=(value)=>{
    return {
        type:SUA_DANH_SACH,
        suaAction:value,
    }
}

export const ResetDanhSachActions=()=>{
    return {
        type:SUA_DANH_SACH,
        payload:null,
    }
}

export const UpdateDanhSachActions=(value)=>{
    return {
        type:CAP_NHAT_DANH_SACH,
        capNhatAction:value,
    }
}
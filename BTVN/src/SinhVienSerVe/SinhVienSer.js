import axios from "axios";


const BASE_URL="https://62494d6f20197bb46271495a.mockapi.io/sv";

export const SinhVienSer = {
    layDanhSachSinhVien: ()=>{
        return axios({
            method:"GET",
            url: BASE_URL,
        })
    },
    xoaSinhVien: (id)=>{
        return axios({
            method:"DELETE",
            url: `${BASE_URL}/${id}`
        })
    },
    themSinhVien: (_data)=>{
        return axios({
            method:"POST",
            url: BASE_URL,
            data:_data,
        })
    },
    capNhatSinhVien: (id,_data)=>{
        return axios({
            method:"PUT",
            url: `${BASE_URL}/${id}`,
            data:_data,
        })
    }
}
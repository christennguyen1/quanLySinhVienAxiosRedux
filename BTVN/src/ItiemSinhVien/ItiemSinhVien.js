import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SetDanhSachActions, SuaDanhSachActions, XoaDanhSachActions } from '../QuanLySinhVien-Redux/actions/QuanLySinhVienActions';
import { SinhVienSer } from '../SinhVienSerVe/SinhVienSer';

 class ItiemSinhVien extends Component {

  xoaSinhVienAxios=()=>{
    SinhVienSer.xoaSinhVien(this.props.sv.id)
    .then((res)=>{
        console.log(res);
        SinhVienSer.layDanhSachSinhVien()
        .then((res)=>{
          console.log("thành công",res);
          this.props.setDssv(res.data)
        })
        .catch((err)=>{
          console.log(err);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  render() {
      let {sv} = this.props;
    return (
          <tr>
          <td>{sv.id}</td>
          <td>{sv.name}</td>
          <td>{sv.email}</td>
          <td>{sv.phone}</td>
          <td  className="flex">
              <button className="btn btn-success"
              data-toggle="modal" data-target="#myModal"
              onClick={()=>{
                this.props.handleSuaSinhVien(sv);
              }}
              >Sửa</button>
              <button className="btn btn-danger ml-1" 
              onClick={()=>{
                this.xoaSinhVienAxios();
              }}
              >Xóa</button>
               <button className="btn btn-primary ml-1" 
              ><NavLink to={`/detail/${sv.id}`} className="text-white">Xem chi tiết</NavLink></button>
          </td>
          </tr>
    )
  }
}

let mapDispatchToProps=(dispatch)=>{
  return {
    handleSuaSinhVien:(value)=>{
      dispatch(SuaDanhSachActions(value))
    },
    setDssv:(value)=>{
      dispatch(SetDanhSachActions(value))
    }
  }
}

export default connect(null,mapDispatchToProps)(ItiemSinhVien)
import React, { Component } from 'react'
import DanhSachSinhVien from '../DanhSachSinhVien/DanhSachSinhVien'
import ModalSinhVien from '../ModalSinhVien/ModalSinhVien'
import { connect } from 'react-redux'
import { SinhVienSer } from '../SinhVienSerVe/SinhVienSer'
import { SetDanhSachActions } from '../QuanLySinhVien-Redux/actions/QuanLySinhVienActions'
import { bat_loading_actions, tat_loading_actions } from '../QuanLySinhVien-Redux/actions/QuanLySinhVienLoadingActions'


 class QuanLySinhVienAxios extends Component {
   
  componentDidMount(){
    this.props.batLoading()
    SinhVienSer.layDanhSachSinhVien()
    .then((res)=>{
      console.log(res);
      this.props.tatLoading()
      this.props.setDssv(res.data)
    })
    .catch((err)=>{
      this.props.tatLoading()
      console.log(err);
    })
  }
  
  render() {
    return (
      <div>
         <p className="display-3 pt-2 text-center">Quản lí sinh viên</p>
          <ModalSinhVien />
          <DanhSachSinhVien/>
      </div>
    )
  }
}

let mapDispatchToProps=(dispatch)=>{
  return {
    setDssv: (value)=>{
      dispatch(SetDanhSachActions(value))
    },
    batLoading: ()=>{
      dispatch(bat_loading_actions())
    },
    tatLoading: ()=>{
      dispatch(tat_loading_actions())
    }
  }
}

export default connect(null,mapDispatchToProps)(QuanLySinhVienAxios)
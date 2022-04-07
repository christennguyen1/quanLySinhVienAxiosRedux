import React, { Component } from 'react'
import ItiemSinhVien from '../ItiemSinhVien/ItiemSinhVien'
import { connect } from 'react-redux'

class DanhSachSinhVien extends Component {
  render() {
    return (
      <div className="container p-3">
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Control</th>
          </thead>
          <tbody>
            {this.props.dssv.map((itiem) => {
              return <ItiemSinhVien key={itiem.id} sv={itiem} />
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    dssv: state.QuanLySinhVienReducer.dssv,
  }
}

export default connect(mapStateToProps, null)(DanhSachSinhVien)
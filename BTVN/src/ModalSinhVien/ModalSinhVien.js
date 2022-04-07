import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ResetDanhSachActions, SetDanhSachActions, ThemDanhSachActions, UpdateDanhSachActions } from '../QuanLySinhVien-Redux/actions/QuanLySinhVienActions'
import { SinhVienSer } from '../SinhVienSerVe/SinhVienSer'

 class ModalSinhVien extends Component {
    state={
        sinhVien:{
            id:"",
            name:"",
            email:"",
            phone:"",
        },
        disabled:false,
    }

    handleOnChange(event){
        this.setState({sinhVien:{...this.state.sinhVien,[event.target.name]:event.target.value}})
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("nextPorps",nextProps);
        if(nextProps.editSinhVien){
            this.setState({sinhVien:nextProps.editSinhVien,disabled:true});
        }
        else{
            this.setState({sinhVien:{
                id:"",
                name:"",
                email:"",
                phone:"",
            }, disabled:false});
        }
    }


    themSinhVien=(e)=>{
        SinhVienSer.themSinhVien(e)
        .then((res)=>{
            console.log("thành công",res);
            SinhVienSer.layDanhSachSinhVien()
            .then((res)=>{
              console.log(res);
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

    capNhatSinhVien=()=>{
        SinhVienSer.capNhatSinhVien(this.state.sinhVien.id,this.state.sinhVien)
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
    console.log("edit",this.props.editSinhVien);
    return (
      <div className="container">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={()=>{
                    this.props.handleReset()
                }} >
                   Thêm sinh viên
                </button>
                {/* The Modal */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">{this.props.editSinhVien?"Cập nhật sinh viên":"Thêm sinh viên"}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div class="form-group">
                                    <div>
                                        <label htmlFor="id" >Id</label>
                                       {this.state.disabled ? ( <input type="text" name="id" disabled id="id"  className="form-control" placeholder aria-describedby="helpId" value={this.state.sinhVien.id}
                                        onChange={(event)=>{
                                            this.handleOnChange(event)
                                        }}
                                        />) : ( <input type="text" name="id" id="id"  className="form-control" placeholder aria-describedby="helpId" value={this.state.sinhVien.id}
                                        onChange={(event)=>{
                                            this.handleOnChange(event)
                                        }}
                                        />)}
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div>
                                    <label htmlFor="name" >Name</label>
                                        <input type="text" name="name" id="name" className="form-control" placeholder aria-describedby="helpId" value={this.state.sinhVien.name}
                                        onChange={(event)=>{
                                            this.handleOnChange(event)
                                        }}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div>
                                    <label htmlFor="email" >Email</label>
                                        <input type="text" name="email" id="email" className="form-control" placeholder aria-describedby="helpId" value={this.state.sinhVien.email}
                                        onChange={(event)=>{
                                            this.handleOnChange(event)
                                        }}
                                        />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div>
                                    <label htmlFor="phone" >Phone</label>
                                        <input type="text" name="phone" id="phone" className="form-control" placeholder aria-describedby="helpId" value={this.state.sinhVien.phone}
                                        onChange={(event)=>{
                                            this.handleOnChange(event)
                                        }}/>
                                    </div>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                               {this.props.editSinhVien ?   
                                 (<button type="button" className="btn btn-success" data-dismiss="modal"
                                 onClick={()=>{
                                    this.capNhatSinhVien()
                                }}
                                >Cập nhật</button>) :
                                (<button type="button" className="btn btn-danger" data-dismiss="modal"
                                onClick={()=>{
                                    this.themSinhVien(this.state.sinhVien)
                                }}
                                >Lưu</button>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        handleThemSinhVien:(value)=>{
            dispatch(ThemDanhSachActions(value))
        },
        handleReset:()=>{
            dispatch(ResetDanhSachActions())
        },
        handleUpdateSinhVien:(value)=>{
            dispatch(UpdateDanhSachActions(value))
        },
        setDssv:(value)=>{
            dispatch(SetDanhSachActions(value))
        }
    }
}

let mapStateToProps=(state)=>{
    return {
        editSinhVien:state.QuanLySinhVienReducer.editSinhVien,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalSinhVien)
import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { bat_loading_actions, tat_loading_actions } from '../../QuanLySinhVien-Redux/actions/QuanLySinhVienLoadingActions';

 class ChiTietSinhVien extends Component {
    state={
        ThongTinChiTiet:{
            name:"",
            email:"",
            phone:"",
        }
    }

    componentDidMount(){
        let idUrl=this.props.match.params.id;
        this.props.batLoading();
        axios({
            method:"GET",
            url:`https://62494d6f20197bb46271495a.mockapi.io/sv/${idUrl}`
        })
        .then((res)=>{
            this.setState({ThongTinChiTiet:res.data});
            this.props.tatLoading();
        })
        .catch((err)=>{
            this.props.tatLoading();
            console.log(err);
        })
    }

  render() {
    return (
        this.props.isLoading ?
     (<div style={{display:"flex", justifyContent:"center",alignItems:"center",position:"fixed", width:"100vw", height:"100vh", background:"white",top:"0",left:"0"}}>
           <ReactLoading type={"spin"} color={"black"} height={100} width={100} />
      </div>)
      : 
      (<div className="container p-5">
          <p>Tên: {this.state.ThongTinChiTiet?.name}</p>
          <p>Email: {this.state.ThongTinChiTiet?.email}</p>
          <p>Phone: {this.state.ThongTinChiTiet?.phone}</p>
      </div>)
    )
  }
}

let mapStateToProps=(state)=>{
    return {
        isLoading:state.QuanLySinhVienLoading.isLoading,
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        batLoading: ()=>{
            dispatch(bat_loading_actions())
        },
        tatLoading: ()=>{
             dispatch(tat_loading_actions())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChiTietSinhVien)
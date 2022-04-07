import React, { Component } from 'react'
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';

 class LoadingComponent extends Component {
  render() {
    return (
        this.props.isLoading ?
     ( <div style={{display:"flex", justifyContent:"center",alignItems:"center",position:"fixed", width:"100vw", height:"100vh", background:"white",top:"0",left:"0"}}>
           <ReactLoading type={"spin"} color={"black"} height={100} width={100} />
      </div>)
      : (<></>)
    )
  }
}

let mapStateToProps=(state)=>{
    return {
        isLoading:state.QuanLySinhVienLoading.isLoading,
    }
}

export default connect(mapStateToProps,null)(LoadingComponent)
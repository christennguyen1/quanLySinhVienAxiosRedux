import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavRouter extends Component {
  render() {
    return (
      <div className="container m-5">
         <NavLink exact activeClassName="text-danger" className="mx-3" to="/">Trang chủ</NavLink>

         <NavLink activeClassName="text-danger" className="mx-3" to="/dssv">Danh sách</NavLink>
      </div>
    )
  }
}

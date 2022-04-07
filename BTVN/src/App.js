import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import QuanLySinhVienAxios from './QuanLySinhVien-Axios/QuanLySinhVienAxios';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './Page-QLSV/Home/HomePage';
import ChiTietSinhVien from './Page-QLSV/ChiTiet/ChiTietSinhVien';
import NavRouter from './Components/NavRouter/NavRouter';
import LoadingComponent from './Components/Loading/LoadingComponent';


function App() {
  return (
    <BrowserRouter>
    <LoadingComponent />
      <NavRouter />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/dssv"} component={QuanLySinhVienAxios} />
        <Route path={"/detail/:id"} component={ChiTietSinhVien} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

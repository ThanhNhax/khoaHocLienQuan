import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Setup redux
import store from './redux/configStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import Home from './pages/Home/Home';
import BaiTapGioHang from './pages/BaiTapGioHang/BaiTapGioHang';
import Link from './pages/Link/Link';
import BTGioHangRedux from './pages/BiaTapRedux/BaiTapGioHang/BTGioHangRedux';
import Detail from './pages/Detail/Detail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='' element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail />}> </Route>
          </Route>
          <Route path='baitapgiohang' element={<BaiTapGioHang />}></Route>
          <Route index element={<Home />}></Route>
          <Route path='/link' element={<Link />}></Route>
          <Route path='/giohangredux' element={<BTGioHangRedux />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

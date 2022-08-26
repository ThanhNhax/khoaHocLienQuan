import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalGioHang from "./ModalGioHang";
import phonData from "../../data/phonData.json";
export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }
  themGioHang = (SPChon) => {
    //B1: từ sp được chọn tạo ra sp giỏ hàng
    let spGioHang = {
      maSP: SPChon.maSP,
      tenSP: SPChon.tenSP,
      giaBan: SPChon.giaBan,
      hinhAnh: SPChon.hinhAnh,
      soLuong: 1,
    };
    // kiểm tra spChon có trong giỏ hàng chưa
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      //Sản phẩm có trong giỏ hàng
      gioHangCapNhat[index].soLuong += 1;
    } else {
      //Sản phẩm được Click chưa có trong this.state.giỏ hàng
      gioHangCapNhat.push(spGioHang);
    }
    // Setstate
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  // Sự kiện xóa
  xoaGioHang = (maSP) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  //tăng giảm số lượng
  tangGiamSoLuong = (maSp, tangGiam) => {
    // tangGiam ===true : Tăng , false: giảm
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSp);
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <h3 className="text-center text-success">Bài tập giỏ hàng</h3>
        <ModalGioHang
          gioHang={this.state.gioHang}
          xoa={this.xoaGioHang}
          tangGiam={this.tangGiamSoLuong}
        />
        <div
          className="text-right"
          data-bs-toggle="modal"
          data-bs-target="#modelId"
        >
          <span
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            className="text-danger "
          >
            Giỏ hàng ({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPham
          mangSanPham={phonData}
          themGioHang={this.themGioHang}
        />
      </div>
    );
  }
}

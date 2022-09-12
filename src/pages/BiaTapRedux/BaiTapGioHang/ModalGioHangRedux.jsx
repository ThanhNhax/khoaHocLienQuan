import React, { Component } from "react";

// Kết nối redux
import { connect, Connect } from "react-redux";
class ModalGioHangRedux extends Component {
  renderGiohang = () => {
    return this.props.gioHang.map((sp, index) => {
      return (
        <tr key={index}>
          <td>{sp.maSp}</td>
          <td>{sp.tenSp}</td>
          <td>
            <img src={sp.hinhAnh} alt="..." width={75} />
          </td>
          <td>{sp.giaBan}</td>
          <td>{sp.soLuong}</td>
          <td>{sp.soLuong * sp.giaBan}</td>
          <td></td>
        </tr>
      );
    });
  };
  render() {
    // this.props .gioHang là thuộc tính nhận từ redux
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Giá bán </th>
              <th>Số lượng</th>
              <th>Thành Tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGiohang()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.gioHangReducer.gioHang,
  };
};

export default connect(mapStateToProps, null)(ModalGioHangRedux);

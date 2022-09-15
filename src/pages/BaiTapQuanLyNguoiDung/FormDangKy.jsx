import React from "react";

export default function FormDangKy() {
  return (
    <form className="card">
      <div className="card-header bg-dark text-light">Form Đăng Ký</div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <p>Tài Khoản</p>
              <input
                type="text"
                name=""
                id="taiKhoan"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <p>Mật Khẩu</p>
              <input
                type="password"
                name=""
                id="password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <p>Email</p>
              <input type="email" name="" id="email" className="form-control" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Họ tên</p>
              <input type="text" name="" id="hoTen" className="form-control" />
            </div>
            <div className="form-group">
              <p>Số điện thoại</p>
              <input
                type="text"
                name=""
                id="soDienThoai"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <p>Mã loại người dùng</p>
              <select naem="" id="maLoaiNguoiDung" className="form-control">
                <option value="khachHang">Khách Hàng</option>
                <option value="nhanVien">Nhân viên</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button type="submit" className="btn btn-success">
          Đăng ký
        </button>
        <button className="btn btn-primary mx-2" type="button">
          Cập nhật
        </button>
      </div>
    </form>
  );
}

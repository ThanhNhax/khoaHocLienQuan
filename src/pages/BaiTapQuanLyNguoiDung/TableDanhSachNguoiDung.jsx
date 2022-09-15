import React from "react";

export default function TableDanhSachNguoiDung() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tài khoản</th>
          <th>Họ tên</th>
          <th>Mật khẩu</th>
          <th>Email</th>
          <th>Số điện thoại</th>
          <th>Loại người dùng</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>vana</td>
          <td>Nguyễn Văn A</td>
          <td>123</td>
          <td>vana@email.com</td>
          <td>0945727250</td>
          <td>Khách hàng</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

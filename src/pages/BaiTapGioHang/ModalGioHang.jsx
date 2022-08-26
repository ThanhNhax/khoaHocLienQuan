import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    const { gioHang, xoa, tangGiam } = this.props;

    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: "800px", margin: "0 auto", marginTop: "100px" }}
          >
            <div className="modal-content ">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ Hàng</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((spGH, index) => {
                      return (
                        <tr key={index}>
                          <td>{spGH.maSP}</td>
                          <td>
                            <img
                              src={spGH.hinhAnh}
                              alt="hinhanh"
                              width={50}
                              height={70}
                            />
                          </td>
                          <td>{spGH.tenSP}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                tangGiam(spGH.maSP, true);
                              }}
                            >
                              +
                            </button>
                            {spGH.soLuong}
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                tangGiam(spGH.maSP, false);
                              }}
                            >
                              -
                            </button>
                          </td>

                          <td>{spGH.giaBan.toLocaleString()}</td>
                          <td>
                            {(spGH.giaBan * spGH.soLuong).toLocaleString()}
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                xoa(spGH.maSP);
                              }}
                              className="btn btn-danger mx-2"
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td>Tổng Tiền: </td>
                      <td>
                        {this.props.gioHang
                          .reduce((tong, sp, index) => {
                            return (tong += sp.soLuong * sp.giaBan);
                          }, 0)
                          .toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

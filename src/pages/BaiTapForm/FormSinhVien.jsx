import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  handleChange = (e) => {
    const { id, value } = e.target;
    //Gửi dữ liệu lên redux
    const action = {
      type: "HANDLE_CHANGE",
      payload: {
        id: id,
        value: value,
      },
    };
    this.props.dispatch(action);
  };
  handleSubmit = (e) => {
    //Chặn sự kiện reload của browser
    e.preventDefault();
    // Khi người dùng bấm nút submit => gửi dữ liệu người dùng nhập từ state => ra hàm addSinhVien
    const action = {
      type: "HANDLE_SUBMIT",
      payload: this.props.sinhVienInfo,
    };
    //Sử dụng this.props.dispatch gửi action lên store
    this.props.dispatch(action);
  };
  render() {
    let { err, sinhVienInfo } = this.props;
    return (
      <div>
        <form className="card mt-2" onSubmit={this.handleSubmit}>
          <div className=" card-header bg-dark text-light p-3">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body row">
            <div className="col-6 mt-2">
              <div className="form-group">
                <p>Mã SV</p>
                <input
                  value={sinhVienInfo.maSV}
                  className="form-control"
                  id="maSV"
                  name="maSV"
                  onInput={this.handleChange}
                />
                <p className="text-danger">{err.maSV}</p>
              </div>
              <div className="form-group">
                <p>Số điện thoại</p>
                <input
                  value={sinhVienInfo.soDienThoai}
                  className="form-control"
                  id="soDienThoai"
                  name="soDienThoai"
                  onInput={this.handleChange}
                />
                <p className="text-danger">{err.soDienThoai}</p>
              </div>
            </div>
            <div className="col-6 mt-2">
              <div className="form-group">
                <p>Họ tên</p>
                <input
                  value={sinhVienInfo.tenSV}
                  className="form-control"
                  id="tenSV"
                  name="tenSV"
                  onInput={this.handleChange}
                />
                <p className="text-danger">{err.tenSV}</p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  value={sinhVienInfo.email}
                  className="form-control"
                  id="email"
                  name="email"
                  onInput={this.handleChange}
                />
                <p className="text-danger">{err.email}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-success  mx-2">Thêm sinh viên</button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                const action = {
                  type: "UPDATE_SINHVIEN",
                };

                this.props.dispatch(action);
              }}
            >
              Update
            </button>
            <div className="form-group m-2">
              <input
                type="text"
                id="search"
                className="form-control"
                placeholder="Search"
                // onInput={this.handleChange()}
              />
              <button type="button" className="btn btn-primary mt-2">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sinhVienInfo: state.sinhVienReducer.sinhVienInfo,
  err: state.sinhVienReducer.err,
});

export default connect(mapStateToProps)(FormSinhVien);

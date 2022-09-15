import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
  render() {
    console.log(this.props);
    let { arrSinhVien } = this.props;
    return (
      <table className="table mt-2">
        <thead className="bg-dark text-light">
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrSinhVien.map((sv, index) => {
            return (
              <tr key={index}>
                <td>{sv.maSV}</td>
                <td>{sv.tenSV}</td>
                <td>{sv.email}</td>
                <td>{sv.soDienThoai}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      //Tạo ra action xoá
                      const action = {
                        type: "DELETE_SINHVIEN",
                        payload: index,
                      };

                      this.props.dispatch(action);
                    }}
                  >
                    Del
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      //Tạo ra action edit
                      const action = {
                        type: "EDIT_SINHVIEN",
                        payload: index,
                      };

                      this.props.dispatch(action);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  componentDidMount() {
    // this.setState({
    //   arrSinhVien: this.layStore(),
    // });
    const action = {
      type: "LAY_STORE",
    };

    this.props.dispatch(action);
  }
}

const mapStateToProps = (state) => ({
  arrSinhVien: state.sinhVienReducer.arrSinhVien,
});

export default connect(mapStateToProps)(TableSinhVien);

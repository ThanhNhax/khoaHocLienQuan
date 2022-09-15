import React, { Component } from "react";

export default class TableProduct extends Component {
  render() {
    let { arrProduct, delProduct, editProduct } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>img</th>
            <th>name</th>
            <th>price</th>
            <th>type</th>
            <th>description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((prod, index) => {
            return (
              <tr key={index}>
                <td>{prod.id}</td>
                <td>
                  <img width={50} src={prod.img} alt="" />
                </td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.productType}</td>
                <td>{prod.description}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      delProduct(prod.id);
                    }}
                  >
                    Del
                  </button>
                  <button
                    className="btn btn-primary mx-2 "
                    onClick={() => {
                      editProduct(prod);
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
}

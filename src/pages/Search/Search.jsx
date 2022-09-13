import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
let timeout = null;
export default function Search() {
  const [arrProduct, setArrProduct] = useState([]);
  // Đưa dữ liệu lên url: setSearchParams
  // Lấy dữ liệu từ url về : searchParam.get('tên params )

  let [searchParam, setSearchParam] = useSearchParams();
  const [keyword, setKeyWord] = useState(searchParam.get("keyword"));
  const handleSubmit = (e) => {
    e.preventDefault();
    getProductByKeywordAPi();
  };
  const getProductByKeywordAPi = async () => {
    // Call api
    try {
      if (searchParam.get("keyword") !== null) {
        const result = await axios({
          url: `https://shop.cyberlearn.vn/api/product?keyword=${keyword}`,
          method: "GET",
        });
        setArrProduct(result.data.content);
        console.log(result.data.content);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { value } = e.target;
    // Khi người dùng gõ phím thì setSeSearchParam thực thi => Dẫn đến function được render lại để kích useEffect chạy
    setSearchParam({
      keyword: value,
    });
  };
  useEffect(() => {
    // Nếu state thay đổi thì link params(?keyword) trên url thay đổi theo
    timeout = setTimeout(() => {
      getProductByKeywordAPi();
    }, 1000);
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [searchParam.get("keyword")]);
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Search</h3>
      <div className="form-group">
        <p>Nhập từ khoá</p>
        <div className="input-group-prepend">
          <input
            className="form-control"
            id="keyword"
            onChange={handleChange}
            value={searchParam.get("keyword")}
          />
          <button className="btn bg-dark text-white mt-2">Search</button>
        </div>
      </div>
      <div className="mt-2">
        <p>Kết quả tìm kiếm</p>
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img src={item.image} alt={"..."} />
                </div>
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button className="btn btn-success">View detail</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
}

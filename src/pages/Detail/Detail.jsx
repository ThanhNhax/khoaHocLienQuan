import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  const [productDetail, setProductDetail] = useState({});
  const navigate = useNavigate();
  const getAPiProductDetail = async () => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + params.id,
        method: "GET",
      });
      console.log("Detail:", result.data.content);
      setProductDetail(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAPiProductDetail();
  }, [params.id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={productDetail.image} alt="..." />
        </div>
        <div className="col-8">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
      <div className="mt-2">
        <h3>Related Product</h3>

        <div className="row">
          {productDetail.relatedProducts?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card">
                  <img src={item.image} alt="..." />
                  <div className="card-body">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <NavLink
                      to={`/detail/${item.id}`}
                      className="btn btn-success"
                    >
                      View detail
                    </NavLink>
                    <button
                      className="btn btn-dark text-light mx-2"
                      onClick={() => {
                        navigate(`/detail/${item.id}`);
                      }}
                    >
                      View detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

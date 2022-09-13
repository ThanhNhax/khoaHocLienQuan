import React, { Component } from "react";
import { NavLink, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to={"/"}>
        Khóa Học Liên Quan
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink
              style={({ isActive }) =>
                isActive ? { borderRadius: "5px" } : {}
              }
              className={(props) =>
                props.isActive ? " nav-link bg-light text-dark" : "nav-link"
              }
              to="/"
            >
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) =>
                isActive ? { borderRadius: "5px" } : {}
              }
              className={({ isActive }) =>
                isActive ? " nav-link bg-light text-dark" : "nav-link"
              }
              to="/link"
            >
              Link
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to={"/"}
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Bài Tập
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="baitapgiohang">
                Bài Tập Giỏ hàng
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to={"/"}
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Redux Bài Tập
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="giohangredux">
                Redux Giỏ hàng
              </NavLink>
            </div>
          </li>
        </ul>
        <form
          className="d-flex my-2 my-lg-0"
          onSubmit={(e) => {
            e.preventDefault();
            const keyword = document.querySelector("#keyword").value;
            navigate(`/search?keyword=${keyword}`);
            // console.log(keyword);
          }}
        >
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
            id="keyword"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

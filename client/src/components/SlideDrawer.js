import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SlideDrawer({ show, handleShow }) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <>
      <div className={show && "backdrop"} onClick={handleShow}></div>
      <div className={`flex column side-drawer ${show && "open"}`}>
        <div className="header flex justify-between">
          <h3>
            Olá,
            {userInfo ? (
              <span>{` ${userInfo.name}`}</span>
            ) : (
              <Link to="/signin" onClick={handleShow}>
                Faça seu login
              </Link>
            )}
          </h3>
          <div className="close" onClick={handleShow}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="flex column p-3">
          <Link to="/search/category/livros" onClick={handleShow}>
            Livros
          </Link>
          <Link to="/search/category/hqs" onClick={handleShow}>
            HQs
          </Link>
          <Link to="/search/category/mangás" onClick={handleShow}>
            Mangás
          </Link>
          <div className="flex column none sm-up">
            <div className="flex column">
              <Link to="/cart" onClick={handleShow}>
                Carrinho
              </Link>
              {userInfo && (
                <>
                  <Link to="/orderhistory" onClick={handleShow}>
                    Histórico
                  </Link>
                  <Link to="/signout" onClick={handleShow}>
                    Sair
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideDrawer;

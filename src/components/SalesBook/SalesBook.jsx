import React from "react";
import "./salesbook.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart, fetchBook } from "../../redux/Reducer/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SalesBook = () => {

  const dispatch = useDispatch()

  const data = useSelector(state => state.cart.data.message)

  useEffect(() => {
    dispatch(fetchBook())
  }, [])

  

  const notify = () =>
    toast(
      <Link to="/cart" style={{ textDecoration: "none" }}>
        "Product added to cart !"
      </Link>
    );

  return (
    <div id="salesbook">
      <div className="container">
        <div className="title">
          <h6>ƏN SON ƏLAVƏ EDİLƏN KİTABLAR</h6>
        </div>
        <div className="liner">
          <h4>ENDIRIMLI KITABLAR</h4>
        </div>
        <div className="books">
          <div className="bottom">
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={2}
              slidesPerView={4}
              navigation
              scrollbar={{ draggable: false }}
            >
              {data &&
                data.map((book) => (
                  <SwiperSlide key={book.id}>
                    <div className="containerr">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="box">
                            <div className="image">
                              <Link to="/book">
                                <img
                                  src={book.photoURL}
                                  alt=""
                                />
                              </Link>
                              <div className="icons">
                                <Link to="/book">
                                  <i className="fa-solid fa-eye icon"></i>
                                </Link>
                                <br />
                                <i className="fa-solid fa-heart icon"></i>
                                <br />
                                <i className="fa-solid fa-bag-shopping icon" onClick={() => dispatch(addToCart(book))}></i>
                              </div>
                            </div>
                            <div className="text">
                              <span className="box1 super">{book.name}</span>
                              <span className="box1 number">{book.price}₼</span>
                              <span className="sebet" onClick={() => {
                                dispatch(addToCart(book));
                                notify()
                              }}>Səbətə at</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
      <ToastContainer
        limit={3}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
};



export default SalesBook;

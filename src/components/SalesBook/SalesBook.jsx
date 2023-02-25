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
import { addToCart, fetchBook } from "../../redux/Reducer/cartReducer";

const SalesBook = () => {

  const dispatch = useDispatch()

  const data = useSelector(state => state.cart.data.message)

  useEffect(() => {
    dispatch(fetchBook())
  }, [])

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
              { data &&
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
                                <i className="fa-solid fa-eye icon"></i>
                                <br />
                                <i className="fa-solid fa-heart icon"></i>
                                <br />
                                <i className="fa-solid fa-bag-shopping icon"></i>
                              </div>
                            </div>
                            <div className="text">
                              <span className="box1 super">{book.title}</span>
                              <span className="box1 number">{book.price}</span>
                              <span className="sebet" onClick={() => dispatch(addToCart(book))}>Səbətə at</span>
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
    </div>
  );
};

export default SalesBook;

import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialty from "../../../assets/specialty/co-xuong-khop1.jpg";

class Specialty extends Component {
  render() {
    let settings = {
      infinite: true,
      dots: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="section-specialty">
        <div className="specialty-container">
          <div className="specialty-header">
            <span className="title-section">Chuyên khoa phổ biến </span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="specialty-body">
            <Slider {...settings}>
              <div className="specialty-customize">
                <div className="bg-img"></div>
                <div> Cơ xương khớp1</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img"></div>
                <div> Cơ xương khớp1</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img"></div>
                <div> Cơ xương khớp1</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img"></div>
                <div> Cơ xương khớp1</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img"></div>
                <div> Cơ xương khớp1</div>
              </div>
              <div className="specialty-customize">
                <div className="bg-img"></div>
                <div> Cơ xương khớp1</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    // :state.app.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
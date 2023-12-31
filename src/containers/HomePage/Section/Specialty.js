import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

import specialty from "../../../assets/specialty/co-xuong-khop1.jpg";

class Specialty extends Component {
  render() {

    
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Chuyên khoa phổ biến </span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-img section-specialty" ></div>
                <div> Cơ xương khớp1</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty" ></div>
                <div> Cơ xương khớp1</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty" ></div>
                <div> Cơ xương khớp1</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty" ></div> 
                <div> Cơ xương khớp1</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty" ></div>
                <div> Cơ xương khớp1</div>
              </div>
              <div className="section-customize">
                <div className="bg-img section-specialty" ></div>
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

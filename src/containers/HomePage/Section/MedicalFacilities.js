import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacilities.scss";
import Slider from "react-slick";


class MedicalFacilities extends Component {
  render() {
    return (
      
          <div className="section-share section-medical-facility">
          <div className="section-container">
            <div className="section-header">
              <span className="title-section">Cơ sở y tế nổi bật </span>
              <button className="btn-section">Xem thêm</button>
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                <div className=" section-customize">
                  <div className="bg-img section-medical-facility"></div>
                  <div> Hệ thống y tế Thu Cúc 1</div>
                </div>
                <div className="section-customize">
                  <div className="bg-img section-medical-facility"></div>
                  <div> Hệ thống y tế Thu Cúc 2</div>
                </div>
                <div className="section-customize">
                  <div className="bg-img section-medical-facility"></div>
                  <div> Hệ thống y tế Thu Cúc 3</div>
                </div>
                <div className="section-customize">
                  <div className="bg-img section-medical-facility"></div>
                  <div> Hệ thống y tế Thu Cúc 4</div>
                </div>
                <div className="section-customize">
                  <div className="bg-img section-medical-facility"></div>
                  <div> Hệ thống y tế Thu Cúc 5</div>
                </div>
                <div className="section-customize">
                  <div className="bg-img section-medical-facility"></div>
                  <div> Hệ thống y tế Thu Cúc 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacilities);

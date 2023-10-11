import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i class="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b> Chuyên khoa</b>
                </div>
                <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b> Cơ sở y tế</b>
                </div>
                <div className="subs-title">Chọn bệnh viện phòng khám</div>
              </div>
              <div className="child-content">
                <div>
                  <b> Bác sĩ</b>
                </div>
                <div className="subs-title">Chọn bác sĩ giỏi</div>
              </div>
              <div>
                <div className="child-content">
                  <b> Gói khám</b>
                </div>
                <div className="subs-title">Khám sức khỏe tổng quát</div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i class="fas fa-question"></i>Hỗ Trợ
              </div>
              <div className="flag">VN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">NỀN TẢNG Y TẾ</div>
            <div className="title2">CHĂM SOC SỨC KHỎE TOÀN DIỆN </div>
            <div className="search">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Tim dung dep trai"></input>
            </div>
          </div>
          <div className="content-dow">
            <div className="optines">
              <div className="option-child">
                <div className="icon-child"><i class="fas fa-hospital-alt"></i></div>
                <div className="text-child">Khám Chuyên Khoa</div>
              </div>
              <div className="option-child">
                <div className="icon-child"><i class="fas fa-mobile-alt"></i></div>
                <div className="text-child">Khám Từ Xa</div>
              </div>
              <div className="option-child">
                <div className="icon-child"><i class="fas fa-hospital"></i></div>
                <div className="text-child">Khám Tổng Quát</div>
              </div>
              <div className="option-child">
                <div className="icon-child"><i class="fas fa-microscope"></i></div>
                <div className="text-child">Xét Nghiệm Y Học</div>
              </div>
              <div className="option-child">
                <div className="icon-child"><i class="fas fa-head-side-virus"></i></div>
                <div className="text-child">Sức Khỏe Tinh Thần</div>
              </div>
              <div className="option-child">
                <div className="icon-child"><i class="fa-solid fa-teeth"></i></div>
                <div className="text-child">Khám Nha Khoa</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

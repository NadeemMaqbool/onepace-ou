import React from "react";
import MainBanner from "../assets/images/banner.png";
import BgAnimatorDots from "../assets/images/banner/b4-dot-6.png";
import BrandingIcon from "../assets/images/services/main-home/icons/branding.png";
import webIcon from "../assets/images/services/main-home/icons/web.png";
import designIcon from "../assets/images/services/main-home/icons/designing.png";
import consultationIcon from "../assets/images/services/main-home/icons/consultation3.png";
import logo from "../assets/images/onepace-blue.png";

const Banner = () => {
  return (
    <div className="rs-banner style6">
      <div className="container rs-bg-animation">
        <div className="row">
          <div className="col-lg-12 col-md-7 text-part">
            
            <div className="banner-content z-index-1">
              <div className="logo-part">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <span className="sub-text">
                Websites & Designs that Drive Sales
              </span>
              <h1 className="title">
                From Start <br />
                <span className="blue-color">
                  To Standout Business
                  <br />
                </span>
                <span class="sub-title">
                  Craft Your
                  <span className="pink-color"> Brand Story</span> With Us
                </span>
              </h1>
              <p className="desc">
                creative ideas for your Websites & Designs that make a
                difference
              </p>
              <div class="rs-why-choose">
                <div class="container">
                  <div class="row">
                    <div class="services-wrap">
                      <div class="services-item">
                        <img src={BrandingIcon} alt="" />
                        Branding
                      </div>
                      <div class="services-item">
                        <img src={webIcon} alt="" />
                        Web / App Development
                      </div>
                      <div class="services-item">
                        <img src={designIcon} alt="" />
                        Graphics
                      </div>
                      <div class="services-item">
                        <img src={consultationIcon} alt="" />
                        Consultation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-us">
                <p>onePace OÜ Reg. 16263730</p>
                <p>Tallinn Estonia 12917</p>
                <p>info@onepace.ee</p>
              </div>
              <div class="footer-top">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-2 col-md-12 col-sm-12">
                      <ul class="footer-social md-mb-30 footer-at-bottom">
                        <li>
                          <span>
                            <i class="fa fa-facebook"></i>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-twitter"></i>
                          </span>
                        </li>

                        <li>
                          <span>
                            <i class="fa fa-pinterest-p"></i>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i class="fa fa-instagram"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rs-animation">
          <img className="dance3" src={BgAnimatorDots} alt="images" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

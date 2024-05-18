import React from 'react'
import './style.css'
import logo from '../assets/images/onepace-black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons'
import {faCalendarTimes} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div>
        <footer id="rs-footer" className="rs-footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 footer-widget">
                            <div className="footer-logo mb-30">
                                <a href="/">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                              <div className="textwidget pb-30"><p>Sedut perspiciatis unde omnis iste natus error sitlutem acc usantium doloremque denounce with illo inventore veritatis</p>
                              </div>
                              <ul className="footer-social md-mb-30">  
                                  <li> 
                                      <a href="/" target="_blank" ><span><i className="fa fa-facebook"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="/" target="_blank" ><span><i className="fa fa-twitter"></i></span></a> 
                                  </li>

                                  <li> 
                                      <a href="/" target="_blank" ><span><i className="fa fa-pinterest-p"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="" target="_blank"><span><i className="fa fa-instagram"></i></span></a> 
                                  </li>
                                                                           
                              </ul>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                            <h3 className="widget-title">IT Services</h3>
                            <ul className="site-map">
                                <li><a href="software-development.html">Software Development</a></li>
                                <li><a href="web-development.html">Web Development</a></li>
                                <li><a href="case-studies-single.html">Analytic Solutions</a></li>
                                <li><a href="cloud-and-devops.html">Cloud and DevOps</a></li>
                                <li><a href="product-design.html">Product Design</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 md-mb-30">
                            <h3 className="widget-title">Contact Info</h3>
                            <ul className="address-widget">
                                <li className="contactItems">
                                    <div className="footerIconArea">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <div className="desc">374 FA Tower, William S Blvd 2721, IL, USA</div>
                                </li>
                                <li className="contactItems">
                                    <div className="footerIconArea">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div className="desc">
                                       <a href="tel:(+880)155-69569">(+880)155-69569</a>
                                    </div>
                                </li>
                                <li className="contactItems">
                                    <div className="footerIconArea">
                                        <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                                    </div>
                                    <div className="desc">
                                        <a href="mailto:support@rstheme.com">support@onepace.ee</a>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
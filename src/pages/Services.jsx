import React from 'react'
import img1 from '../assets/images/services/style2/main-img/1.png'
import himg1 from '../assets/images/services/style2/hover-img/1.png'
import img2 from '../assets/images/services/style2/main-img/2.png'
import himg2 from '../assets/images/services/style2/hover-img/2.png'
import img3 from '../assets/images/services/style2/main-img/3.png'
import himg3 from '../assets/images/services/style2/hover-img/3.png'
import img4 from '../assets/images/services/style2/main-img/4.png'
import himg4 from '../assets/images/services/style2/hover-img/4.png'
import img5 from '../assets/images/services/style2/main-img/5.png'
import himg5 from '../assets/images/services/style2/hover-img/5.png'
import img6 from '../assets/images/services/style2/main-img/6.png'
import himg6 from '../assets/images/services/style2/hover-img/6.png'

const Services = () => {
  return (
    <div id="rs-services" className="rs-services style3 pt-110 pb-120 md-pt-75 md-pb-80">
        <div className="container">
            <div className="sec-title2 text-center mb-45">
                <span className="sub-text">Services</span>
                <h2 className="title testi-title">
                Our Featured Services
                </h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-20">
                    <div className="services-item">
                        <div className="services-icon">
                            <div className="image-part">
                                    <img className="main-img" src={img1} alt="logo" />
                                    <img className="hover-img" src={himg1} alt="logo" />
                            </div>
                        </div>
                        <div className="services-content">
                            <div className="services-text">
                                <h3 className="title"><a href="software-development.html">Software Development</a></h3>
                            </div>
                            <div className="services-desc">
                                <p>
                                        At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database.
                                </p>
                            </div>
                            <div className="serial-number">
                                    01 
                                </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-6 mb-20">
                    <div className="services-item pink-bg">
                        <div className="services-icon">
                            <div className="image-part">
                                    <img className="main-img" src={img2} alt="logo" />
                                    <img className="hover-img" src={himg2} alt="logo" />
                            </div>
                        </div>
                        <div className="services-content">
                            <div className="services-text">
                                <h3 className="title"><a href="web-development.html">Web Development</a></h3>
                            </div>
                            <div className="services-desc">
                                <p>
                                        At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database.
                                </p>
                            </div>
                            <div className="serial-number">
                                    02 
                                </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-6 mb-20">
                    <div className="services-item aqua-bg">
                        <div className="services-icon">
                            <div className="image-part">
                                    <img className="main-img" src={img3} alt="logo" />
                                    <img className="hover-img" src={himg3} alt="logo" />
                            </div>
                        </div>
                        <div className="services-content">
                            <div className="services-text">
                                <h3 className="title"><a href="analytic-solutions.html">Analytic Solutions</a></h3>
                            </div>
                            <div className="services-desc">
                                <p>
                                        At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database.
                                </p>
                            </div>
                            <div className="serial-number">
                                    03 
                                </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-6 sm-mb-20">
                    <div className="services-item paste-bg">
                        <div className="services-icon">
                            <div className="image-part">
                                    <img className="main-img" src={img4} alt="logo" />
                                    <img className="hover-img" src={himg4} alt="logo" />
                            </div>
                        </div>
                        <div className="services-content">
                            <div className="services-text">
                                <h3 className="title"><a href="cloud-and-devops.html">Clould & DevOps</a></h3>
                            </div>
                            <div className="services-desc">
                                <p>
                                        At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database.
                                </p>
                            </div>
                            <div className="serial-number">
                                    04 
                                </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-6 sm-mb-20">
                    <div className="services-item purple-bg">
                        <div className="services-icon">
                            <div className="image-part">
                                    <img className="main-img" src={img5} alt="logo" />
                                    <img className="hover-img" src={himg5} alt="logo" />
                            </div>
                        </div>
                        <div className="services-content">
                            <div className="services-text">
                                <h3 className="title"><a href="product-design.html">Product & Design</a></h3>
                            </div>
                            <div className="services-desc">
                                <p>
                                        At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database.
                                </p>
                            </div>
                            <div className="serial-number">
                                    05 
                                </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="services-item green-bg">
                        <div className="services-icon">
                            <div className="image-part">
                                <img className="main-img" src={img6} alt="logo" />
                                <img className="hover-img" src={himg6} alt="logo" />
                            </div>
                            <div className="services-content">
                                <div className="services-text">
                                    <h3 className="title"><a href="web-development.html">Database Administrator</a></h3>
                                </div>
                                <div className="services-desc">
                                    <p>At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio  data center for managing database.</p>
                                </div>
                                <div className="serial-number">06</div>
                            </div>
                            </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Services
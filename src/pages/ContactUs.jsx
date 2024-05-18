import React from 'react'

const ContactUs= () => {
  return (
        <div id="rs-contact" className="rs-contact pt-120 gray-color pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-box">
                            <div className="sec-title mb-45">
                                <span className="sub-text new-text white-color">Let's Talk</span>
                                <h2 className="title white-color">Speak With Expert Engineers.</h2>
                            </div>
                            <div className="address-box mb-25">
                                <div className="address-icon">
                                    <i className="fa fa-home"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Email:</span>
                                    <a href="tel:123222-8888">(123) 222-8888</a>
                                </div>
                            </div>
                            <div className="address-box mb-25">
                                <div className="address-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Phone:</span>
                                    <a href="#">support@rstheme.com</a>
                                </div>
                            </div>
                            <div className="address-box">
                                <div className="address-icon">
                                    <i className="fa fa-map-marker"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Address:</span>
                                    <div className="desc">New Jesrsy, 1201, USA</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-8 pl-70 md-pl-15">
                        <div className="contact-widget onepage-style">
                            <div className="sec-title2 mb-40">
                                <span className="sub-text contact mb-15">Get In Touch</span>
                                <h2 className="title testi-title">Fill The Form Below</h2>

                            </div>
                            <div id="form-messages"></div>
                            <form id="contact-form" method="post" action="mailer.php">
                                <fieldset>
                                    <div className="row">
                                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                            <input className="from-control" type="text" id="name" name="name" placeholder="Name" required="" />
                                        </div> 
                                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                            <input className="from-control" type="text" id="email" name="email" placeholder="E-Mail" required="" />
                                        </div>   
                                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                            <input className="from-control" type="text" id="phone" name="phone" placeholder="Phone Number" required="" />
                                        </div>   
                                        <div className="col-lg-6 mb-30 col-md-6 col-sm-6">
                                            <input className="from-control" type="text" id="website" name="website" placeholder="Your Website" required="" />
                                        </div>
                                    
                                        <div className="col-lg-12 mb-30">
                                            <textarea className="from-control" id="message" name="message" placeholder="Your message Here" required=""></textarea>
                                        </div>
                                    </div>
                                    <div className="btn-part">
                                        <div className="form-group mb-0">
                                            <input className="readon learn-more submit" type="submit" value="Submit Now" />
                                        </div>
                                    </div>  
                                </fieldset>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default ContactUs

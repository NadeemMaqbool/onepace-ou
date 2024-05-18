import React, {useState} from 'react'
import logo from '../assets/images/onepace-blue.png';

const Header = () => {
    const [scroll, setScroll] = useState(false)
    
    const stickyHeader = () => {
        if (window.scrollY > 90) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', stickyHeader)
    return (
    
    <div>
        <div className="full-width-header">
            {/* <!--Header Start--> */}
            <header id="rs-header" className="rs-header style2">
                {/* <!-- Menu Start --> */}
                <div className= {scroll ? "menu-area menu-sticky sticky" : "menu-area menu-sticky"}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="logo-part">
                                    <a href="/">
                                        <img src={logo} alt="logo" />
                                    </a>
                                </div>
                                <div className="mobile-menu">
                                    <a href="#" className="rs-menu-toggle rs-menu-toggle-close secondary">
                                        <i className="fa fa-bars"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9 text-right">
                                <div className="rs-menu-area">
                                    <div className="main-menu">
                                        <nav className="rs-menu pr-90 md-pr-0">
                                            <ul id="onepage-menu" className="nav-menu">
                                                <li> 
                                                    <a href="#rs-header">Home</a>
                                                </li>

                                                <li>
                                                    <a href="#rs-about">About Us</a>
                                                </li>

                                                <li> 
                                                    <a href="#rs-services">Services</a>
                                                </li>

                                                <li>
                                                    <a href="#rs-contact">Contact</a>
                                                </li>
                                            </ul> 
                                            {/* <!-- //.nav-menu --> */}
                                        </nav>                            
                                    </div>
                                        {/* <!-- //.main-menu --> */}
                                    <div className="expand-btn-inner search-icon hidden-md">
                                        <ul>
                                            <li className="sidebarmenu-search">
                                                <a className="hidden-xs rs-search" data-bs-toggle="modal" data-bs-target="#searchModal" href="#">
                                                    <i className="flaticon-search"></i>
                                                </a>
                                            </li>
                                            <li><a className="quote-btn" href="#">Get A Quote</a></li>
                                        </ul>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Menu End -->  */}
            </header>
            {/* <!--Header End--> */}
        </div>
        {/* <!--Full width header End--> */}
    </div>
  )
}

export default Header
import React from 'react';
import GridIcon from '../../assets/img/icon/grid.png';
import Logo from '../../assets/img/logo/logo.png';

const Header = () => {
    return (
        <div className="header__area1 header-absolute" id="header">
            <a href="#home" className="arrowup"><i className="far fa-long-arrow-alt-up"></i></a>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header1">
                            <div className="row">
                                <div className="col-6 col-lg-2 align-self-center">
                                    <img src={Logo} alt="Logo" />
                                </div>
                                <div className="col-6 col-lg-8 text-center align-self-center">
                                    <div className="main__menu">
                                        <div className="stellarnav">
                                            <ul className="navclassName" id="scroll">
                                                <li><a href="#home">Home</a></li>
                                                <li><a href="#about">About</a></li>
                                                <li><a href="#service">Service</a></li>
                                                <li><a href="#work">Work</a></li>
                                                <li><a href="#blog">Blog</a></li>
                                                <li><a href="#contact">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-none d-lg-block col-lg-2 align-self-center text-right">
                                    <div className="grids">
                                        <img src={GridIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
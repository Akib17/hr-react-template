import React from 'react';
import Gallery from '../gallery/Gallery';

const Footer = () => {
    return (
        <div class="footer__area footer1 white padding-top fix">
            <div class="space-100"></div>
            <div class="container">
                <div class="row">
                    <div class="colmd-4 col-lg-4">
                        <div class="mr-lg-5">
                            <a href="index.html" class="footer__logo"><img src="assets/img/logo/logo.png" alt="" /></a>
                            <div class="space-20"></div>
                            <p>Collaboratively scale focused outsourcing whereas equity invested internal or "organic" sources. Credibly build pandemic methods of empowerment and functional.</p>
                            <ul class="footer__social">
                                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="colmd-4 col-lg">
                        <div class="single__footer ml-lg-4">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="colmd-4 col-lg">
                        <div class="single__footer">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">App Development</a></li>
                                <li><a href="#">Graphic Design</a></li>
                                <li><a href="#">Web Development</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="colmd-4 col-lg-4">
                        <div class="single__footer">
                            <h3>Gallery</h3>
                            <Gallery className="instagram" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-30"></div>
            <div class="border-top"></div>
            <div class="space-30"></div>
            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <p>&copy; 2020 Rohon All rights reserved</p>
                        </div>
                        <div class="col-md-6">
                            <div class="copymenu text-right">
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">priveces policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
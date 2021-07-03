import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
    return (
        <div>
       <footer>
           <div className="container">
                <div className="row">
                    <div className="col">
                        <h6>Customer Service</h6>
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Help and advice</a></li>
                            <li><a href="#">Terms and condition</a></li>
                            <li><a href="#">Refund Policy</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6>Information</h6>
                        <ul> 
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Payment Policy</a></li>
                            <li><a href="#">Categories</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6>About Us</h6>
                        <ul>
                            <li><a href="#">Who we are?</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Recruiting</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6>Newsletter</h6>
                        <p>Sign up to receive special offers and discounts on your next coupon</p>
                        <form method="post" action="newsletter_email" class="contact-form">
                        <input type="email" name="newsletter__email" class="newsletter__email" placeholder="ENTER YOUR EMAIL" />
                        <button class="contact_subscribe" type="submit">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
           </div>
       </footer>
       <div id="copyright">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="right-section">© 2021 Coupon Awara. All rights reserved.</div>
                <div className="social-media">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Footer;
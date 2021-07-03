import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
        <nav id="nav">
            <div className="container d-flex align-items-center justify-content-between">
                <div id="logo"><a href="/"><img class="logo_img" src="./img/Coupon1.svg"/></a></div>
                <div className="search">
                    <form method="POST" action="/search">
                        <input className="search_input" type="search" placeholder="What are you looking for?" />
                        <a href="/"><i class="fas fa-search"></i></a>
                    </form>
                </div>
                <div className="nav__menu">
                    <a href="#" className="nav__links"><i class="fas fa-sign-in-alt"></i>Log In</a>
                    <a href="#" className="nav__links"><i class="fas fa-user-alt"></i>Account</a>
                    <a href="#" className="nav__links"><i class="fas fa-shopping-cart"></i>My Cart</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;
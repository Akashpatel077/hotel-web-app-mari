import React from 'react';
import './LandingPage.css';
const image2 = new URL('../../assets/image-2.png', import.meta.url)
const image3 = new URL('../../assets/image-3.png', import.meta.url)
const rectangle55 = new URL('../../assets/Rectangle-55.png', import.meta.url)
const homeLogo = new URL('../../assets/home-logo.png', import.meta.url)
const roomLogo = new URL('../../assets/room-logo.png', import.meta.url)
const bookingLogo = new URL('../../assets/booking-logo.png', import.meta.url)
const Logo = new URL('../../assets/logo.png', import.meta.url)

const LandingPage = () => {
    return (
        <>
            <div>
            <div className='bgElement'>
                
                <img id='image2' src={image2}></img>
                <img id='image3' src={image3}></img>
                <img id='rectangle55' src={rectangle55}></img>
                <div className='overlay'></div> 
                <h2 className='specialOffer'>Special Offer</h2>
                </div>
                </div>
                <div className='navbar'>
                <nav className="navbar align">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={homeLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            <span className='homeText'>Home</span>
                        </a>
                    </div>
                </nav>
                <nav className="navbar align">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={roomLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            <span className='homeText'>Room <br></br>& Suits</span>
                        </a>
                    </div>
                    
                </nav>
                <nav className="navbar align">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={bookingLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            <span className='homeText'>Booking</span>
                        </a>
                    </div>
                </nav>
                <nav className="navbar align">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            <span className='homeText'>Gallery</span>
                        </a>
                    </div>
                </nav>
                <nav className="navbar align">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            <span className='homeText'>Dining</span>
                        </a>
                    </div>
                </nav>
                <nav className="navbar align">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            <span className='homeText'>Support</span>
                        </a>
                    </div>
                </nav>
            </div>
            

        </>
    );
};

export default LandingPage;

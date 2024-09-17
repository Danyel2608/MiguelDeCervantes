import './Footer.css';

function Footer() {
    return (
        <div className='footer-page'>
            <div className="contact">
                <h2>CONTACTO</h2>
                <div className="contacts">
                    <div className="left-contact">
                        <i class="fa-solid fa-phone"></i>
                        <h3>+34 600072260</h3>
                    </div>
                    <div className="right-contact">
                        <i class="fa-solid fa-envelope"></i>
                        <h3>cafeteriamiguelcervantes@gmail.com</h3>
                    </div>
                </div>
            </div>
            <div className="info-developer">
                <p>Web creada y diseñada por <strong>DVIVANCOS</strong></p>
            </div>
        </div>
    );
}

export default Footer;

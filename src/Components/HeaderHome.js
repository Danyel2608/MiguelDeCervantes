import './HeaderHome.css';
import logo from "../assets/miguel-cervantes-removebg-preview.png";
function HeaderHome() {
    return (
        <div className='header-content' id="inicio">
            <div><img src={logo} alt="logo" /></div>
            <div className='title-header'><h1>Cafetería Miguel de Cervantes</h1></div>
        </div>
    );
}

export default HeaderHome;

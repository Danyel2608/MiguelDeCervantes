import './AboutUs.css';
import AboutUsImage from "../assets/AboutUs.jpeg";
function AboutUs() {
    return (
        <div className='about-us'>
            <div className="left">
                <h2>¿QUIENES SOMOS?</h2>
                <p>Ana y Miguel, una encantadora pareja llena de energía y simpatía, han encontrado su hogar en Móstoles tras un largo y enriquecedor recorrido laboral. Con una pasión desbordante y una dedicación admirable, han dado vida a su nuevo proyecto: la Cafetería Miguel de Cervantes. Aquí, combinan su amor por la hospitalidad con su alegría contagiosa, creando un espacio acogedor donde cada detalle refleja su entusiasmo y compromiso. En este rincón especial de Móstoles, Ana y Miguel te invitan a disfrutar de momentos únicos, siempre con una sonrisa y la calidez que los caracteriza.</p>
            </div>
            <div className="rigth">
                <img src={AboutUsImage} alt="about" />
            </div>
        </div>
    );
}

export default AboutUs;

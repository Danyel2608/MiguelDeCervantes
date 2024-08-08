import './Formulario.css';
import fondo from "../assets/Designer.jpeg";

function Formulario() {
    return (
        <div className='form' id='consultas'>
            <div className='left-form'>
                <img src={fondo} alt="fondo" />
            </div>
            <div className='rigth-form'>
                <h3>¿Necsitas alguna información?</h3>
                <p>Escribenos la consulta y nosotros te responderemos encantados</p>
                <form action="https://formsubmit.co/cafeteriamiguelcervantes@gmail.com" method="POST">
                    <input type="text" id="name" placeholder='Nombre' required="true" name='Nombre' />
                    <input type="text" id="last-name" placeholder='Apellidos' required="true" name='Apellidos' />
                    <input type="email" id="email" placeholder='Email' required="true" name='Correo' />
                    <input type="text" id="descripcion" placeholder='Escribe aquí' required="true" name='Descripcion' />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
}

export default Formulario;


import '../styles/Inicio.css'
import Target from '../components/Target';

const Inicio = () => {
    return (
        <div className='Inicio'>
            <div className='header'>
                <div className='contenido'>
                    <p>Desde el Hardware Hasta la Web <br /> LatinMarca lo Tiene Todo</p>
                </div>
            </div>
            <div className='nosotros'>
                <div className='contenido'>
                    <p>
                        ¿Quienes somos?<br /><br />
                        En Latinmarca, ofrecemos soluciones integrales en tecnología, desde mantenimiento de hardware hasta creación de páginas web. Nuestro equipo garantiza eficiencia y calidad, cubriendo todas tus necesidades tecnológicas en un solo lugar.
                    </p>
                </div>
            </div>
            <div className='servicios'>
                <div className='servicio_hard'>
                    <div className='titulo'>
                        <p>Hardware</p>
                    </div>
                    <div className='contenido'>
                        <p>
                            Mantenimiento y Reparación de Computadoras<br /><br />
                            Venta de Componentes, Accesorios y Periféricos<br /><br />
                            Asesoramiento y Proformas<br /><br />
                            Instalación de Equipos
                        </p>
                    </div>
                </div>
                <div className='servicio_soft'>
                    <div className='titulo'>
                        <p>Software</p>
                    </div>
                    <div className='contenido'>
                        <p>
                            Instalación de Programas y Sistemas Operativos <br /><br />
                            Diseño, Desarrollo y Levantamiento de Sitios Web<br /><br />
                            Desarrollo de Aplicaciones Móviles y de Escritorio
                        </p>
                    </div>
                </div>
            </div>
            <div className='publicaciones'>
                <div className='titulo'>
                    <p>Publicaciones Recientes</p>
                </div>
                <div className='targets'>
                    <Target />
                    <Target />
                    <Target />
                </div>
            </div>
            <div className='contactenos'>
                <div className='titulo'>
                    <p>Contactenos</p>
                </div>
                <div className='formulario'>
                    <form>
                        <div className='filas'>
                            <div className='input'>
                                <label className='la_nombre'>Nombre:</label>
                                <input className='in_nombre'></input>
                            </div>
                            <div className='input'>
                                <label className='ia_celular'>Celular:</label>
                                <input className='in_celular'></input>
                            </div>
                        </div>
                        <div className='filas'>
                            <div className='input'>
                                <label className='la_correo'>Correo:</label>
                                <input className='in_correo'></input>
                            </div>
                        </div>
                        <div className='filas'>
                            <div className='input'>
                                <label className='la_dirrecion'>Dirreción:</label>
                                <input className='in_dirrecion'></input>
                            </div>
                        </div>
                        <div className='filas'>
                            <div className='input'>
                                <label className='la_servicio'>Servicio:</label>
                                <input className='in_servicio'></input>
                            </div>
                        </div>
                        <div className='filas'>
                            <div className='input'>
                                <label className='la_contexto'>Contexto:</label>
                                <textarea className='in_contexto'></textarea>
                            </div>
                        </div>
                        <div className='boton'>
                            <button className='enviar' type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
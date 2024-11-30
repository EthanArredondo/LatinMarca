import React from 'react';
import '../styles/Inicio.css'

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
                            Mantenimiento y Reparación de Computadoras<br/><br/>
                            Venta de Componentes, Accesorios y Periféricos<br/><br/>
                            Asesoramiento y Proformas<br/><br/>
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
        </div>
    );
}

export default Inicio;
import React from 'react';

const Inicio = () => {
    return (
        <div className='conteiner_inicio'>
            <div className="seccion1">
                <div className='imagen'>
                    <img src="./img/reparacion.png"></img>
                </div>
                <div className='texto'>
                    <h1>BRINDAMOS SERVICIOS A DOMICILIO EN TODO LIMA</h1>
                    <p>Realizamos servicios de instalaciones, mantenimiento y asesorias</p>
                    <div className="boton-sabermas">
                        <a href='#'>Saber más ➜ </a>
                    </div> 
                </div>
            </div>
            <div className="seccion2">
                <div className='texto'>
                    <h1>ASESORIA Y FACILIDAD EN LA COMPRA DE EQUIPOS</h1>
                    <p>Ayudamos a la compra de equipos y accesorios aconsejando lo más óptimo para sus necesidades</p>
                    <div className="boton-sabermas">
                        <a href='#'>Saber más ➜ </a>
                    </div>
                </div>
                <div className='imagen'>
                    <img src="./img/compra2.png"></img>
                </div>
            </div>
            <div className="seccion3">
                <div className=''>
                    <div className='seccionBlog'>
                    </div>
                </div>
            </div>
            <div className="seccion4">
                <div className=''>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
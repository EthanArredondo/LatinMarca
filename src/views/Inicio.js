
import React, { useState } from 'react';
import '../styles/Inicio.css'
import Target from '../components/Target';
import sendEmail from '../services/emailService';

const Inicio = () => {

    const [formData, setFormData] = useState({
        name: '',
        cellphone: '',
        email: '',
        address: '',
        service: '',
        context: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        try {
            await sendEmail(formData);
            setSuccess('Email sent successfully!');
        } catch (err) {
            console.error('Error sending email:', err); // Log the error for debugging
            setError('Failed to send email. Please try again.');
        }
    };

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
                <form onSubmit={handleSubmit}>
                        <div className='filas'>
                            <div className='input'>
                                <label className='la_name'>Nombre:</label>
                                <input type="text" className='in_name' name='name' value={formData.name} onChange={handleChange} />
                            </div>
                            <div className='input'>
                                <label className='ia_cellphone'>Celular:</label>
                                <input type="text" className='in_cellphone' name='cellphone' value={formData.cellphone} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='filas'>
                            <div className='input'>
                                <label className='la_email'>Correo:</label>
                                <input type="text" className='in_email' name='email' value={formData.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='filas'>
                            <div className='input'>
                                <label className='la_address'>Dirección:</label>
                                <input type="text" className='in_address' name='address' value={formData.address} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='filas'>
                            <div className='input'>
                                <label className='la_service'>Servicio:</label>
                                <input type="text" className='in_service' name='service' value={formData.service} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='filas'>
                            <div className='input'>
                                <label className='la_context'>Contexto:</label>
                                <textarea className='in_context' name='context' value={formData.context} onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <div className='boton'>
                            <button className='enviar' type='submit'>Enviar</button>
                        </div>
                        {error && <p className='error'>{error}</p>}
                        {success && <p className='success'>{success}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
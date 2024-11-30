import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className='seccion_marca'>
                <h1 className="marca">LatinMarca</h1>
            </div>
            <div className="seccion_opciones">
                <ul className="opciones">
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>Servicios</li>
                    <li>Blog</li>
                    <li>Contactenos</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;
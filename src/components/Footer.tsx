import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"; // Importar Twitter

const Footer = () => {
    return (
        <div>
            <div className="Footer">
                <div className="titulo">
                    <h3>Siguenos</h3>
                </div>
                <div className="iconos">
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                </div>
                <div className="info">
                    <p>
                        Creador de la página: ethansarredondo@gmail.com<br/>
                        Link personal del creador
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Footer;
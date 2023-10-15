import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <p>&copy; 2023 TuNombre. Todos los derechos reservados.</p>
            <ul className="footer-links">
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#contact">Contacto</a></li>
                <li><a href="#privacy">Política de Privacidad</a></li>
            </ul>
        </div>
    );
}

export default Footer;

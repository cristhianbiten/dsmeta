import './styles.css';
import Logo from '../../assets/img/logo.svg';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={Logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/cristhianbiten/">@cristhianbiten</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
import Styles from '../components/Header.module.css'
import logo from '../assets/img/logo.png'
import tel from '../assets/img/tel.png'
function Header() {
    return (
        <header className={Styles.top}>
            <div className={Styles.logo}>
                <img src={logo} alt="logo v&g" />
            </div>
            <nav>
                <a href="">Procedimentos</a>
                <a href="">Resultados</a>
                <a href="">Sobre</a>
                <a href="">Clínica</a>
            </nav>
            <div className={Styles.contato}>
                <div className={Styles.iconcon}>
                    <img src={tel} alt="icon vetor" />
                </div>
                <a href="#">Contato</a></div>
        </header>
    )
}
export default Header;
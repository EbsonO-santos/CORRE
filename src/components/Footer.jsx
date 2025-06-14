import Styles from "./Footer.module.css";
import logo from "../assets/img/logo.png";
import whatb from "../assets/img/whatb.png";
import tel from "../assets/img/tel.png";
import loca from "../assets/img/loca.png";
import ins from "../assets/img/ins.png";
import face from "../assets/img/face.png";
function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={Styles.navegation}>
        <div className={Styles.redi}>
          <a href="">Procedimentos</a>
          <a href="">Depoimentos</a>
          <a href="">Sobre</a>
          <a href="">Clínica</a>
          <a href="">Contato</a>
        </div>
      </div>
      <div className={Styles.ende}>
        <div className={Styles.iconwhat}>
          <img src={whatb} alt="" />
        </div>
        <div className={Styles.icontel}>
          <img src={tel} alt="" />
        </div>
        <div className={Styles.iconloca}>
          <img src={loca} alt="" />
        </div>
        <h1>11 94988-3204</h1>
        <br />
        <h1>11 4441-0840</h1>
        <br />
        <p>Av. Paulicéia, 771 - Sala 2B - Laranjeiras, Caieiras - SP</p>
      </div>
      <div className={Styles.faixinha}></div>
      <div className={Styles.iconsfooter}>
        <div className={Styles.arroba}>
          <a href="https://www.instagram.com/veg.estetica/">@veg.estetica</a>
        </div>
        <p>
          ©2025 - V&G cuidado real, beleza natura todos os direitos reservados
        </p>
        <div className={Styles.iconsredes}>
          <img src={ins} alt="icone de instagram" />
          <a href="https://www.facebook.com/veg.estetica">
            <img src={face} alt="icone facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

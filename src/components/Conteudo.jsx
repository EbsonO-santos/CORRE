import Styles from "../components/Conteudo.module.css";
import moca from "../assets/img/Modelo.png";
import what from "../assets/img/whatb.png";
import selo from "../assets/img/selo.png";
import compro from "../assets/img/compromisso.png";
import ex from "../assets/img/ex.png";
import estrela from "../assets/img/estrela.png";
import atendimento from "../assets/img/atendimento.png";
import val from "../assets/img/val.png";
import va from "../assets/img/va.png";
import bio from "../assets/img/98.png";
import dep from "../assets/img/60.png";
import gra from "../assets/img/gra.png";
import clinica from "../assets/img/1.png";
import nuvem from "../assets/img/2.png";
import check from "../assets/img/checklist.png";
import ft1 from "../assets/img/ft1.png";
import ft2 from "../assets/img/ft2.png";
import ft3 from "../assets/img/ft3.png";
import ft4 from "../assets/img/ft4.png";
import ft5 from "../assets/img/ft5.png";
import ft6 from "../assets/img/ft6.png";
import maps from "../assets/img/maps.png";
import whatb from "../assets/img/what.png";
import tel2 from "../assets/img/tel2.png";
import rel from "../assets/img/relogio.png";
import local from "../assets/img/localizacao.png";
function Conteudo() {
  return (
    <main>
      {/* ------------------------conteudo-------------------------------- */}
      <section className={Styles.conteudo}>
        <div className={Styles.fundo}></div>
        <div className={Styles.moca}>
          <img src={moca} alt="Moça" />
        </div>
        <div className={Styles.texthom}>
          <div className={Styles.title}>
            <h1>Procedimentos profissionais </h1>
          </div>
          <div className={Styles.subtitle}>
            <p>
              Transforme agora sua autoestima e volte a amar o que vê no espelho
            </p>
          </div>
          <div className={Styles.btmagende}>
            <div className={Styles.icon}>
              <img src={what} alt="" />
            </div>
            <a href="#">Agende o seu procedimento</a>
          </div>
        </div>
      </section>
      {/* ------------------------faixa-------------------------------- */}
      <section className={Styles.faixa}>
        <div className={Styles.left}>
          <div className={Styles.iconleft}>
            <img src={selo} alt="" />
          </div>
          <h1>Atuante na área da estética a mais de 10 anos </h1>
          <p>Eliminação de gordura localizada</p>
        </div>
        <div className={Styles.rigth}>
          <div className={Styles.iconrigth}>
            <img src={compro} alt="vetor de compromisso" />
          </div>
          <h1>Compromisso com resultados naturais e seguros.</h1>
        </div>
      </section>
      {/* --------------------fim faixa-------------------------------- */}
      {/* --------------------icones de informações-------------------- */}
      <div className={Styles.iconsinformacoes}>
        <div className={Styles.ex}>
          <img src={ex} alt="vetor de ex" />
          <p>Mais de 10 Anos de Experiência</p>
        </div>
        <div className={Styles.ex}>
          <img src={estrela} alt="vetor de estrelas" />
          <p>Referência Profissional</p>
        </div>
        <div className={Styles.ex}>
          <img src={atendimento} alt="vetor de atendimento" />
          <p>Atendimento Personaizados</p>
        </div>
      </div>
      {/* --------------------fim icones de informações-------------------- */}
      <section className={Styles.fotodra}>
        <div className={Styles.val}>
          <img src={val} alt="dra valéria" />
        </div>
        <div className={Styles.textinfo}>
          <p>CONHEÇA</p>
          <h1>Dra. Valéria Damasio</h1>
          <div className={Styles.textdesc}>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos.
              <br />
              popularizou na década de 60, quando a Letraset lançou decalques
              contendo passagens de Lorem Ipsum, e mais recentemente quando
              passou a ser integrado a softwares de editoração eletrônica como
              Aldus PageMaker.
            </p>
          </div>
          <div className={Styles.button}>
            <a href="#">Saiba mais sobre mim ➡</a>
          </div>
        </div>
      </section>
      {/* ------------------------------fim dra val-------------------------------------- */}
      <section>
        <div className={Styles.textinform}>
          <div className={Styles.titleproce}>
            <h1>Procedimentos</h1>
          </div>
          <div className={Styles.subtitle}>
            <p>
              Os tratamentos são seguros e não invasivos. Eles podem te ajudar a
              reduzir as linhas de expressão e linhas finas, melhorar a firmeza
              da sua pele, projetar, melhorar contorno e assimetrias dos seus
              labios e face.
            </p>
          </div>
        </div>
        <div className={Styles.procedimentos}>
          <div className={Styles.preenchimento}>
            <div className={Styles.caixa}>
              <img src={va} alt="Procedimento" />
            </div>
            <details>
              <summary>Saiba mais</summary>
              <p>
                O preenchimento facial e labial com ácido hialurônico é um
                procedimento estético que visa restaurar o volume perdido e
                melhorar a aparência de áreas do rosto e dos lábios.
              </p>
            </details>
          </div>
          <div className={Styles.preenchimento}>
            <img src={bio} alt="Procedimento" />
            <details>
              <summary>Saiba mais</summary>
              <p>
                Os bioestimuladores de colágeno são substâncias injetáveis que
                estimulam o corpo a produzir mais colágeno, a proteína
                estrutural da pele.
              </p>
            </details>
          </div>
          <div className={Styles.preenchimento}>
            <img src={dep} alt="Procedimento" />
            <details>
              <summary>Saiba mais</summary>
              <br />
              <p>
                é uma técnica de remoção de pelos que utiliza pulsos de luz para
                destruir os folículos pilosos, reduzindo o crescimento dos pelos
                de forma duradoura.
              </p>
            </details>
          </div>
        </div>
      </section>
      {/* --------------------------procedimento--------------------------- */}
      <section className={Styles.fotodra}>
        <div className={Styles.textinfo}>
          <p>CONHEÇA</p>
          <h1>Dra. Gra Sá Leres</h1>
          <div className={Styles.textdesc}>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos.
              <br />
              popularizou na década de 60, quando a Letraset lançou decalques
              contendo passagens de Lorem Ipsum, e mais recentemente quando
              passou a ser integrado a softwares de editoração eletrônica como
              Aldus PageMaker.
            </p>
          </div>
          <div className={Styles.button}>
            <a href="#">Saiba mais sobre mim ➡</a>
          </div>
        </div>
        <div className={Styles.val}>
          <img src={gra} alt="dra valéria" />
        </div>
      </section>
      {/* ------------------------------------gra sá leres---------------------------- */}
      {/* ------------------------------------comentarios----------------------------- */}
      <section className={Styles.comments}>
        <div className={Styles.titlecomment}>
          <h1>O que nossos clientes dizem</h1>
        </div>
        <div className={Styles.boxcomment}>
          <div className={Styles.profilebox}>
            <h1>V</h1>
            <div className={Styles.nameperfil1}>
              <h3>@victoriarayssa</h3>
            </div>
          </div>
          <div className={Styles.box}>
            <p>
              Sempre tive receio de fazer procedimentes esteticos, mas a equipe
              me explicou melhor sua com deres enesape segura. O resultade tese
            </p>
          </div>
        </div>
        <div className={Styles.boxcomment}>
          <div className={Styles.profilebox}>
            <h1>V</h1>
            <div className={Styles.nameperfil2}>
              <h3>@victoriarayssa</h3>
            </div>
          </div>
          <div className={Styles.box}>
            <p>
              Sempre tive receio de fazer procedimentes esteticos, mas a equipe
              me explicou melhor sua com deres enesape segura. O resultade tese
            </p>
          </div>
        </div>
        <div className={Styles.boxcomment}>
          <div className={Styles.profilebox}>
            <h1>V</h1>
            <div className={Styles.nameperfil3}>
              <h3>@victoriarayssa</h3>
            </div>
          </div>
          <div className={Styles.box}>
            <p>
              Sempre tive receio de fazer procedimentes esteticos, mas a equipe
              me explicou melhor sua com deres enesape segura. O resultade tese
            </p>
          </div>
        </div>
      </section>
      {/* -------------------------------------------------------------- */}
      <section className={Styles.fotoclinica}>
        <div className={Styles.nuven1}>
          <img src={nuvem} alt="" />
        </div>

        <div className={Styles.textinfomacao}>
          <div className={Styles.titleiinf}>
            <p>Por Quê Nos Escolher?</p>
          </div>
          <h1>Tudo Que Há De Melhor Para Seu Cuidado</h1>
          <div className={Styles.textdesc}>
            <p>
              Na V&G, oferecemos mais que estética: proporcionamos cuidado
              completo para corpo, mente e pele. Nosso protocolo exclusivo une
              saúde, bem-estar e autoestima, com foco em segurança, inovação e
              resultados reais. Aqui, a beleza é natural, acolhedora e feita
              para valorizar quem você é. V&G — Sua melhor versão começa aqui
            </p>
          </div>
          <div className={Styles.check}>
            <div className={Styles.check1}>
              <img src={check} alt="check" />
              <p>Expertise e especialização</p>
            </div>
            <div className={Styles.check2}>
              <img src={check} alt="check" />
              <p>Tecnologia avançada</p>
            </div>
            <div className={Styles.check3}>
              <img src={check} alt="check" />
              <p>Atenção personalizada</p>
            </div>
          </div>
          <div className={Styles.check}>
            <div className={Styles.check4}>
              <img src={check} alt="check" />
              <p>Expertise e agilidade</p>
            </div>
            <div className={Styles.check5}>
              <img src={check} alt="check" />
              <p>Atendimento integrado</p>
            </div>
            <div className={Styles.check6}>
              <img src={check} alt="check" />
              <p>Respeito e empatia</p>
            </div>
          </div>
        </div>
        <div className={Styles.nuven2}>
          <img src={nuvem} alt="" />
        </div>
        <div className={Styles.clinica}>
          <img src={clinica} alt="dra valéria" />
        </div>
      </section>
      <section>
        <div className={Styles.resultados}>
          <div className={Styles.titlepage}>
            <h1>Resultados</h1>
            <p>
              Confira alguns dos resultados que nossos clientes já conquistaram
              com nossos procedimentos.
            </p>
          </div>
          <div className={Styles.boximgs}>
            <img src={ft1} alt="foto sombranselha" />
            <img src={ft2} alt="foto sombranselha" />
            <img src={ft3} alt="foto sombranselha" />
          </div>

          <div className={Styles.boximgs2}>
            <img src={ft4} alt="foto sombranselha" />
            <img src={ft5} alt="foto sombranselha" />
            <img src={ft6} alt="foto sombranselha" />
          </div>
        </div>
      </section>
      <section>
        <div className={Styles.faq}>
          <div className={Styles.titlefaq}>
            <h1>Perguntas Frequentes</h1>
          </div>
          <br />
          <br />
          <br />
          <details>
            <summary>Quanto Tempo De Experiencia?</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum magni aut laboriosam consequatur dignissimos voluptate
              ad. Eum, at sapiente et deserunt illum natus veniam similique
              praesentium. Aperiam nostrum consequuntur architecto?
            </p>
          </details>
          <hr />
          <br />
          <details>
            <summary>Os Procedimentos Doem?</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quidem earum repellendus velit ab commodi quasi vel corporis.
              Repellendus fuga ut iure mollitia doloribus eos autem obcaecati
              similique nihil reiciendis!
            </p>
          </details>
          <br />
          <hr />
          <details>
            <summary>Qual a Durabilidade Dos Procedimentos? </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quidem earum repellendus velit ab commodi quasi vel corporis.
              Repellendus fuga ut iure mollitia doloribus eos autem obcaecati
              similique nihil reiciendis!
            </p>
          </details>
          <br />
          <hr />
          <details>
            <summary>Qualquer Pessoa Pode Fazer Os Procedimentos?</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quidem earum repellendus velit ab commodi quasi vel corporis.
              Repellendus fuga ut iure mollitia doloribus eos autem obcaecati
              similique nihil reiciendis!
            </p>
          </details>
          <hr />
          <br />
          <details>
            <summary>Como Faço Para Agendar Os Procedimentos?</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quidem earum repellendus velit ab commodi quasi vel corporis.
              Repellendus fuga ut iure mollitia doloribus eos autem obcaecati
              similique nihil reiciendis!
            </p>
          </details>
          <hr />
        </div>
      </section>
      {/* ============================================================== */}
      <section className={Styles.contacto}>
        <div className={Styles.cardinfo}>
          <div className={Styles.contato}>
            <div className={Styles.iconsinfocaoes}>
              <img src={whatb} alt="whatsapp" />
            </div>
            <div className={Styles.iconsinfocaoes2}>
              <img src={tel2} alt="whatsapp" />
            </div>
            <div className={Styles.iconsinfocaoes3}>
              <img src={rel} alt="whatsapp" />
            </div>
            <div className={Styles.iconsinfocaoes4}>
              <img src={local} alt="whatsapp" />
            </div>
            <h1>Localização e Contatos</h1>
            <p>Av. Paulicéia, 771 - Sala 2B - Laranjeiras, Caieiras - SP</p>
            <p>Terça à sábado das 10h - 19h e Sábado: 10h - 18h</p>
            <div className={Styles.tell}>
              <h3> 11 94988-320411</h3>
              <h3> 11 4441-0840</h3>
            </div>
          </div>
          <div className={Styles.maps}>
            <a href="https://www.google.com.br/maps/dir//Studio+V%26G+Est%C3%A9tica+Facial,+Corporal+e+Cabelo+-+Av.+Paulic%C3%A9ia,+771+-+Sala+2B+-+Laranjeiras,+Caieiras+-+SP,+07700-000/@-23.392229,-46.7184159,17z/data=!4m17!1m7!3m6!1s0x94cefb2efb29f683:0x8f9cdff6d436e95d!2sStudio+V%26G+Est%C3%A9tica+Facial,+Corporal+e+Cabelo!8m2!3d-23.3922339!4d-46.715841!16s%2Fg%2F11b7lc3c88!4m8!1m0!1m5!1m1!1s0x94cefb2efb29f683:0x8f9cdff6d436e95d!2m2!1d-46.715841!2d-23.3922339!3e3!5m1!1e2?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D">
              <img src={maps} alt="Endereço maps" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Conteudo;

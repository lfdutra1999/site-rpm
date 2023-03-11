import styles from './Cabecalho.module.scss';
import logo from 'assets/img/icons/RPM.png';
import BotaoLink from 'componentes/BotaoLink';
import ProximasEtapas from 'componentes/ProximasEtapas';

const Cabecalho = ({etapa, setEtapa}) => {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.container}>
                <div className={styles.container__logoTitulo}>
                    <img
                        className={styles.container__logo}
                        src={logo}
                        alt="Logo da RPM Esports."
                    />
                    <h1 className={styles.container__titulo}>
                        <span className={styles.destaque}>Seja</span> bem vindo a RPM Esports!
                    </h1>
                </div>
                <h2 className={styles.container__descricao}>
                    <span className={styles.textoFundoBranco}>
                        Seu clube, sua liga no Automobilismo Virtual do Brasil.
                    </span>
                </h2>
                <div className={styles.container__botoes}>
                    <BotaoLink
                        link="https://chat.whatsapp.com/HHGO4SS7MsJAL7PrSzKlHV"
                        estilo="whatsapp"
                    >
                        Comunidade WhatsApp
                    </BotaoLink>
                    <BotaoLink
                        link="https://www.youtube.com/rpmesports"
                        estilo="youtube"
                    >
                        Canal YouTube
                    </BotaoLink>
                </div>
            </div>
            <div className={styles.container}>
                <ProximasEtapas etapaSel={etapa} setEtapa={setEtapa}/>
            </div>
        </header>
    )
}

export default Cabecalho;
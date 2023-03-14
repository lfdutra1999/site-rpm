import styles from './RedesSocial.module.scss';
import discord from 'assets/img/social/discord.png';
import instagram from 'assets/img/social/instagram.png';
import youtube from   'assets/img/social/yt.png';
import whatsapp from 'assets/img/social/wpp.png';

const RedesSocial = () => {
    return (
        <ul className={styles.redesSocial}>
            <li className={styles.redesSocial__item}>
                <a href='https://www.instagram.com/LigaRPMEsports/'>
                    <img
                        src={instagram}
                        alt="logo do instagram"
                    />
                </a>
            </li>
            <li className={styles.redesSocial__item}>
                <a href='https://www.youtube.com/@RPMEsports'>
                    <img
                        src={youtube}
                        alt="logo do youtube"
                    />
                </a>
            </li>
            <li className={styles.redesSocial__item}>
                <a href='https://discord.gg/CuSZVmKRjy'>
                    <img
                        src={discord}
                        alt="logo do discord"
                    />
                </a>
            </li>
            <li className={styles.redesSocial__item}>
                <a href='https://chat.whatsapp.com/HHGO4SS7MsJAL7PrSzKlHV'>
                    <img
                        src={whatsapp}
                        alt="logo do whatsapp"
                    />
                </a>
            </li>
        </ul>
    )
}

export default RedesSocial;
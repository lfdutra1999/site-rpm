import styles from './RedesSocial.module.scss';
import discord from 'assets/img/discord.png';
import instagram from 'assets/img/ig.png';
import youtube from   'assets/img/yt.png';
import whatsapp from 'assets/img/wpp.png';

const RedesSocial = () => {
    return (
        <ul className={styles.redesSocial}>
            <li className={styles.redesSocial__item}>
                <a href='/'>
                    <img
                        src={instagram}
                        alt="logo do instagram"
                    />
                </a>
            </li>
            <li className={styles.redesSocial__item}>
                <a href='/'>
                    <img
                        src={youtube}
                        alt="logo do youtube"
                    />
                </a>
            </li>
            <li className={styles.redesSocial__item}>
                <a href='/'>
                    <img
                        src={discord}
                        alt="logo do discord"
                    />
                </a>
            </li>
            <li className={styles.redesSocial__item}>
                <a href='/'>
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
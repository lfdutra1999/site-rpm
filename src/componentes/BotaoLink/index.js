import styles from './BotaoLink.module.scss';

const BotaoLink = ({ children, link, estilo }) => {
    return (
        <a
            className={`${styles.botaoLink} ${styles[estilo]}`}
            href={link}
        >
            {children}
        </a>
    )
}

export default BotaoLink;
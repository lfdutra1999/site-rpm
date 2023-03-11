import { Link } from 'react-router-dom';
import styles from './LinkInterno.module.scss';

const LinkInterno = ({ children, path, estilo }) => {
    return (
        <Link className={styles[estilo]} to={`/${path}`}>
            {children}
        </Link>
    )
}

export default LinkInterno;
import styles from './Piloto.module.scss';
import getPiloto from 'services/getPiloto.service';
import { useEffect } from 'react';
import ImagemPerfil from 'componentes/ImagemPerfil';
import { Button, Menu, MenuItem } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Piloto = ({ piloto, setPiloto, admin, setAdmin, logout }) => {
    const navigate = useNavigate()
    useEffect(() => {
        getPiloto(piloto, setPiloto)
    }, [])

    const editarPerfil = () => {
        navigate('edicao')

    }

    const administrar = () => {
        navigate('/admin')
    }


    return (
        <div className={styles.piloto}>
            <div className={styles.piloto__detalhes}>
                <div className={styles.piloto__menu}>
                    <PopupState
                        variant="popover"
                        popupId="menu-piloto"
                    >
                        {(popupState) => (
                            <>
                                <Button variant="text" sx={{color: '#CFCFCF'}} {...bindTrigger(popupState)}>
                                    <MenuIcon />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    {piloto?.admin === 1 ? <MenuItem onClick={() => administrar()}>Admin</MenuItem> : ''}
                                    <MenuItem onClick={() => editarPerfil()}>Editar</MenuItem>
                                    <MenuItem onClick={() => logout()}>Logout</MenuItem>
                                </Menu>
                            </>
                        )}
                    </PopupState>
                </div>
                <ImagemPerfil />
                <h3 className={styles.piloto__titulo}>
                    {piloto?.nickname}
                </h3>
                {piloto.cidade && piloto.estado
                    ? <p className={styles.piloto__texto}>
                        {piloto.cidade}/{piloto.estado}
                    </p>
                    : ''}
                {piloto.controlador
                    ? <p className={styles.piloto__texto}>
                        {piloto.controlador}
                    </p>
                    : ''}
            </div>
        </div>
    )
}

export default Piloto;
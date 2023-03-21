import { MenuItem, MenuList } from '@mui/material';
import AdminClasse from 'componentes/Admin/AdminClasse';
import AdminEquipes from 'componentes/Admin/AdminEquipes';
import AdminGrids from 'componentes/Admin/AdminGrids';
import AdminTemporadas from 'componentes/Admin/AdminTemporadas';
import { useEffect, useState } from 'react';
import api from 'services/api';
import styles from './Admin.module.scss';

const Admin = ({ admin }) => {
    const [temporadas, setTemporadas] = useState([])
    const [grids, setGrids] = useState([])
    const [classes, setClasses] = useState([])

    useEffect(() => {
        api.get('/temporadas')
            .then(resposta => {
                setTemporadas(resposta.data.data)
            })
            .catch(erro => {
                console.log('Ops, ocorreu um erro inesperado: ' + erro)
            })
    }, [])
    useEffect(() => {
        api.get('/grids')
            .then(resposta => {
                setGrids(resposta.data.data)
            })
            .catch(erro => {
                console.log('Ops, ocorreu um erro inesperado: ' + erro)
            })
    }, [])
    useEffect(() => {
        api.get('/classes')
            .then(resposta => {
                setClasses(resposta.data.data)
            })
            .catch(erro => {
                console.log('Ops, ocorreu um erro inesperado: ' + erro)
            })
    }, [])
    const [itemAmostra, setItemAmostra] = useState();
    const itemVisivel = (item) => {
        if (item === 'equipes') {
            setItemAmostra(<AdminEquipes />)
        } else {
            if (item === 'temporadas') {
                setItemAmostra(<AdminTemporadas temporadas={temporadas} setTemporadas={setTemporadas} />)
            } else {
                if (item === 'grids') {
                    setItemAmostra(<AdminGrids temporadas={temporadas} grids={grids} setGrids={setGrids} />)
                } else {
                    if (item === 'classes') {
                        setItemAmostra(<AdminClasse classes={classes} setClasses={setClasses} />)
                    }
                }
            }
        }
    }

    return (
        <section className={styles.principal}>
            <h2> Tela de admin </h2>
            <div className={styles.principal__corpo}>
                <div className={styles.principal__menu}>
                    <MenuList>
                        <MenuItem onClick={() => itemVisivel('equipes')}>Equipes</MenuItem>
                        <MenuItem onClick={() => itemVisivel('temporadas')}>Temporadas</MenuItem>
                        <MenuItem onClick={() => itemVisivel('grids')}>Grids</MenuItem>
                        <MenuItem onClick={() => itemVisivel('etapas')}>Etapas</MenuItem>
                        <MenuItem onClick={() => itemVisivel('classes')}>Classes</MenuItem>
                        <MenuItem onClick={() => itemVisivel('carros')}>Carros</MenuItem>
                        <MenuItem onClick={() => itemVisivel('pistas')}>Pistas</MenuItem>
                    </MenuList>
                </div>
                <div className={styles.principal__conteudo}>
                    {itemAmostra}
                </div>
            </div>

        </section>
    )
}

export default Admin;
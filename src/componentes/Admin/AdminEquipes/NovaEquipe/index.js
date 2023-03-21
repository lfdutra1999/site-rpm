import Botao from 'componentes/Formulario/Botao';
import Campo from 'componentes/Formulario/Campo';
import UploadImagem from 'componentes/UploadImagem';
import { useState } from 'react';
import styles from './NovaEquipe.module.scss';

const NovaEquipe = () => {
    const [nome, setNome] = useState();

    return (
        <form className={styles.formularioNovaEquipe}>
            <h3>Cadastrar Nova Equipe</h3>
            <UploadImagem />
            <Campo
                placeholder='Nome:'
                valor={nome}
                obrigatorio={true}
                type='text'
                aoAlterado={valor => setNome(valor)}
            />
            <Botao>
                Criar
            </Botao>
        </form>
    )
}

export default NovaEquipe;
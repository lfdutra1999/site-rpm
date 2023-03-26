import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './MenuOpcoes.module.scss';
import LinkInterno from "componentes/LinkInterno";

const MenuOpcoes = ({ nome, opcoes }) => {
    const [aberto, setAberto] = useState(true);

    const handleClick = (event) => {
        setAberto(!aberto);
        console.log(aberto)
    };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <li>
            <a onClick={() => handleClick()}>
                {nome}
            </a>
            {aberto
                ? opcoes.map(opcao => { <LinkInterno key={opcao.nome} path={opcao.path} estilo="itemMenu">{opcao.nome}</LinkInterno> })
                : ''
            }
        </li>
    );
}

export default MenuOpcoes;
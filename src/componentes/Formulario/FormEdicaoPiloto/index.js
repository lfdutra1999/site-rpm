import UploadImagem from 'componentes/UploadImagem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from 'services/api';
import Botao from '../Botao';
import Campo from '../Campo';
//import styles from './FormEdicaoPiloto.module.scss';

const FormEdicaoPiloto = ({ piloto, setPiloto }) => {
    const navigate = useNavigate();
    const [imagem, setImagem] = useState(piloto?.foto)
    const [nome, setNome] = useState(piloto?.nome)
    const [sobrenome, setSobrenome] = useState(piloto?.sobrenome)
    const [nickname, setNickname] = useState(piloto?.nickname)
    const [steamid, setSteamid] = useState(piloto?.steamid)
    const [whatsapp, setWhatsapp] = useState(piloto?.whatsapp)
    const [chavepix, setChavePix] = useState(piloto?.chavepix)
    const [cidade, setCidade] = useState(piloto?.cidade)
    const [estado, setEstado] = useState(piloto?.estado)
    const [controlador, setControlador] = useState(piloto?.controlador)
    const [linkcanal, setLinkcanal] = useState(piloto?.linkcanal)

    const aoConfirmar = (evento) => {
        evento.preventDefault()
        const pilotoAtualizado = piloto
        if (nome !== piloto.nome) {
            atualizaDados('nome', nome)
            pilotoAtualizado.nome = nome   
        }
        if (sobrenome !== piloto.sobrenome) {
            atualizaDados('sobrenome', sobrenome)
            pilotoAtualizado.sobrenome = sobrenome   
        }
        if (nickname !== piloto.nickname) {
            atualizaDados('nickname', nickname)
            pilotoAtualizado.nickname = nickname   
        }
        if (steamid !== piloto.steamid) {
            atualizaDados('steamid', steamid)
            pilotoAtualizado.steamid = steamid   
        }
        if (whatsapp !== piloto.whatsapp) {
            atualizaDados('whatsapp', whatsapp)
            pilotoAtualizado.whatsapp = whatsapp   
        }
        if (chavepix !== piloto.chavepix) {
            atualizaDados('chavepix', chavepix)
            pilotoAtualizado.chavepix = chavepix   
        }
        if (cidade !== piloto.cidade) {
            atualizaDados('cidade', cidade)
            pilotoAtualizado.cidade = cidade   
        }
        if (estado !== piloto.estado) {
            atualizaDados('estado', estado)
            pilotoAtualizado.estado = estado   
        }
        if (controlador !== piloto.controlador) {
            atualizaDados('controlador', controlador)
            pilotoAtualizado.controlador = controlador   
        }
        if (linkcanal !== piloto.linkcanal) {
            atualizaDados('linkcanal', linkcanal)
            pilotoAtualizado.linkcanal = linkcanal   
        }
        setPiloto(pilotoAtualizado)
        navigate(-1)
    }

    const atualizaDados = (label, value) => {
        const body = {
            label: label,
            valor: value
        }
        api.put(`/piloto?uuid=${piloto.uuid}`, body)
            .then(() => {
                console.log('Piloto atualizado')
            })
    }

    return (
        <form onSubmit={evento => aoConfirmar(evento)}>
            <UploadImagem
                imagem={imagem}
                setImagem={setImagem}
            />
            <Campo
                label='Nome'
                placeholder='Nome'
                valor={nome}
                type='text'
                aoAlterado={valor => setNome(valor)}
            />
            <Campo
                label='Sobrenome'
                placeholder='Sobrenome'
                valor={sobrenome}
                type='text'
                aoAlterado={valor => setSobrenome(valor)}
            />
            <Campo
                label='Nickname'
                placeholder='Nickname'
                valor={nickname}
                type='text'
                aoAlterado={valor => setNickname(valor)}
            />
            <Campo
                label='SteamID'
                placeholder='SteamID'
                valor={steamid}
                type='number'
                aoAlterado={valor => setSteamid(valor)}
            />
            <Campo
                label='Whatsapp'
                placeholder='Whatsapp'
                valor={whatsapp}
                type='tel'
                aoAlterado={valor => setWhatsapp(valor)}
            />
            <Campo
                label='Chave pix'
                placeholder='Chave pix'
                valor={chavepix}
                type='text'
                aoAlterado={valor => setChavePix(valor)}
            />
            <Campo
                label='Cidade'
                placeholder='Cidade'
                valor={cidade}
                type='text'
                aoAlterado={valor => setCidade(valor)}
            />
            <Campo
                label='Estado'
                placeholder='Estado'
                valor={estado}
                type='text'
                aoAlterado={valor => setEstado(valor)}
            />
            <Campo
                label='Controlador'
                placeholder='Controlador'
                valor={controlador}
                type='text'
                aoAlterado={valor => setControlador(valor)}
            />
            <Campo
                label='Link Canal'
                placeholder='Link Canal'
                valor={linkcanal}
                type='link'
                aoAlterado={valor => setLinkcanal(valor)}
            />
            <Botao>
                Confirmar
            </Botao>
        </form>
    )
}

export default FormEdicaoPiloto;
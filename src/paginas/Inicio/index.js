import styles from './Inicio.module.scss';
import EventosDestaque from "componentes/EventosDestaque";
import { useState } from "react";
import Noticias from 'componentes/Noticias';
import Patrocinadores from 'componentes/Patrocinadores';
import UltimasNoticias from 'componentes/UltimasNoticias';
import Tabelas from 'componentes/Tabelas';
import HallDaFama from 'componentes/HallDaFama';


const Inicio = () => {
    const videoYoutube = {
        index: 0,
        id: "Xzh-sXi-Ge0"
    }

    const videos = [
        {
            index: 0,
            id: "Xzh-sXi-Ge0"
        },
        {
            index: 1,
            id: "NE64P66fsio"
        },
        {
            index: 2,
            id: "L52yb7bKtiw"
        },
        {
            index: 3,
            id: "WcXmzMd347E"
        },
        {
            index: 4,
            id: "4IEow8q7p4Q"
        },
    ]

    const [videoAtual, setVideoAtual] = useState(videoYoutube);
    const [botaoFrenteAtivo, setBotaoFrenteAtivo] = ('ativo');
    const [botaoTrasAtivo, setBotaoTrasAtivo] = ('');

    function paraFrente() {
        if (botaoFrenteAtivo === 'ativo') {
            console.log(videoAtual)
            const index = videoAtual.index + 1;
            setVideoAtual(videos.filter(video => video.index === index));
            if (index === (videos.length - 1)) { setBotaoFrenteAtivo('') }
            setBotaoTrasAtivo('ativo');
        }
    }

    function paraTras() {
        if (botaoTrasAtivo === 'ativo') {
            console.log(videoAtual)
            const index = videoAtual.index - 1;
            setVideoAtual(videos.filter(video => video.index === index));
            if (index === 0) { setBotaoTrasAtivo('') }
            setBotaoFrenteAtivo('ativo');
        }
    }

    return (
        <>
            <section className={styles.principal}>
                <div className={styles.principal__container}>
                    <EventosDestaque
                        youtubeID={videoAtual.id}
                        paraFrente={paraFrente}
                        paraTras={paraTras}
                    />
                    <Noticias />
                </div>
                <div className={styles.principal__container}>
                    <Patrocinadores />
                </div>
            </section>
            <section className={styles.ultimasNoticias}>
                <UltimasNoticias />
            </section>
            <section className={styles.tabelas}>
                <Tabelas />
            </section>
            <section className={styles.hallDaFama}>
                <HallDaFama />
            </section>
        </>
    )
}

export default Inicio;
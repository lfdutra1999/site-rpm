import styles from './Inicio.module.scss';
import EventosDestaque from "componentes/EventosDestaque";
import Noticias from 'componentes/Noticias';
import Patrocinadores from 'componentes/Patrocinadores';
import UltimasNoticias from 'componentes/UltimasNoticias';
import Tabelas from 'componentes/Tabelas';
import HallDaFama from 'componentes/HallDaFama';


const Inicio = ({ videoAtual, setVideoAtual }) => {
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


    function paraFrente() {
        let index
        if (videoAtual.index === videos.length - 1) {
            index = 0
        } else {
            index = videoAtual.index + 1;
        }
        setVideoAtual(videos.filter(video => video.index === index)[0]);
    }

    function paraTras() {
        let index
        if (videoAtual.index === 0) {
            index = videos.length - 1
        } else {
            index = videoAtual.index - 1;
        }
        setVideoAtual(videos.filter(video => video.index === index)[0]);
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
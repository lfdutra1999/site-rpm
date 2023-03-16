// import Piloto from 'componentes/Piloto';
// import { useEffect, useState } from 'react';
// import getPilotos from 'services/getPilotos.service';
import styles from './Pilotos.modules.scss';

const Pilotos = ({ pilotos, setPilotos }) => {
    // const [listaPilotos, setListaPilotos] = useState([])
    
    // useEffect(() => {
    //     getPilotos(setListaPilotos)
    // }, [listaPilotos, setListaPilotos])

    // const adicionaPiloto = (piloto) => {
    //     setPilotos([...pilotos, piloto])
    // } 



    return (
        <ul className={styles.pilotos}>
            {/* {pilotos.map(piloto => <li><Piloto piloto={piloto.piloto} setPiloto={adicionaPiloto}/></li>)} */}
        </ul>
    )

}

export default Pilotos;
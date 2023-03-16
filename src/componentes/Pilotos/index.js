import Piloto from 'componentes/Piloto';
import getPilotos from 'services/getPilotos.service';
import styles from './Pilotos.modules.scss';

const Pilotos = ({ pilotos, setPilotos }) => {
    // let pilotoNovo
    // function adicionaPiloto(piloto) {
    //     pilotoNovo = piloto
    //     console.log(piloto)
    //     console.log(pilotoNovo)
    //     setPilotos([...pilotos, pilotoNovo])

    // }


    // let listaPilotos
    // function carregarPilotos(pilotos) {
    //     listaPilotos = pilotos
    // } 

    // console.log(listaPilotos)



    return (
        <ul className={styles.pilotos}>
            {/* {listaPilotos.map(piloto => <li><Piloto piloto={piloto.piloto} setPiloto={() => adicionaPiloto()}/></li>)} */}
        </ul>
    )

}

export default Pilotos;
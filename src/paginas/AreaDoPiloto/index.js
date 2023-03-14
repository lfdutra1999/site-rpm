import styles from './AreaDoPiloto.module.scss';

const AreaDoPiloto = ({piloto}) => {
    return (
        <h1>Area do piloto {piloto?.uuid}</h1>
    )
}

export default AreaDoPiloto;
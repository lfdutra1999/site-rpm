import { Navigate } from "react-router-dom";


const EdicaoPiloto = ({ logado, piloto, setPiloto }) => {
    if (!logado) {
        return <Navigate replace to="/login" />;
    }
    return (
        <h1>Edicao Piloto</h1>
    )
}

export default EdicaoPiloto;
import FormEdicaoPiloto from "componentes/Formulario/FormEdicaoPiloto";
import { Navigate } from "react-router-dom";


const EdicaoPiloto = ({ logado, piloto, setPiloto }) => {
    if (!logado) {
        return <Navigate replace to="/login" />;
    }
    return (
        <section>
            <h1>Edicao Piloto</h1>
            <FormEdicaoPiloto
                piloto={piloto}
                setPiloto={setPiloto}
            />
        </section>
    )
}

export default EdicaoPiloto;
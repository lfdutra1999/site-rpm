import { useState } from "react";
import api from "services/api";
import FormularioClasse from "../FormularioClasse";

const EditarClasses = ({ classes, setClasses }) => {
    const [classe, setClasse] = useState(classes[0]);

    const alterarClasse = (novaClasse) => {
        api.put(`/classe?uuid=${novaClasse.uuid}`, novaClasse)
            .then(() => {
                setClasse(novaClasse)
                const classeAtualizadas = classes.filter(classe => classe.uuid !== novaClasse.uuid)
                setClasses([...classeAtualizadas, novaClasse])
            })
            .catch(erro => {
                console.log('Ocorreu um erro inesperado' + erro)
            })
    }



    return (
        <div>
            <FormularioClasse classe={classe} aoSubmeter={alterarClasse} />
        </div>
    )
}

export default EditarClasses;
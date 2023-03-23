import { useEffect, useState } from "react";
import api from "services/api";
import UploadImageToS3WithReactS3 from "services/uploadImagemAws";
import FormularioClasse from "../FormularioClasse";

const NovaClasse = ({ classes, setClasses }) => {
    const [classe, setClasse] = useState({})
    const [imagem, setImagem] = useState();
    const cadastrarClasse = (novaClasse) => {
        api.post(`/classe?uuid=${novaClasse.uuid}`, novaClasse)
            .then(() => {
                setClasse(novaClasse)
                setClasses([...classes, novaClasse])
                UploadImageToS3WithReactS3(setImagem, novaClasse.imagem, 'classe')
            })
            .catch(erro => {
                console.log('Ocorreu um erro inesperado' + erro)
            })
    }

    useEffect(() => {
        if (typeof imagem === 'string' || imagem instanceof String) {
            const body = {
                imagem: imagem
            }
            api.post(`/upload?uuid=${classe.uuid}&tipo=classe`, body)
                .then(() => {})
                .catch(erro => console.log(erro))
        }
    },[imagem, classe])

    return (
        <div>
            <FormularioClasse aoSubmeter={cadastrarClasse} />
        </div>
    )
}

export default NovaClasse;
import { useEffect, useState } from "react";
import api from "services/api";
import UploadImageToS3WithReactS3 from "services/uploadImagemAws";
import FormularioPista from "../FormularioPista";

const NovaPista = () => {
    const [pista, setPista] = useState({})
    const [imagem, setImagem] = useState();

    const cadastrarPista = (novaPista) => {
        api.post(`/pista?uuid=${novaPista.uuid}`, novaPista)
            .then(() => {
                setPista(novaPista)
                UploadImageToS3WithReactS3(setImagem, novaPista.imagem, 'pista')
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
            api.post(`/upload?uuid=${pista.uuid}&tipo=pista`, body)
                .then(() => { })
                .catch(erro => console.log(erro))
        }
    }, [imagem, pista])


    return (
        <div>
            <FormularioPista pista={pista} aoSubmeter={cadastrarPista} />
        </div>
    )
}

export default NovaPista;
import { useEffect, useState } from "react";
import api from "services/api";
import UploadImageToS3WithReactS3 from "services/uploadImagemAws";
import FormularioCarro from "../FormularioCarro";

const NovoCarro = ({ classes }) => {
    const [classeSelecionada, setClasseSelecionada] = useState({})
    const [carro, setCarro] = useState({})
    const [imagem, setImagem] = useState();
    const cadastrarClasse = (novoCarro) => {
        api.post(`/carro?uuid=${novoCarro.uuid}&classeUuid=${classeSelecionada.uuid}`, novoCarro)
            .then(() => {
                setCarro(novoCarro)
                UploadImageToS3WithReactS3(setImagem, novoCarro.imagem, 'carro')
            })
            .catch(erro => {
                console.log('Ocorreu um erro inesperado' + erro)
            })
    }

    useEffect(() => {
        if (typeof imagem === 'string' || imagem instanceof String) {
            const body = {
                classe_uuid: classeSelecionada.uuid,
                imagem: imagem
            }
            api.post(`/upload?uuid=${carro.uuid}&tipo=carro`, body)
                .then(() => { })
                .catch(erro => console.log(erro))
        }
    }, [imagem, carro, classeSelecionada])

    const aoAlterarClasse = (evento) => {
        const classeSelecionada2 = classes.filter(classe => classe.uuid === evento.target.value)
        setClasseSelecionada(classeSelecionada2[0])
    }

    return (
        <div>
            <select onChange={evento => aoAlterarClasse(evento)}>
                <option value={null} key='1'>Selecione uma classe</option>
                {classes.map(classe => <option key={classe.uuid} value={classe.uuid}>{classe.nome}</option>)}
            </select>
            <FormularioCarro classe={classeSelecionada} aoSubmeter={cadastrarClasse} />
        </div>
    )
}

export default NovoCarro;
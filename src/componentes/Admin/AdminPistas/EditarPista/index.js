import { useState } from "react";
import api from "services/api";
import UploadImageToS3WithReactS3 from "services/uploadImagemAws";
import FormularioPista from "../FormularioPista";

const EditarPista = ({ pistas, setPistas }) => {
    const [pistaSelecionada, setPistaSelecionada] = useState({})
    const [imagem, setImagem] = useState();
    const alterarPista = (novaPista) => {
        api.put(`/pista?uuid=${novaPista.uuid}`, novaPista)
            .then(() => {
                setPistaSelecionada(novaPista)
                UploadImageToS3WithReactS3(setImagem, novaPista.imagem, 'pista')
            })
            .catch(erro => {
                console.log('Ocorreu um erro inesperado' + erro)
            })
    }

    // useEffect(() => {
    //     const classeAtualizadas = classes.filter(classe => classe.uuid !== classeSelecionada.uuid)
    //     setClasses([...classeAtualizadas, classeSelecionada])
    // }, [classeSelecionada, classes, setClasses])

    // useEffect(() => {
    //     if (typeof imagem === 'string' || imagem instanceof String) {
    //         const body = {
    //             classe_uuid: classeSelecionada.uuid,
    //             imagem: imagem
    //         }
    //         api.post(`/upload?uuid=${carroSelecionado.uuid}&tipo=carro`, body)
    //             .then(() => {})
    //             .catch(erro => console.log(erro))
    //     }
    // }, [imagem, carroSelecionado, classeSelecionada])

    const aoAlterarPista = (evento) => {
        const pistaSelecionada2 = pistas.filter(pista => pista.uuid === evento.target.value)
        setPistaSelecionada(pistaSelecionada2[0])
    }

    return (
        <div>
            <select onChange={evento => aoAlterarPista(evento)}>
                <option value={null} key='1'>Selecione uma pista</option>
                {pistas.map(pista => <option key={pista.uuid} value={pista.uuid}>{pista.nome}</option>)}
            </select>
            <FormularioPista pista={pistaSelecionada} aoSubmeter={alterarPista} />
        </div>
    )
}

export default EditarPista;
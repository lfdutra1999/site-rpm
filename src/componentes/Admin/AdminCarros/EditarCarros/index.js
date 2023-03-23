import { useState } from "react";
import api from "services/api";
import UploadImageToS3WithReactS3 from "services/uploadImagemAws";
import FormularioCarro from "../FormularioCarro";

const EditarCarro = ({ carros, setCarros, classes, setClasses }) => {
    const [classeSelecionada, setClasseSelecionada] = useState({})
    const [carroSelecionado, setCarroSelecionado] = useState({})
    const [imagem, setImagem] = useState();
    const alterarCarro = (novoCarro) => {
        api.put(`/carro?uuid=${novoCarro.uuid}&classeUuid=${classeSelecionada.uuid}`, novoCarro)
            .then(() => {
                setCarroSelecionado(novoCarro)
                UploadImageToS3WithReactS3(setImagem, novoCarro.imagem, 'carro')
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

    const aoAlterarClasse = (evento) => {
        const classeSelecionada2 = classes.filter(classe => classe.uuid === evento.target.value)
        setClasseSelecionada(classeSelecionada2[0])
    }

    const aoAlterarCarro = (evento) => {
        const carroSelecionado2 = carros.filter(carro => carro.uuid === evento.target.value)
        setCarroSelecionado(carroSelecionado2[0])
    }

    return (
        <div>
            <select onChange={evento => aoAlterarClasse(evento)}>
                <option value={null} key='1'>Selecione uma classe</option>
                {classes.map(classe => <option key={classe.uuid} value={classe.uuid}>{classe.nome}</option>)}
            </select>
            <select onChange={evento => aoAlterarCarro(evento)}>
                <option value={null} key='1'>Selecione um carro</option>
                {carros.map(carro => <option key={carro.uuid} value={carro.uuid}>{carro.nome}</option>)}
            </select>
            <FormularioCarro carro={carroSelecionado} classe={classeSelecionada} aoSubmeter={alterarCarro} />
        </div>
    )
}

export default EditarCarro;
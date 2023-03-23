import { useEffect, useState } from "react";
import api from "services/api";
import UploadImageToS3WithReactS3 from "services/uploadImagemAws";
import FormularioClasse from "../FormularioClasse";

const EditarClasses = ({ classes, setClasses }) => {
    const [classeSelecionada, setClasseSelecionada] = useState({})
    const [imagem, setImagem] = useState();
    const alterarClasse = (novaClasse) => {
        api.put(`/classe?uuid=${novaClasse.uuid}`, novaClasse)
            .then(() => {
                setClasseSelecionada(novaClasse)
                UploadImageToS3WithReactS3(setImagem, novaClasse.imagem, 'classe')
            })
            .catch(erro => {
                console.log('Ocorreu um erro inesperado' + erro)
            })
    }

    useEffect(() => {
        const classeAtualizadas = classes.filter(classe => classe.uuid !== classeSelecionada.uuid)
        setClasses([...classeAtualizadas, classeSelecionada])
    }, [classeSelecionada, classes, setClasses])

    useEffect(() => {
        console.log(imagem)
        if (typeof imagem === 'string' || imagem instanceof String) {
            console.log('entrou aqui!')
            const body = {
                imagem: imagem
            }
            api.post(`/upload?uuid=${classeSelecionada.uuid}&tipo=classe`, body)
                .then(() => { })
                .catch(erro => console.log(erro))
        }
    }, [imagem, classeSelecionada])

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
            <FormularioClasse classe={classeSelecionada} aoSubmeter={alterarClasse} />
        </div>
    )
}

export default EditarClasses;
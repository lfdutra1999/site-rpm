import api from "services/api";
import UploadImageToS3WithReactS3 from "services/uploadImagemAws";
import FormularioClasse from "../FormularioClasse";

const NovaClasse = ({ classes, setClasses }) => {
    const cadastrarClasse = (novaClasse) => {
        api.post(`/classe?uuid=${novaClasse.uuid}`, novaClasse)
            .then(() => {
                setClasses([...classes, novaClasse])
                UploadImageToS3WithReactS3(novaClasse.imagem)
            })
            .catch(erro => {
                console.log('Ocorreu um erro inesperado' + erro)
            })
    }



    return (
        <div>
            <FormularioClasse aoSubmeter={cadastrarClasse} />
        </div>
    )
}

export default NovaClasse;
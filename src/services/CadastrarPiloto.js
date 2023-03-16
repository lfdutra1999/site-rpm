import api from 'services/api';


const cadastrarPiloto = (novoPiloto, setPiloto, setLogado) => {

    if (novoPiloto) {
        api
            .post(`/piloto?uuid=${novoPiloto.uuid}`, novoPiloto)
            .then(response => {
                console.log(response)
                setPiloto(novoPiloto)
                setLogado('True')
            })
            .catch(err => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
}

export default cadastrarPiloto;
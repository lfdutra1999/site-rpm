import api from 'services/api';

const cadastrarPiloto = (piloto) => {
    console.log(`/piloto?uuid=${piloto.uuid}`)
    api
        .post(`/piloto?uuid=${piloto.uuid}`, piloto)
        .then(response => console.log(response))
        .catch(err => {
            console.error("ops! ocorreu um erro" + err);
        });
}

export default cadastrarPiloto;
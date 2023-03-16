import api from 'services/api';

const getPiloto = (piloto, setPiloto) => {
    if (piloto.uuid) {
        api
            .get(`/piloto?uuid=${piloto.uuid}`)
            .then((response) => setPiloto(response.data.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
}

export default getPiloto;
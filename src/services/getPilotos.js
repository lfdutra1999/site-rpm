import api from 'services/api';

const getPilotos = (setPilotos) => {
    const atualizaPilotos = (pilotos) => {
        console.log(pilotos)
    }

    api
        .get('/pilotos')
        .then(response => atualizaPilotos(response.data))
        .catch(err => {
            console.error("ops! ocorreu um erro" + err);
        });
}

export default getPilotos;
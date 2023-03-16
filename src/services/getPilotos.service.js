import api from 'services/api';

const getPilotos = (setPilotos) => {
    api
        .get('/pilotos')
        .then(response => setPilotos([...response.data.data]))
        .catch(err => {
            console.error("ops! ocorreu um erro" + err);
        });
}

export default getPilotos;
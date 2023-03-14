import api from 'services/api';

const Logar = ( login, senha, setLogado, setPiloto) => {
    const body = {
        'login': login
    }
    const verificaLogin = (response) => {
        setPiloto(response.uuid)
        var bcrypt = require('bcryptjs');
        return bcrypt.compareSync(senha, response.senha)
    }
    api
        .post('/login', body)
        .then(response => setLogado(verificaLogin(response.data)))
        .catch(err => {
            console.error("ops! ocorreu um erro" + err);
        });
}

export default Logar;
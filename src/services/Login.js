import api from 'services/api';

const Logar = (login, senha, setLogado, setPiloto) => {
    const body = {
        'login': login
    }

    const verificaLogin = (response) => {
        if (response.uuid) {
            setPiloto({ uuid: response.uuid })
            var bcrypt = require('bcryptjs');
            if (bcrypt.compareSync(senha, response.senha)) {
                return true
            }
        }
        alert("Usuário/Senha inválido!!!")
        return false

    }
    api
        .post('/login', body)
        .then(response => setLogado(verificaLogin(response.data)))
        .catch(err => {
            console.error("ops! ocorreu um erro" + err);
        });
}

export default Logar;
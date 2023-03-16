import api from 'services/api';

const Logar = (login, senha, setLogado, setPiloto) => {
    const verificaLogin = (response) => {
        if (response.uuid) {
            var bcrypt = require('bcryptjs');
            if (bcrypt.compareSync(senha, response.senha)) {
                setLogado(true)
                setPiloto({ uuid: response.uuid })
            } else {
                alert("Usuário/Senha inválido!!!")
            }
        } else {
            alert("Usuário/Senha inválido!!!")
        }
    }
    api
        .get(`/login?username=${login}`)
        .then(response => verificaLogin(response.data.data))
        .catch(err => {
            console.error("ops! ocorreu um erro" + err);
        });
}

export default Logar;
import BarraNav from 'componentes/BarraNav';
import Rodape from 'componentes/Rodape';
import AreaDoPiloto from 'paginas/AreaDoPiloto';
import EdicaoPiloto from 'paginas/AreaDoPiloto/EdicaoPiloto';
import Cadastro from 'paginas/Cadastro/Index';
import Inicio from 'paginas/Inicio';
import Login from 'paginas/Login';
import PaginaPadrao from 'paginas/PaginaPadrao';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import './styles/globalStyle.scss';

function AppRoutes() {
  const videoYoutube = {
    index: 0,
    id: "Xzh-sXi-Ge0"
  }

  const [videoAtual, setVideoAtual] = useState(videoYoutube);
  const [indexCarrosel, setIndexsCarrosel] = useState([1, 2, 3, 4, 5, 6]);
  const [piloto, setPiloto] = useState({})
  const [logado, setLogado] = useState(false)
  const [admin, setAdmin] = useState(false)

  return (
    <BrowserRouter>
      <Cabecalho />
      <BarraNav />
      <Routes>
        <Route path='/' element={<PaginaPadrao
          indexsCarrosel={indexCarrosel}
          setIndexsCarrosel={setIndexsCarrosel}
          logado={logado}
          setLogado={setLogado}
        />} >
          <Route index element={<Inicio
            videoAtual={videoAtual}
            setVideoAtual={setVideoAtual}
          />} />
          <Route path='cadastro' element={<Cadastro
            setLogado={setLogado}
            setPiloto={setPiloto}
          />} />
          <Route path='login' element={<Login
            logado={logado}
            setLogado={setLogado}
            admin={admin}
            setAdmin={setAdmin}
            piloto={piloto}
            setPiloto={setPiloto}
          />} />
          <Route path='area-do-piloto' element={<AreaDoPiloto
            logado={logado}
            setLogado={setLogado}
            piloto={piloto}
            setPiloto={setPiloto}
            admin={admin}
            setAdmin={setAdmin}
          />} />
          <Route path='area-do-piloto/edicao' element={<EdicaoPiloto
            logado={logado}
            piloto={piloto}
            setPiloto={setPiloto}
          />} />
        </Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

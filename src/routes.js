import BarraNav from 'componentes/BarraNav';
import Rodape from 'componentes/Rodape';
import Cadastro from 'paginas/Cadastro/Index';
import Inicio from 'paginas/Inicio';
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
  const [imagem, setImagem] = useState()

  return (
    <BrowserRouter>
      <Cabecalho />
      <BarraNav />
      <Routes>
        <Route path='/' element={<PaginaPadrao
          indexsCarrosel={indexCarrosel}
          setIndexsCarrosel={setIndexsCarrosel}
        />}
        >
          <Route index element={<Inicio
            videoAtual={videoAtual}
            setVideoAtual={setVideoAtual}
          />
          }
          />
          <Route index path='cadastro' element={<Cadastro
            imagem={imagem}
            setImagem={setImagem}
          />} />
        </Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

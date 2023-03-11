import BarraNav from 'componentes/BarraNav';
import Rodape from 'componentes/Rodape';
import Cadastro from 'paginas/Cadastro/Index';
import Inicio from 'paginas/Inicio';
import PaginaPadrao from 'paginas/PaginaPadrao';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import './styles/globalStyle.scss';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <BarraNav />

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route index path='cadastro' element={<Cadastro />} />
        </Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

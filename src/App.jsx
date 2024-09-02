import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarNavegation from './components/NavBarNavegation.jsx';
const App = () => {
  return (
     <>
      <NavBarNavegation />
      <main>
        <Outlet /> {/* Renderiza as páginas internas aqui */}
      </main>
    </>
  );
};

export default App;
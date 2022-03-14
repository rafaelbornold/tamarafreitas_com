import React, { useState } from 'react';

import MainRoutes from './routes';
import Links from './pages/links';
import FixedWhatsappIcon from './components/FixedWhatsappIcon';

const App = () => {

  const [message, setMessage] = useState('Hello World');

  return (
    <>   
    <FixedWhatsappIcon /> 
    <MainRoutes />
    </>
  );
}

export default App;

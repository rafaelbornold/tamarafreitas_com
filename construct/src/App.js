import React, { useState } from 'react';

import MainRoutes from './routes';
import Links from './pages/links';

const App = () => {

  const [message, setMessage] = useState('Hello World');

  return (
    <>    
    <MainRoutes />
    </>
  );
}

export default App;

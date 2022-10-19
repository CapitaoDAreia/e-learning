import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import GlobalStructure from './Components/Structurals/GlobalStructure.component';

function App() {
  return (
    <BrowserRouter>
      <GlobalStructure />
    </BrowserRouter>
  );
}

export default App;

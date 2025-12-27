import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { TodosContainer } from './components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodosContainer />
  </StrictMode>
);

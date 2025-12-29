import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  // TodosContainer,
  // UnControlledWithRef,
  UnControlledWithoutRef,
} from './components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TodosContainer /> */}
    {/* <UnControlledWithRef /> */}
    <UnControlledWithoutRef />
  </StrictMode>
);

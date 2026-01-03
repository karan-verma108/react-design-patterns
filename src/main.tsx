import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  // TodosContainer,
  // UnControlledWithRef,
  // UnControlledWithoutRef,
  Modal,
} from './components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TodosContainer /> */}
    {/* <UnControlledWithRef /> */}
    {/* <UnControlledWithoutRef /> */}
    <Modal
      isOpen={true}
      onClose={() => {
        //
      }}
    >
      <Modal.Header>Main title</Modal.Header>
      <Modal.Body>
        <p>This is the modal body</p>
      </Modal.Body>
      <Modal.Footer>
        <button>Save</button>
      </Modal.Footer>
    </Modal>
  </StrictMode>
);

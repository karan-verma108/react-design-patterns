const Modal = ({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <div>
      {children}
      <button onClick={onClose}>close</button>
    </div>
  );
};

const ModalHeader = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const ModalBody = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;

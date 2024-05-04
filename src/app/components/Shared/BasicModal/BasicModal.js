
"useClient";
import { Button, Modal } from "semantic-ui-react";

export function BasicModal({show, onClose, title, children }) {
  return (
    <>
      <Modal open={show} onClose={onClose} size="small">
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
         {children}
        </Modal.Content>
      </Modal>
    </>
  );
}

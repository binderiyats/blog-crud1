import { Modal } from "react-bootstrap";
export default function DynamicModal() {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
    </Modal>
  );
}

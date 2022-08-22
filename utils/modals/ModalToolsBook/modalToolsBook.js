import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/react';

const ModalToolsBooks = ({ id, isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Tes {id}</ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Kembali
            </Button>
            <Button variant="solid-acc">Edit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalToolsBooks;

import {
  Button,
  ButtonGroup,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoWarningOutline } from 'react-icons/io5';

const ModalWarning = ({ id, isOpen, onClose, buttonText, children }) => {
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      //   closeOnOverlayClick={!isLoading}
    >
      <ModalContent>
        <ModalHeader>
          <VStack>
            <Icon as={IoWarningOutline} fontSize="9xl" color="ims-red" />
            <Text>Warning</Text>
          </VStack>
        </ModalHeader>
        <ModalBody>
          <Text fontSize="sm" textAlign="center">
            {children}
          </Text>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup d="flex" flexGrow={1}>
            <Button
              flexGrow={1}
              variant="outline"
              rounded="md"
              onClick={onClose}
              //   isDisabled={isLoading}
            >
              Batal
            </Button>
            <Button
              flexGrow={1}
              variant="solid-danger"
              rounded="md"
              //   onClick={buttonOnClick}
              //   isLoading={isLoading}
            >
              {buttonText}
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalWarning;

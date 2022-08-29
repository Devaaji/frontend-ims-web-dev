import {
  Button,
  ButtonGroup,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { MdOutlineManageSearch } from 'react-icons/md';
import { FaFileDownload } from 'react-icons/fa';
import ExportFileXLSX from '../../../utils/download/ExportFileXLSX';

const FilterSearchToolsBook = (data) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const DataToDownload = data?.data;

  console.log('ToDownload', DataToDownload);

  const { exportFile } = ExportFileXLSX(DataToDownload, 'ToolsBook');
  return (
    <HStack>
      <Button
        rounded="md"
        leftIcon={<Icon as={MdOutlineManageSearch} fontSize="xl" />}
        px="8px"
        onClick={onOpen}
        border="1px"
        color="ims-primary"
        borderColor="ims-primary"
      >
        Filter Search
      </Button>
      <Spacer />
      <ButtonGroup>
        <Button
          leftIcon={<Icon as={FaFileDownload} color="white" fontSize="md" />}
          colorScheme="green"
        >
          <Tooltip label="Download CSV" fontSize="sm">
            CSV
          </Tooltip>
        </Button>
        <Button
          onClick={exportFile}
          colorScheme="green"
          leftIcon={<Icon as={FaFileDownload} fontSize="md" />}
        >
          <Tooltip label="Download XLSX" fontSize="sm">
            XLSX
          </Tooltip>
        </Button>
      </ButtonGroup>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={{ base: '2', md: 'none' }}>
          <ModalHeader>FIlter Search Tools Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody>FIlter Search</ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button
                border="1px"
                color="ims-primary"
                borderColor="ims-primary"
                aria-label="close modal"
                onClick={onClose}
              >
                Batal
              </Button>
              <Button
                type="submit"
                bg="ims-primary"
                color="white"
                _hover={{ bg: 'button-hover' }}
              >
                Cari
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default FilterSearchToolsBook;

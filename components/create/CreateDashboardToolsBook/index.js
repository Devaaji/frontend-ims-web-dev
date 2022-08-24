import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { IoAdd, IoClose } from 'react-icons/io5';
import React from 'react';

const CreateDashboardToolsBook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack borderBottomWidth="1px" pb="6">
      <Text fontWeight="semibold" color="ims-primary" size="title-medium">
        Tools Book
      </Text>
      <Spacer />
      <Button
        rounded="md"
        leftIcon={<Icon as={IoAdd} fontSize="xl" />}
        px="4"
        borderWidth="1px"
        color="ims-primary"
        borderColor="ims-primary"
        onClick={onOpen}
      >
        Tambah Items
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent mx={{ base: '2', md: 'none' }}>
          <Box as="form">
            <ModalHeader>
              <HStack>
                <Text>Tambah Items</Text>
                <Spacer />
                <IconButton
                  border="1px"
                  color="ims-primary"
                  borderColor="ims-primary"
                  aria-label="close modal"
                  icon={<IoClose />}
                  fontSize="xl"
                  onClick={onClose}
                  rounded="md"
                />
              </HStack>
            </ModalHeader>
            <ModalBody>
              <VStack align="stretch">
                <FormControl id="name">
                  <FormLabel>Nama Barang</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl id="category">
                  <FormLabel>Kategori Barang</FormLabel>
                  <Select placeholder="Pilih Kategori">
                    <option>Senjata</option>
                    <option>Kendaraan</option>
                    <option>Alat Berat</option>
                    <option>DropBox</option>
                  </Select>
                </FormControl>
                <FormControl id="inItems">
                  <FormLabel>In Items</FormLabel>
                  <Input type="date" />
                </FormControl>
                <FormControl id="outItems">
                  <FormLabel>Out Items</FormLabel>
                  <Input type="date" />
                </FormControl>
                <FormControl id="status">
                  <FormLabel>Status</FormLabel>
                  <RadioGroup name="status">
                    <Radio px="8px">Aktif</Radio>
                    <Radio px="8px">Tahap Produksi</Radio>
                    <Radio px="8px">Tidak Aktif</Radio>
                  </RadioGroup>
                </FormControl>
              </VStack>
            </ModalBody>
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
                  Tambah
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default CreateDashboardToolsBook;

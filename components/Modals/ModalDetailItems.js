import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { TableToNameItems as TableToName } from '../../utils/tables/TableToNameItems';

const ModalDetailCheckItems = ({ item, isOpen, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay bg="blackAlpha.300" />
        <ModalContent mx="4" overflow="hidden">
          <ModalHeader>Detail Check Items</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w="max" align="stretch">
              <TableToName tableName="Nomor" item={item.nomor} />
              <TableToName tableName="Nama Barang" item={item.namaBarang} />
              <TableToName tableName="Material Nam" item={item.materialNam} />
              <TableToName tableName="Material Code" item={item.materialCode} />
              <TableToName tableName="Status" item={item.status} />
              <TableToName tableName="Category" item={item.kategori} />
              <TableToName tableName="Min Stock" item={item.minStock} />
              <TableToName tableName="Max Stock" item={item.maxStock} />
              <TableToName tableName="In Item" item="12 June 2019" />
              <TableToName tableName="Out Item" item="25 February 2021" />
              <TableToName tableName="Nomor" item={item.nomor} />
              <TableToName tableName="Nama Barang" item={item.namaBarang} />
              <TableToName tableName="Material Nam" item={item.materialNam} />
              <TableToName tableName="Material Code" item={item.materialCode} />
              <TableToName tableName="Status" item={item.status} />
              <TableToName tableName="Category" item={item.kategori} />
              <TableToName tableName="Min Stock" item={item.minStock} />
              <TableToName tableName="Max Stock" item={item.maxStock} />
              <TableToName tableName="In Item" item="12 June 2019" />
              <TableToName tableName="Out Item" item="25 February 2021" />
              <TableToName tableName="Nomor" item={item.nomor} />
              <TableToName tableName="Nama Barang" item={item.namaBarang} />
              <TableToName tableName="Material Nam" item={item.materialNam} />
              <TableToName tableName="Material Code" item={item.materialCode} />
              <TableToName tableName="Status" item={item.status} />
              <TableToName tableName="Category" item={item.kategori} />
              <TableToName tableName="Min Stock" item={item.minStock} />
              <TableToName tableName="Max Stock" item={item.maxStock} />
              <TableToName tableName="In Item" item="12 June 2019" />
              <TableToName tableName="Out Item" item="25 February 2021" />
              <TableToName tableName="Nomor" item={item.nomor} />
              <TableToName tableName="Nama Barang" item={item.namaBarang} />
              <TableToName tableName="Material Nam" item={item.materialNam} />
              <TableToName tableName="Material Code" item={item.materialCode} />
              <TableToName tableName="Status" item={item.status} />
              <TableToName tableName="Category" item={item.kategori} />
              <TableToName tableName="Min Stock" item={item.minStock} />
              <TableToName tableName="Max Stock" item={item.maxStock} />
              <TableToName tableName="In Item" item="12 June 2019" />
              <TableToName tableName="Out Item" item="25 February 2021" />
              <TableToName tableName="Nomor" item={item.nomor} />
              <TableToName tableName="Nama Barang" item={item.namaBarang} />
              <TableToName tableName="Material Nam" item={item.materialNam} />
              <TableToName tableName="Material Code" item={item.materialCode} />
              <TableToName tableName="Status" item={item.status} />
              <TableToName tableName="Category" item={item.kategori} />
              <TableToName tableName="Min Stock" item={item.minStock} />
              <TableToName tableName="Max Stock" item={item.maxStock} />
              <TableToName tableName="In Item" item="12 June 2019" />
              <TableToName tableName="Out Item" item="25 February 2021" />
            </Box>
          </ModalBody>

          <ModalFooter bg="gray.100">
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
                Lihat Lebih Lanjut
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDetailCheckItems;

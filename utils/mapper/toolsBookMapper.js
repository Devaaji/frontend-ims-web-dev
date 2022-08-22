import { Button, useDisclosure } from '@chakra-ui/react';
import ModalToolsBooks from '../modals/ModalToolsBook/modalToolsBook';
import ModalWarning from '../modals/ModalWarning';

const toolBooksMapper = {
  toLocal: (value) => ({
    id: value?.id,
    firstName: value?.firstName,
    lastName: value?.lastname,
    age: value?.age,
    visits: value?.visits,
    status: value?.status,
    progress: value?.progress,
    action: (
      <>
        <Button>Edit {value?.id}</Button>
        <Button>Hapus</Button>
        <ModalToolsBooks />

        <ModalWarning
          buttonText="Hapus"
          // isOpen={isOpenDelete}
          // onClose={onCloseDelete}
        >
          Apakah Kamu Yakin?
        </ModalWarning>
      </>
    ), // tes 1 belum selesai
  }),
  toLocalList: (values) =>
    values.map((value) => toolBooksMapper.toLocal(value)),
};

export default toolBooksMapper;

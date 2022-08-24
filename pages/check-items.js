import React, { useMemo, useState } from 'react';
import Head from 'next/head';

import {
  Box,
  HStack,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import { TableToNameItems as TableToName } from '../utils/tables/TableToNameItems';
import { generateEntryOptions } from '../components/core/select/helper/entryOptions';
import Select from '../components/core/select';

import CreateDashboardCheckItems from '../components/create/CreateDashboardCheckItems';
import FilterSearchCheckItem from '../components/filter/FilterSearchCheckItem';
import ModalDetailCheckItems from '../components/Modals/ModalDetailItems';
import DashboardPagination from '../components/dashboard/DashboardPagination';
import useRemoteCheckItems from '../components/hooks/remote/useRemoteCheckItems';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const CheckItems = () => {
  const [dataLimit, setDataLimit] = useState(5);

  const { data } = useRemoteCheckItems(dataLimit);

  const showEntryOptions = useMemo(() => generateEntryOptions(), []);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack align="stretch" py="6" px="4" spacing="6">
        <Head>
          <title>Checks Items | IMS</title>
        </Head>
        <CreateDashboardCheckItems />
        <FilterSearchCheckItem />
        <Stack spacing="5">
          {data?.data.map((item, index) => (
            <Box
              key={index}
              bg="white"
              rounded="md"
              _hover={{ bg: 'ims-button-primary', cursor: 'pointer' }}
              p="4"
              shadow="sm"
              align="stretch"
              onClick={onOpen}
            >
              <ModalDetailCheckItems
                item={item}
                isOpen={isOpen}
                onClose={onClose}
              />
              <HStack
                borderWidth="1px"
                rounded="md"
                w="full"
                align="flex-start"
                overflow="auto"
                p="2"
              >
                <Box w="max" align="stretch">
                  <TableToName tableName="Nomor" item={item.nomor} />
                  <TableToName tableName="Nama Barang" item={item.namaBarang} />
                  <TableToName
                    tableName="Material Nam"
                    item={item.materialNam}
                  />
                  <TableToName
                    tableName="Material Code"
                    item={item.materialCode}
                  />
                  <TableToName tableName="Status" item={item.status} />
                </Box>
                {/*  5-10 */}
                <Box w="max" align="stretch">
                  <TableToName tableName="Category" item={item.kategori} />
                  <TableToName tableName="Min Stock" item={item.minStock} />
                  <TableToName tableName="Max Stock" item={item.maxStock} />
                  <TableToName tableName="In Item" item="12 June 2019" />
                  <TableToName tableName="Out Item" item="25 February 2021" />
                </Box>
                {/* 10 - 15 */}
                <Box w="max" align="stretch">
                  <TableToName tableName="Nomor" item={item.nomor} />
                  <TableToName tableName="Nama Barang" item={item.namaBarang} />
                  <TableToName
                    tableName="Material Nam"
                    item={item.materialNam}
                  />
                  <TableToName
                    tableName="Material Code"
                    item={item.materialCode}
                  />
                  <TableToName tableName="Status" item={item.status} />
                </Box>
                {/* 20 -25 */}
                <Box w="max" align="stretch">
                  <TableToName tableName="Category" item={item.kategori} />
                  <TableToName tableName="Min Stock" item={item.minStock} />
                  <TableToName tableName="Max Stock" item={item.maxStock} />
                  <TableToName tableName="In Item" item="12 June 2019" />
                  <TableToName tableName="Out Item" item="25 February 2021" />
                </Box>
              </HStack>
            </Box>
          ))}
        </Stack>
        <HStack borderTopWidth="1px" py="2">
          <Text>Show</Text>
          <Select
            isSearchable={false}
            options={showEntryOptions}
            defaultValue={showEntryOptions[0]}
            onChange={(option) => setDataLimit(option.value)}
          />
          <Text>Entries</Text>
          <Spacer />
          <DashboardPagination
            current={1}
            total={100}
            onPageClick={() => onPageClick()}
          />
        </HStack>
      </VStack>
    </>
  );
};

CheckItems.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CheckItems;

import React, { useMemo, useState } from 'react';

import {
  Badge,
  Box,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import Select from '../components/core/select';
import { generateEntryOptions } from '../components/core/select/helper/entryOptions';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardPagination from '../components/dashboard/DashboardPagination';
import useRemoteCheckItems from '../components/hooks/remote/useRemoteCheckItems';
import CreateDashboardCheckItems from '../components/create/CreateDashboardCheckItems';
import FilterSearchCheckItem from '../components/filter/FilterSearchCheckItem';

const CheckItems = () => {
  const [dataLimit, setDataLimit] = useState(5);
  const { data } = useRemoteCheckItems(dataLimit);
  const showEntryOptions = useMemo(() => generateEntryOptions(), []);

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
              _hover={{ bg: '#F9F9F9', cursor: 'pointer' }}
              p="4"
              shadow="sm"
              align="stretch"
            >
              <HStack borderWidth="1px" overflowY="auto" p="2">
                <Box w="full">
                  <Stack w="max" mr="20px">
                    <HStack>
                      <Text fontWeight="semibold">Nomor</Text>
                      <Text>: {item.nomor}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Nama Barang</Text>
                      <Text>: {item.namaBarang}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Material Nam</Text>
                      <Text>: {item.materialNam}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Material Code</Text>
                      <Text>: {item.materialCode}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Status</Text>
                      {item.status === 'active' && (
                        <Badge colorScheme="green">Active</Badge>
                      )}
                      {item.status === 'in production' && (
                        <Badge colorScheme="orange">In-Production</Badge>
                      )}
                      {item.status === 'non active' && (
                        <Badge colorScheme="red">Non-Active</Badge>
                      )}
                    </HStack>
                  </Stack>
                </Box>
                <Box w="full">
                  <Stack w="max" mr="20px">
                    <HStack>
                      <Text fontWeight="semibold">Category</Text>
                      <Text>: {item.kategori}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Minimum Stock</Text>
                      <Text>: {item.minStock}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Maximum Nam</Text>
                      <Text>: {item.maxStock}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">In Item</Text>
                      <Text>: 232</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Out Item</Text>
                      <Text>: 214</Text>
                    </HStack>
                  </Stack>
                </Box>
                <Box w="full">
                  <Stack w="max" mr="20px">
                    <HStack>
                      <Text fontWeight="semibold">Nomor :</Text>
                      <Text>{item.nomor}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Nama Barang :</Text>
                      <Text>{item.namaBarang}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Material Nam :</Text>
                      <Text>{item.materialNam}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Material Code :</Text>
                      <Text>{item.materialCode}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Status :</Text>
                      {item.status === 'active' && (
                        <Badge colorScheme="green">Active</Badge>
                      )}
                      {item.status === 'in production' && (
                        <Badge colorScheme="orange">Production</Badge>
                      )}
                      {item.status === 'non active' && (
                        <Badge colorScheme="red">Non-Active</Badge>
                      )}
                    </HStack>
                  </Stack>
                </Box>
                <Box w="full">
                  <Stack w="max" mr="20px">
                    <HStack>
                      <Text fontWeight="semibold">Category :</Text>
                      <Text>{item.kategori}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Minimum Stock :</Text>
                      <Text>{item.minStock}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Maximum Nam :</Text>
                      <Text>{item.maxStock}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">In Item :</Text>
                      <Text>232</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Out Item :</Text>
                      <Text>214</Text>
                    </HStack>
                  </Stack>
                </Box>
                <Box w="full">
                  <Stack w="max" mr="20px">
                    <HStack>
                      <Text fontWeight="semibold">Nomor :</Text>
                      <Text>{item.nomor}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Nama Barang :</Text>
                      <Text>{item.namaBarang}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Material Nam :</Text>
                      <Text>{item.materialNam}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Material Code :</Text>
                      <Text>{item.materialCode}</Text>
                    </HStack>
                    <HStack>
                      <Text fontWeight="semibold">Status :</Text>
                      <Text>{item.status}</Text>
                    </HStack>
                  </Stack>
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

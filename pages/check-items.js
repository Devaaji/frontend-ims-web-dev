import React, { useMemo, useState } from 'react';

import {
  Box,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  useDisclosure,
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
import ModalDetailCheckItems from '../components/Modals/ModalDetailItems';

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
              _hover={{ bg: '#F9F9F9', cursor: 'pointer' }}
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
                  <HStack w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold">Nomor</Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.nomor}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Nama Barang
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.namaBarang}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Material Nam
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.materialNam}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Material Code
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.materialCode}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Status
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.status}</Text>
                    </Box>
                  </HStack>
                </Box>
                {/*  5-10 */}
                <Box w="max" align="stretch">
                  <HStack w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold">Category</Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.kategori}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Min Stock
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.minStock}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Max Stock
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.maxStock}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          In Item
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>10 Desember 2021</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Out Item
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>14 Jan 2022 </Text>
                    </Box>
                  </HStack>
                </Box>
                <Box w="max" align="stretch">
                  <HStack w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold">Nomor</Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.nomor}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Nama Barang
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.namaBarang}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Material Nam
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.materialNam}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Material Code
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.materialCode}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Status
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.status}</Text>
                    </Box>
                  </HStack>
                </Box>
                {/*  5-10 */}
                <Box w="max" align="stretch">
                  <HStack w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold">Category</Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.kategori}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Min Stock
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.minStock}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Max Stock
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.maxStock}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          In Item
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>10 Desember 2021</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Out Item
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>14 Jan 2022 </Text>
                    </Box>
                  </HStack>
                </Box>
                <Box w="max" align="stretch">
                  <HStack w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold">Category</Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.kategori}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Min Stock
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.minStock}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Max Stock
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>{item.maxStock}</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          In Item
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>10 Desember 2021</Text>
                    </Box>
                  </HStack>
                  <HStack mt="1" w="full" align="flex-start">
                    <Box w="150px">
                      <Flex justify="space-between">
                        <Text fontWeight="semibold" wordBreak="break-word">
                          Out Item
                        </Text>
                        <Text>:</Text>
                      </Flex>
                    </Box>
                    <Box w="200px" wordBreak="break-word">
                      <Text>14 Jan 2022 </Text>
                    </Box>
                  </HStack>
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

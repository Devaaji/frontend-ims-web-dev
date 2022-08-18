import React, { useMemo, useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Box,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spacer,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import {
  CgChevronLeft,
  CgChevronRight,
  CgPushChevronLeft,
  CgPushChevronRight,
} from 'react-icons/cg';
import Head from 'next/head';
import { FiSearch } from 'react-icons/fi';
import CreateDashboardCheckItems from '../components/create/CreateDashboardCheckItems';
import { Person } from '../utils/Testing/newPerson';

const CheckItems = () => {
  const data = Person;
  const [sorting, setSorting] = useState([]);

  const columns = useMemo(
    () => [
      {
        header: 'Name',
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: 'firstName',
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.lastname,
            id: 'lastName',
            cell: (info) => info.getValue(),
            header: () => <Text color="red">Last Name</Text>,
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: 'Info',
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: 'age',
            header: () => <Text color="blue">Age</Text>,
            footer: (props) => props.column.id,
          },
          {
            header: 'More Info',
            columns: [
              {
                accessorKey: 'visits',
                header: () => <span>Visits</span>,
                footer: (props) => props.column.id,
              },
              {
                accessorKey: 'status',
                header: 'Status',
                footer: (props) => props.column.id,
              },
              {
                accessorKey: 'progress',
                header: 'Profile Progress',
                footer: (props) => props.column.id,
              },
            ],
          },
          {
            accessorKey: 'createdAt',
            header: 'Created At',
          },
        ],
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });
  return (
    <VStack align="stretch" py="6" px="4" spacing="6">
      <Head>
        <title>Pengaturan Sistem | IMS</title>
      </Head>
      <CreateDashboardCheckItems />
      <HStack>
        <Text>Show</Text>
        <Select
          bg="white"
          w="max"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </Select>
        <Text>Entries</Text>
        <Spacer />
        <InputGroup maxW="xs" as="form">
          <InputRightElement pointerEvents="none">
            <FiSearch />
          </InputRightElement>
          <Input
            type="text"
            placeholder="Search.."
            variant="outline"
            shadow="none"
          />
        </InputGroup>
      </HStack>
      <TableContainer
        bg="white"
        rounded="xl"
        shadow="0px 0px 2px 1px rgba(0, 0, 0, 0.25)"
      >
        <Table variant="simple">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      textAlign="center"
                      key={header.id}
                      colSpan={header.colSpan}
                    >
                      <Flex
                        flexDirection="row"
                        justifyContent="center"
                        w="full"
                      >
                        {header.isPlaceholder ? null : (
                          <>
                            <Box
                              onClick={header.column.getToggleSortingHandler()}
                              cursor={
                                header.column.getCanSort() ? 'pointer' : ''
                              }
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </Box>
                            <Box>
                              {{
                                asc: <FaCaretDown />,
                                desc: <FaCaretUp />,
                              }[header.column.getIsSorted()] ?? null}
                            </Box>
                          </>
                        )}
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          {/* Data table hash mapping */}
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  //Disini notif herdrayed
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {/* Pagination Page */}
      <Flex my="10px">
        <Spacer />
        <Stack>
          <HStack spacing={8}>
            <Box>
              <HStack>
                <Text>{table.getRowModel().rows.length} Rows | </Text>
                <Text>Page</Text>
                <Text fontWeight="semibold">
                  {table.getState().pagination.pageIndex + 1} of{' '}
                  {table.getPageCount()}
                </Text>
              </HStack>
            </Box>
            <ButtonGroup variant="outline" colorScheme="blue">
              <IconButton
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
                icon={<CgPushChevronLeft />}
              />
              <IconButton
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                icon={<CgChevronLeft />}
              />
              <IconButton
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                icon={<CgChevronRight />}
              />
              <IconButton
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
                icon={<CgPushChevronRight />}
              />
            </ButtonGroup>
          </HStack>
        </Stack>
      </Flex>
    </VStack>
  );
};

CheckItems.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CheckItems;

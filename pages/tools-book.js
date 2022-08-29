import React, { useMemo, useState } from 'react';
import Head from 'next/head';

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  Select,
  Spacer,
  Spinner,
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

import { useSortBy, usePagination, useTable } from 'react-table';

import useRemoteToolsBook from '../components/hooks/remote/useRemoteToolsBook';

import { FaCaretDown, FaCaretUp, FaSort } from 'react-icons/fa';
import CreateDashboardToolsBook from '../components/create/CreateDashboardToolsBook';
import FilterSearchToolsBook from '../components/filter/FilterSearchToolsBook';
import DashboardPagination from '../components/dashboard/DashboardPagination';
import DashboardLayout from '../components/dashboard/DashboardLayout';

// import {
//   CgChevronLeft,
//   CgChevronRight,
//   CgPushChevronLeft,
//   CgPushChevronRight,
// } from 'react-icons/cg';

const ToolsBookPage = () => {
  //ini pemanggilan data setelah di fetching
  const { data: newDataToolsBook } = useRemoteToolsBook();
  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Progress',
        accessor: 'progress',
      },
      {
        Header: ' Aksi',
        accessor: 'action',
      },
    ],
    []
  );

  function TableData({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable(
      {
        data,
        columns,
      },
      useSortBy,
      usePagination
    );

    // Render the UI for your table
    return (
      <>
        <VStack align="stretch" py="6" px="4" spacing="6">
          <Head>
            <title>Tools Book | IMS</title>
          </Head>
          <CreateDashboardToolsBook />
          <FilterSearchToolsBook data={newDataToolsBook} />
          <Box overflowX="auto" bg="white">
            <Table {...getTableProps()} variant="outline">
              <Thead bg="gray.300">
                {headerGroups.map((headerGroup) => (
                  <Tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <Th
                        _hover={{ bg: 'gray.400' }}
                        textAlign="center"
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        <Flex
                          flexDirection="row"
                          align="center"
                          justifyContent="space-between"
                          w="full"
                        >
                          {column.render('Header')}
                          <Box as="span">
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <FaCaretDown />
                              ) : (
                                <FaCaretUp />
                              )
                            ) : (
                              <FaSort />
                            )}
                          </Box>
                        </Flex>
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <Tr
                      {...row.getRowProps()}
                      _hover={{ bg: 'gray.100', cursor: 'pointer' }}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <Td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </Td>
                        );
                      })}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
          {!newDataToolsBook ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            <HStack>
              <Text>Show</Text>
              <Select
                variant="outline"
                colorScheme="blue"
                bg="white"
                w="max"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
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
              <DashboardPagination
                current={pageIndex + 1}
                total={pageOptions.length}
                onPageClick={() => nextPage()}
              />
            </HStack>
          )}
          {/* <Flex my="10px">
            <Spacer />
            <Box>
              <div className="pagination">
                <span>
                  Page{' '}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{' '}
                </span>
                <span>
                  | Go to page:{' '}
                  <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(page);
                    }}
                    style={{ width: '100px' }}
                  />
                </span>{' '}
              </div>
            </Box>
            <Stack>
              <HStack spacing="8">
                <ButtonGroup variant="outline" colorScheme="blue">
                  <IconButton
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                    icon={<CgPushChevronLeft />}
                  />
                  <IconButton
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    icon={<CgChevronLeft />}
                  />
                  <IconButton
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    icon={<CgChevronRight />}
                  />
                  <IconButton
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                    icon={<CgPushChevronRight />}
                  />
                </ButtonGroup>
              </HStack>
            </Stack>
          </Flex> */}
        </VStack>
      </>
    );
  }

  return (
    <div>
      <TableData columns={columns} data={newDataToolsBook} />
    </div>
  );
};

ToolsBookPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ToolsBookPage;

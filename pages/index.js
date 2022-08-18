import React from 'react';
import Head from 'next/head';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import {
  HStack,
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
import PageHomeDashboard from '../components/PageDashboard/PageHomeDashboard';

const Home = () => {
  return (
    <React.Fragment>
      <VStack align="stretch" py="6" px="4" spacing="6">
        <Head>
          <title>Dashboard | IMS</title>
        </Head>
        <HStack borderBottomWidth="1px" pb="6">
          <Text fontWeight="semibold" color="ims-primary" size="title-medium">
            Dashboard IMS
          </Text>
        </HStack>
        <PageHomeDashboard />
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </React.Fragment>
  );
};

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Home;

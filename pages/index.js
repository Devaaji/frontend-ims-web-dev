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
import { getServerSidePropsWithAuth } from '../utils/getServerSidePropsWithAuth';

const Home = () => {
  return (
    <React.Fragment>
      <VStack align="stretch" py="6" px="4" spacing="6">
        <Head>
          <title>Dashboard | IMS</title>
        </Head>
        <PageHomeDashboard />
        <TableContainer overflowX="auto" bg="white">
          <Table variant="outline">
            <Thead bg="gray.300">
              <Tr>
                <Th _hover={{ bg: 'gray.400' }}>To convert</Th>
                <Th _hover={{ bg: 'gray.400' }}>into</Th>
                <Th _hover={{ bg: 'gray.400' }}>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>30.48</Td>
              </Tr>
              <Tr _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
              <Tr _hover={{ bg: 'gray.100', cursor: 'pointer' }}>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </React.Fragment>
  );
};

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export const getServerSideProps = getServerSidePropsWithAuth;

export default Home;

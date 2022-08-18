import React from 'react';
import Head from 'next/head';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { Box, VStack } from '@chakra-ui/react';

const Home = () => {
  return (
    <React.Fragment>
      <VStack align="stretch" py="6" px="4" spacing="6">
        <Head>
          <title>Dashboard | IMS</title>
        </Head>
        <Box>Dashboard Home</Box>
      </VStack>
    </React.Fragment>
  );
};

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Home;

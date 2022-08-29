import { Box, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import LineChartDasboard from '../../Chart/lineChartDashboard';
import PieChartDashboard from '../../Chart/pieChartDashboard';

const PageHomeDashboard = () => {
  return (
    <>
      <Box
        display="flex"
        flexDir={{ base: 'column', md: 'row' }}
        align="stretch"
      >
        <PieChartDashboard />
        <LineChartDasboard />
      </Box>
    </>
  );
};

export default PageHomeDashboard;

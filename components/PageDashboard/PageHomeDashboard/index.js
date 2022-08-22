import { Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import LineChartDasboard from '../../Chart/lineChartDashboard';
import PieChartDashboard from '../../Chart/pieChartDashboard';

const PageHomeDashboard = () => {
  return (
    <>
      <HStack
        flexDir={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="stretch"
      >
        <PieChartDashboard />
        <LineChartDasboard />
      </HStack>
    </>
  );
};

export default PageHomeDashboard;

import { Flex } from '@chakra-ui/react';
import React from 'react';
import LineChartDasboard from '../../Chart/lineChartDashboard';
import PieChartDashboard from '../../Chart/pieChartDashboard';

const PageHomeDashboard = () => {
  return (
    <>
      <Flex
        borderBottomWidth="1px"
        justifyContent="space-between"
        alignItems="center"
        w="full"
        direction={{ base: 'column', md: 'row' }}
      >
        <PieChartDashboard />
        <LineChartDasboard />
      </Flex>
    </>
  );
};

export default PageHomeDashboard;

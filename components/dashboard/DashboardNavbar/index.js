import React from 'react';
import { Box, Flex, HStack, IconButton, Stack } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useDashboard } from '../../../context/dashboard/DashboardProvider';
import DashboardUserNavbar from '../DashboardUserNavbar';

const DashboardNavbar = () => {
  const { isDesktopSidebarOpened, onSidebarToggle } = useDashboard();
  return (
    <Stack
      p="4"
      bg="white"
      borderBottomWidth="1px"
      alignItems={{
        base: 'stretch',
        md: isDesktopSidebarOpened ? 'stretch' : 'center',
        lg: 'center',
      }}
      direction={{
        base: 'column',
        md: isDesktopSidebarOpened ? 'column' : 'row',
        lg: 'row',
      }}
    >
      <Flex
        w="full"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        <Box>
          <IconButton
            icon={<FiMenu />}
            variant="ghost"
            onClick={onSidebarToggle}
            aria-label="Menu"
          />
        </Box>
        <Box>
          <DashboardUserNavbar />
        </Box>
      </Flex>
    </Stack>
  );
};

export default DashboardNavbar;

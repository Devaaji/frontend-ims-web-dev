import React from 'react';
import { Box, HStack, IconButton, Stack } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useDashboard } from '../../../context/dashboard/DashboardProvider';
import DashboardUserNavbar from '../DashboardUserNavbar';

const DashboardNavbar = () => {
  const { isDesktopSidebarOpened, onSidebarToggle } = useDashboard();
  return (
    <Stack
      p="6"
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
      <HStack alignItems="center" flexGrow={1}>
        <IconButton
          icon={<FiMenu />}
          variant="ghost"
          onClick={onSidebarToggle}
          aria-label="Menu"
        />
        tes
      </HStack>
      <Box position="relative">
        <DashboardUserNavbar />
      </Box>
    </Stack>
  );
};

export default DashboardNavbar;

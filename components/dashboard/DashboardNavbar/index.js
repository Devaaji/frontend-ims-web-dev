import React from 'react';
import { Avatar, Box, HStack, IconButton, Stack } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useDashboard } from '../../../context/dashboard/DashboardProvider';

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
          variant="solid-alt"
          onClick={onSidebarToggle}
          aria-label="Menu"
        />
      </HStack>
      <Box position="relative">
        <Avatar src="" name="Deva Aji Saputra" />
      </Box>
    </Stack>
  );
};

export default DashboardNavbar;

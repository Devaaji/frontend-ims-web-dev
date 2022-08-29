import React from 'react';
import { Box, Flex, HStack, IconButton, Spacer, Stack } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useDashboard } from '../../../context/dashboard/DashboardProvider';
import DashboardUserNavbar from '../DashboardUserNavbar';
import DashboardNotifications from '../DashboardNotifications';

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
      <HStack w="full">
        <Box>
          <IconButton
            icon={<FiMenu />}
            variant="ghost"
            onClick={onSidebarToggle}
            aria-label="Menu"
          />
        </Box>
        <Spacer />
        <HStack spacing={3}>
          <DashboardNotifications />
          <DashboardUserNavbar />
        </HStack>
      </HStack>
    </Stack>
  );
};

export default DashboardNavbar;

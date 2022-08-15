import { Box, Center, Flex, Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useDashboard } from '../../../context/dashboard/DashboardProvider';
import PindadLogo from '../../core/pindadlogo';
import DashboardSidebarItem from '../DashboardSidebarItem';

const DashboardSidebar = ({ items }) => {
  const { pathname } = useRouter();
  const { isDesktopSidebarOpened } = useDashboard();

  return (
    <Box
      as="aside"
      bg="white"
      minW={isDesktopSidebarOpened ? 'xs' : '0'}
      w={isDesktopSidebarOpened ? 'xs' : '0'}
      d={{ base: 'none', md: 'block' }}
      transitionProperty="min-width, width"
      transitionDuration="ultra-slow"
      borderRightWidth={isDesktopSidebarOpened ? '1px' : undefined}
      overflow="hidden"
    >
      <Box minW="xs" py="6" overflow="hidden">
        <Center>
          <PindadLogo multiplySize={1} />
        </Center>
        <Flex as="nav" flexDirection="column" align="stretch" mt="12">
          {items.map((item, index) => (
            <DashboardSidebarItem key={index} item={item} pathname={pathname} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default DashboardSidebar;

import React from 'react';
import {
  Box,
  Collapse,
  Flex,
  Icon,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ViChevronBack, ViChevronForward } from '../../core/icons';

const DashboardSidebarItem = ({ item, pathname }) => {
  const isActive = item.sub
    ? item.sub.some((subItem) => subItem.path === pathname)
    : item.path === pathname;

  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: isActive });

  if (item.sub)
    return (
      <React.Fragment>
        <Flex
          align="stretch"
          alignItems="center"
          borderLeftColor={isActive ? 'ims-primary' : 'transparent'}
          borderLeftWidth={4}
          p="3"
          bg={isActive ? 'ims-button-primary' : undefined}
          color={isActive ? 'ims-primary' : 'black'}
          onClick={onToggle}
          cursor="pointer"
          transitionProperty="common"
          transitionDuration="normal"
        >
          <Box ml="2" mr="4" color={isActive ? 'ims-primary' : 'black'}>
            <Icon as={item.icon} />
          </Box>
          <Text fontSize="md">{item.name}</Text>
          <Box ml="auto">
            {isOpen ? <ViChevronBack /> : <ViChevronForward />}
          </Box>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          {item.sub.map((subItem) => (
            <NextLink href={subItem.path} key={subItem.path} passHref>
              <Text
                as="a"
                display="block"
                p="2"
                bg={isActive ? 'ims-button-primary' : undefined}
                color={subItem.path === pathname ? 'ims-primary' : 'black'}
                bgColor={subItem.path === pathname && 'ims-hover-primary'}
                pl="14"
                transitionProperty="common"
                transitionDuration="normal"
                _hover={{ bg: 'ims-hover-primary' }}
              >
                {subItem.name}
              </Text>
            </NextLink>
          ))}
        </Collapse>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      <NextLink href={item.path} passHref>
        <Flex
          as="a"
          align="stretch"
          alignItems="center"
          borderLeftColor={isActive ? 'ims-primary' : 'transparent'}
          borderLeftWidth={4}
          p="3"
          bg={isActive ? 'ims-button-primary' : undefined}
          color={isActive ? 'ims-primary' : 'black'}
          transitionProperty="common"
          transitionDuration="normal"
          _hover={{ bg: 'ims-hover-primary' }}
        >
          <Box ml="2" mr="4" color={isActive ? 'ims-primary' : 'black'}>
            <Icon as={item.icon} />
          </Box>
          <Text fontSize="md">{item.name}</Text>
        </Flex>
      </NextLink>
    </React.Fragment>
  );
};

export default DashboardSidebarItem;

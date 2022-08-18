import React from 'react';
import {
  Avatar,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FiLogOut, FiUsers } from 'react-icons/fi';
import { useRouter } from 'next/router';

const DashboardUserNavbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };
  return (
    <>
      <Menu placement="bottom-end" isLazy>
        <MenuButton aria-label="Options" bg="transparent" variant="ghost">
          <Avatar
            src=""
            name="Deva Aji Saputra"
            size={{ base: 'sm', md: 'md' }}
          />
        </MenuButton>
        <Portal>
          <MenuList borderColor="vocasia-neutral-8" color="black">
            <HStack m="3">
              <VStack alignItems="left">
                <HStack>
                  <Text
                    fontSize="md"
                    fontStyle="heading"
                    color="black"
                    fontWeight="bold"
                  >
                    Hai,
                  </Text>
                  <Text
                    size="title-small"
                    fontStyle="heading"
                    color="black"
                    fontWeight="bold"
                  >
                    Deva Aji Saputra
                  </Text>
                </HStack>
                <Text color="gray.600" fontSize="sm" fontStyle="heading">
                  Divisi : Teknologi Infomasi
                </Text>
              </VStack>
            </HStack>
            <NextLink href="/profile" passHref>
              <MenuItem as="a" icon={<FiUsers />}>
                Profil Pengguna
              </MenuItem>
            </NextLink>
            <MenuItem
              bg="gray.100"
              color="ims-red"
              icon={<FiLogOut color="ims-red" />}
              onClick={handleLogout}
            >
              Keluar
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </>
  );
};

export default DashboardUserNavbar;

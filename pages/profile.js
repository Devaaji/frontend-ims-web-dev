import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const ProfileUserPage = () => {
  return (
    <VStack align="stretch" py="6" px="4" spacing="6">
      <Head>
        <title>Profile | IMS</title>
      </Head>
      <HStack borderBottomWidth="1px" pb="6">
        <Text fontWeight="semibold" color="ims-primary" size="title-medium">
          Public Profile
        </Text>
        <Spacer />
      </HStack>
      <HStack>
        <Box rounded="md" bg="white" w={{ base: 'full', md: '460px' }} p="23px">
          <Stack>
            <FormControl id="name">
              <FormLabel>Nama</FormLabel>
              <Input type="text" placeholder="Nama Lengkap" />
            </FormControl>
            <FormControl id="divisi">
              <FormLabel>Divisi</FormLabel>
              <Input type="text" placeholder="Divisi" />
            </FormControl>
            <FormControl id="jabatan">
              <FormLabel>Jabatan</FormLabel>
              <Input type="text" placeholder="Jabatan" />
            </FormControl>
            <FormControl id="pangkat">
              <FormLabel>Pangkat</FormLabel>
              <Input type="text" placeholder="Pangkat" />
            </FormControl>
            <FormControl id="otoritas">
              <FormLabel>Otoritas</FormLabel>
              <Input type="text" placeholder="Otoritas" />
            </FormControl>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" placeholder="Username" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>E-mail</FormLabel>
              <Input type="email" placeholder="Email Address" />
            </FormControl>
            <FormControl id="status">
              <FormLabel>Status</FormLabel>
              <Input type="status" placeholder="Status" />
            </FormControl>
          </Stack>
          <Box mt="20px" w="full" display="flex" justifyContent="end">
            <Button
              type="submit"
              bg="ims-primary"
              color="white"
              _hover={{ bg: 'button-hover' }}
              fontWeight="bold"
            >
              Update Profile
            </Button>
          </Box>
        </Box>
      </HStack>
    </VStack>
  );
};

ProfileUserPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ProfileUserPage;

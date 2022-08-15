import React from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { FaUserLock, FaEnvelope } from 'react-icons/fa';

const ResetPasswordPage = () => {
  const [succesSendEmail, setSuccessSendEmail] = useBoolean();

  const handleClickButton = () => {
    setSuccessSendEmail.on();
  };

  if (!succesSendEmail)
    return (
      <React.Fragment>
        <NextSeo title="Reset Password" titleTemplate="%s | IMS" />
        <Flex
          flexDirection="column"
          w="100wh"
          h="100vh"
          border={'4px solid black'}
          justifyContent="center"
          align="center"
        >
          <Stack
            as="form"
            flexDir="column"
            m="4"
            justifyContent="center"
            alignItems="center"
          >
            <Heading w="370px" textAlign="center" color="ims-primary">
              Silahkan Masuk Akun IMS Kamu!
            </Heading>
            <Box
              w={{ base: 'full', md: '400px' }}
              h="max"
              bg="white"
              p="34px"
              boxShadow={'0px 0px 6px 1px rgba(0, 0, 0, 0.25);'}
              borderRadius="15px"
            >
              <Center>
                <Box mt="10px">
                  <Icon as={FaUserLock} w={20} h={20} color="ims-primary" />
                </Box>
              </Center>
              <Stack spacing="8">
                <Box textAlign={'center'}>
                  <Text fontSize="2xl" fontWeight="semibold">
                    Lupa Password?
                  </Text>
                  <Text fontSize="md">
                    Masukan Email yang telah Terdaftar di akun IMS kamu dan kami
                    akan mengirimkan email untuk mereset kata sandi kamu.
                  </Text>
                </Box>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Email Terdaftar"
                    isRequired
                  />
                </FormControl>
                <Button
                  type="submit"
                  bg="ims-primary"
                  color="white"
                  _hover={{ bg: 'button-hover' }}
                  fontWeight="bold"
                  onClick={handleClickButton}
                >
                  Kirim
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      <NextSeo title="Kirim Pesan Email" titleTemplate="%s | IMS" />
      <Flex
        flexDirection="column"
        w="100wh"
        h="100vh"
        border={'4px solid black'}
        justifyContent="center"
        align="center"
      >
        <Stack
          as="form"
          flexDir="column"
          m="4"
          justifyContent="center"
          alignItems="center"
        >
          <Heading w="370px" textAlign="center" color="ims-primary">
            Silahkan Masuk Akun IMS Kamu!
          </Heading>
          <Box
            w={{ base: 'full', md: '400px' }}
            h="max"
            bg="white"
            p="34px"
            boxShadow={'0px 0px 6px 1px rgba(0, 0, 0, 0.25);'}
            borderRadius="15px"
          >
            <Center>
              <Box mt="10px">
                <Icon as={FaEnvelope} w={20} h={20} color="ims-primary" />
              </Box>
            </Center>
            <Stack spacing="8">
              <Box textAlign={'center'}>
                <Text fontSize="2xl" fontWeight="semibold">
                  Terkirim
                </Text>
                <Text fontSize="md">
                  Kami Telah mengirim email yang dapat kamu gunakan untuk
                  mengatur ulang kata sandi. jika email tersebut tidak
                  ditemukan, silahkan cek folder spam dan sampah
                </Text>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </React.Fragment>
  );
};

export default ResetPasswordPage;

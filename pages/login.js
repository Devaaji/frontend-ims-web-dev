import React from 'react';

import { NextSeo } from 'next-seo';
import NextLink from 'next/link';

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { loginSchema } from '../utils/schema/AuthenticationSchema';
import PindadLogo from '../components/core/pindadlogo';

const LoginPage = () => {
  const { isOpen: isPasswordOpen, onToggle: onPasswordToggle } =
    useDisclosure();

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <React.Fragment>
      <NextSeo title="Login" titleTemplate="%s | IMS" />
      <Flex
        flexDirection="column"
        w="100wh"
        h="100vh"
        justifyContent="center"
        align="center"
      >
        <Stack
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          flexDir="column"
          mb="4"
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
            <Stack spacing="6">
              <Center>
                <PindadLogo multiplySize={1.5} />
              </Center>
              <Box>
                <Text fontSize="2xl" fontWeight="semibold">
                  Login
                </Text>
              </Box>
              <FormControl
                id="email"
                isInvalid={!!formState.errors?.email}
                errortext={formState.errors?.email?.message}
              >
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Mohon masukkan Email Anda"
                  {...register('email')}
                />
                <FormErrorMessage fontSize="xs">
                  {formState.errors?.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isInvalid={!!formState.errors?.password}
                errortext={formState.errors?.password?.message}
              >
                <Box>
                  <FormLabel>Kata Sandi</FormLabel>
                </Box>
                <InputGroup>
                  <Input
                    placeholder="Mohon isi kata sandi Anda"
                    type={isPasswordOpen ? 'text' : 'password'}
                    {...register('password')}
                  />
                  <InputRightElement>
                    <IconButton
                      bg="transparent"
                      _hover={{ bg: 'transparent' }}
                      variant="ghost"
                      color="ims-linebox"
                      aria-label={
                        isPasswordOpen ? 'Mask password' : 'Reveal password'
                      }
                      icon={
                        isPasswordOpen ? (
                          <BsFillEyeFill />
                        ) : (
                          <BsFillEyeSlashFill />
                        )
                      }
                      onClick={onPasswordToggle}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage fontSize="xs">
                  {formState.errors?.password?.message}
                </FormErrorMessage>
              </FormControl>
              <Box textAlign="end">
                <NextLink href="/reset-password" passHref>
                  <Link color="vocasia-main" size="button-bold" textAlign="end">
                    Lupa Password?
                  </Link>
                </NextLink>
              </Box>
              <Button
                type="submit"
                bg="ims-primary"
                color="white"
                _hover={{ bg: 'button-hover' }}
                fontWeight="bold"
              >
                Masuk
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </React.Fragment>
  );
};

export default LoginPage;

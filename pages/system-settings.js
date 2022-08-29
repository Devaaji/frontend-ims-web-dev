import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import Head from 'next/head';
import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import FilterTesting from '../components/filter/FilterTesting';
import useRemoteTestingData from '../components/hooks/remote/useRemoteTesting';
import useAxios from '../components/hooks/useAxios';

const SystemSettings = () => {
  const { data: newDataTesting, isLoading } = useRemoteTestingData();

  const matchMutate = useMutation();

  const { register, handleSubmit } = useForm();

  const [, executePutTesting] = useAxios(
    {
      url: '/posts/1',
      method: 'DELETE',
    },
    { manual: true }
  );

  const onSubmit = async (data) => {
    const requestPayload = {
      title: data.title,
    };

    console.log('Tesss', requestPayload);
    await executePutTesting({ data: requestPayload });
    matchMutate.mutate(console.log('success data'));
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <VStack align="stretch" py="6" px="4" spacing="6">
        <Head>
          <title>Checks Items | IMS</title>
        </Head>
        <FilterTesting newData={newDataTesting} />
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          border="1px solid black"
        >
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input type="text" name="title" {...register('title')} />
            <Button type="submit">Buat</Button>
          </FormControl>
        </Box>
        {newDataTesting?.data?.map((item, i) => (
          <Box key={i}>
            <Box>{item.title}</Box>
          </Box>
        ))}
      </VStack>
    </>
  );
};

SystemSettings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default SystemSettings;

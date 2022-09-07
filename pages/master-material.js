import {
  Box,
  Center,
  HStack,
  Spacer,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';
import { useMemo } from 'react';
import Select from '../components/core/select';
import { generateEntryOptions } from '../components/core/select/helper/entryOptions';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import DashboardPagination from '../components/dashboard/DashboardPagination';
import FilterMaterialMaster from '../components/filter/filterMasterMaterial';
import useRemoteMasterMaterial from '../components/hooks/remote/useRemoteMasterMaterial';
import { getServerSidePropsWithAuth } from '../utils/getServerSidePropsWithAuth';
import { TableToNameItems as TableToName } from '../utils/tables/TableToNameItems';

const MasterMaterial = () => {
  const showEntryOptions = useMemo(() => generateEntryOptions(), []);
  const [dataLimit, setDataLimit] = useState(5);

  const {
    data: dataMasterMaterial,
    isLoading: isLoadingMasterMaterial,
    isFetching: isFetchingMasterMaterial,
  } = useRemoteMasterMaterial(dataLimit);

  return (
    <>
      <VStack
        align="stretch"
        py="6"
        px={{ base: '4', md: '4', lg: '8' }}
        spacing="6"
      >
        <Head>
          <title>Master Material | IMS</title>
        </Head>
        <HStack borderBottomWidth="1px" pb="6">
          <Text fontWeight="semibold" color="ims-primary" size="title-medium">
            Master Material
          </Text>
          <Spacer />
        </HStack>
        <FilterMaterialMaster data={dataMasterMaterial} />
        {dataMasterMaterial?.data.map((item, index) => (
          <Box
            key={index}
            bg="white"
            rounded="md"
            transitionDuration="200ms"
            _hover={{
              bg: '#FDFDFD',
              boxShadow: 'md',
              cursor: 'pointer',
            }}
            p="4"
            shadow="sm"
            align="stretch"
          >
            <HStack
              rounded="md"
              w="full"
              align="flex-start"
              overflow="auto"
              pb="4"
            >
              <Box w="max" align="stretch">
                <TableToName
                  tableName="Code"
                  item={item.master_material_code}
                />
                <TableToName
                  tableName="Type Code"
                  item={item.master_material_type_code}
                />
                <TableToName
                  tableName="Group Code"
                  item={item.master_material_group_code}
                />
                <TableToName tableName="UOM Code" item={item.master_uom_code} />
                <TableToName tableName="Description" item={item.description} />
              </Box>
              {/*  5-10 */}
            </HStack>
          </Box>
        ))}
        {isLoadingMasterMaterial && (
          <Center>
            <Spinner />
          </Center>
        )}
        <HStack borderTopWidth="1px" py="2">
          <Text>Show</Text>
          <Select
            isSearchable={false}
            options={showEntryOptions}
            defaultValue={showEntryOptions[0]}
            onChange={(option) => setDataLimit(option.value)}
          />
          <Text>Entries</Text>
          <Spacer />
          <DashboardPagination
            current={1}
            total={100}
            onPageClick={() => onPageClick()}
          />
        </HStack>
      </VStack>
    </>
  );
};

MasterMaterial.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export const getServerSideProps = getServerSidePropsWithAuth;

export default MasterMaterial;

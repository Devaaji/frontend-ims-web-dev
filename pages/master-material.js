import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import useAxios from '../components/hooks/useAxios';

const MasterMaterial = () => {
  const [isLoading, listMasterMaterial] = useAxios(
    {
      url: '/material/list',
      method: 'POST',
    },
    { manual: true }
  );

  const ListMasterMaterial = async () => {
    const getData = await listMasterMaterial({
      data: {
        limit: 30,
        page: 1,
        order: 'master_material_code',
        sort: 'ASC',
      },
    });
    console.log('List Material', getData);
  };

  useEffect(() => {
    ListMasterMaterial();
  }, []);

  return (
    <>
      <Button onClick={ListMasterMaterial}>POST</Button>
      <div>Material Master</div>
    </>
  );
};

MasterMaterial.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default MasterMaterial;

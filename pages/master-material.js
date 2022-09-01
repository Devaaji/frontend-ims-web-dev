import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const MasterMaterial = () => {
  return (
    <>
      <div>Material Master</div>
    </>
  );
};

MasterMaterial.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default MasterMaterial;

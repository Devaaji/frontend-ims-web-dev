import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const DashboardCheckItems = () => {
  return <div>DashboardCheckItems</div>;
};

DashboardCheckItems.getLayout = (page) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default DashboardCheckItems;

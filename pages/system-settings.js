import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const SystemSettings = () => {
  return <div>SystemSettings</div>;
};

SystemSettings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default SystemSettings;

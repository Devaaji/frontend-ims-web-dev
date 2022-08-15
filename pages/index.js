import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const Home = () => {
  return <React.Fragment>Home Dashboard</React.Fragment>;
};

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Home;

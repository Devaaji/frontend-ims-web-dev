import { useRouter } from 'next/router';
import React from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const ProfileUserPage = () => {
  const { pathname } = useRouter();

  const isActive = pathname === '/profile';

  console.log('isActive', isActive);

  return <div>Profile User</div>;
};

ProfileUserPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ProfileUserPage;

import { BiBook, BiHome } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

function generateSidebarItemsAdmin() {
  return [
    { name: 'Dashboard', path: '/', icon: BiHome },
    { name: 'Check Items', path: '/check-items', icon: BiBook },
    {
      name: 'Pengaturan',
      path: '/',
      icon: FiSettings,
      sub: [
        {
          name: 'Pengaturan Sistem',
          path: '/system-settings',
        },
        {
          name: 'Pengaturan Website',
          path: '/frontend-settings',
        },
        {
          name: 'Pengaturan Bahasa',
          path: '/manage-language',
        },
        {
          name: 'Pengaturan Tema',
          path: '/theme-settings',
        },
        {
          name: 'Aplikasi Mobile',
          path: '/mobile-app',
        },
      ],
    },
  ];
}

export default generateSidebarItemsAdmin;

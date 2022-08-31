import { BiBook, BiHome } from 'react-icons/bi';
import { FaToolbox } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

function generateSidebarItemsAdmin() {
  return [
    { name: 'Dashboard', path: '/', icon: BiHome },
    { name: 'Check Items', path: '/check-items', icon: BiBook },
    { name: 'Tools Book', path: '/tools-book', icon: FaToolbox },
    {
      name: 'Pengaturan',
      path: '/',
      icon: FiSettings,
      sub: [
        {
          name: 'Management Menu',
          path: '/menu-settings',
        },
        {
          name: 'Pengaturan Sistem',
          path: '/system-settings',
        },
      ],
    },
  ];
}

export default generateSidebarItemsAdmin;

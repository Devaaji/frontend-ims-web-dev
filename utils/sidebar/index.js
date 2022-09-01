import { BiBook, BiHome, BiPurchaseTagAlt } from 'react-icons/bi';
import { FaToolbox } from 'react-icons/fa';
import { FiBox, FiSettings } from 'react-icons/fi';
import { MdTableView } from 'react-icons/md';

function generateSidebarItemsAdmin() {
  return [
    { name: 'Dashboard', path: '/', icon: BiHome },
    { name: 'Master Material', path: '/master-material', icon: MdTableView },
    {
      name: 'Material Stock',
      path: '/',
      icon: FiBox,
      sub: [
        {
          name: 'Transaction Material Stock',
          path: '/menu-settings',
        },
        {
          name: 'Master Material Batch',
          path: '/menu-settings',
        },
        {
          name: 'Master Vendor',
          path: '/menu-settings',
        },
      ],
    },
    {
      name: 'Purchase Order',
      path: '/',
      icon: BiPurchaseTagAlt,
      sub: [
        {
          name: 'PO Header',
          path: '/menu-settings',
        },
        {
          name: 'PO Item',
          path: '/menu-settings',
        },
        {
          name: 'PO Component',
          path: '/menu-settings',
        },
        {
          name: 'PO Assignment',
          path: '/menu-settings',
        },
      ],
    },
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

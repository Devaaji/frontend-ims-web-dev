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
          path: '/material-stock',
        },
        {
          name: 'Master Material Batch',
          path: '/material-batch',
        },
        {
          name: 'Master Vendor',
          path: '/master-vendor',
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
          path: '/po-header',
        },
        {
          name: 'PO Item',
          path: '/po-item',
        },
        {
          name: 'PO Component',
          path: '/po-component',
        },
        {
          name: 'PO Assignment',
          path: '/po-assignment',
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

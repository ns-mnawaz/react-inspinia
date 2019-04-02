/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid

export default {
  menu: [
    { id: '1', path: '/app/home', icon: 'home', label: 'Home', parent: '0' },
    { id: '2', path: '', icon: 'building-o', label: 'General', parent: '0' },
    { id: '3', path: '/app/page1', icon: 'refresh', label: 'Page 1', parent: '2' },
    { id: '4', path: '/app/permissions', icon: 'lock', label: 'Permissions', parent: '2' },
    { id: '5', path: '', icon: 'building-o', label: 'General 2', parent: '0' },
    { id: '6', path: '/app/page1', icon: 'building-o', label: 'Page 1', parent: '5' },
    { id: '7', path: '/app/page1', icon: 'building-o', label: 'Page 1 1', parent: '6' },
    { id: '8', path: '/app/page2', icon: 'building-o', label: 'Page 1 2', parent: '6' },
    { id: '9', path: '/app/page1', icon: 'building-o', label: 'Page 2', parent: '5' }
  ],
  navMenu: [
    { path: '/app/profile', label: 'Profile' },
    { path: '/app/contact', label: 'Contacts' },
    { path: '/app/mail', label: 'Mailbox' },
    { divider: true },
    { path: '/login', label: 'Logout' }
  ]
};

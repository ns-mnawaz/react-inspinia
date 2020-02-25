
export default {
  menu: [
    { id: '1', path: '/app/home', icon: 'home', label: 'Home', parent: '0' },
    { id: '2', path: '', icon: 'envelope', label: 'Mailbox', parent: '0' },
    { id: '3', path: '/app/inbox', icon: 'inbox', label: 'Inbox', parent: '2' },
    { id: '7', path: '/app/compose', icon: 'at', label: 'Compose', parent: '2' },
    { id: '4', path: '/app/permissions', icon: 'lock', label: 'Permissions', parent: '6' },
    { id: '5', path: '/app/contacts', icon: 'address-book', label: 'Contacts', parent: '6' },
    { id: '6', path: '', icon: 'pie-chart', label: 'User', parent: '0' },
    { id: '7', path: '/app/profile', icon: 'user', label: 'Profile', parent: '6' }
  ],
  navMenu: [
    { path: '/app/profile', label: 'Profile' },
    { path: '/app/contacts', label: 'Contacts' },
    { path: '/app/inbox', label: 'Mailbox' },
    { divider: true },
    { path: '/login', label: 'Logout' }
  ]
};

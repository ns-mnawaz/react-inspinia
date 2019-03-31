/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
export default {
  'menu': [
    {
      'path': '/app/home',
      'icon': 'home',
      'label': 'Home'
    },
    {
      'path': '',
      'icon': 'building-o',
      'label': 'General',
      'tree': [
        {
          'path': '/app/page1',
          'icon': 'refresh',
          'label': 'Page 1'
        },
        {
          'path': '/app/page2',
          'icon': 'refresh',
          'label': 'Page 2'
        }
      ]
    },
    {
      'path': '',
      'icon': 'building-o',
      'label': 'General 2',
      'tree': [
        {
          'path': '/app/page1',
          'icon': 'building-o',
          'label': 'Page 1',
          'tree': [
            {
              'path': '/app/page1',
              'icon': 'refresh',
              'label': 'Page 1'
            }
          ]
        }
      ]
    }
  ],
  'navMenu': [
    {
      'path': '/app/profile',
      'label': 'Profile'
    },
    {
      'path': '/app/contact',
      'label': 'Contacts'
    },
    {
      'path': '/app/mail',
      'label': 'Mailbox'
    },
    {
      'divider': true
    },
    {
      'path': '/login',
      'label': 'Logout'
    }
  ]
};

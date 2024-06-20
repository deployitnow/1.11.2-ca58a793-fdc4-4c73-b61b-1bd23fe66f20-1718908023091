export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Company',
    links: [
      { href: '/', title: 'Home' },
      { href: '/all-articles', title: 'Blog' },
    ],
  },
  {
    columnName: 'Product',
    links: [
      { href: '/dashboard', title: 'Dashboard' },
      { href: '/pricing', title: 'Pricing' },
    ],
  },
  {
    columnName: 'Docs',
    links: [{ href: '/changelog', title: 'Changelog' }],
  },
  {
    columnName: 'Support',
    links: [
      { href: '#support', title: 'Support' },
      { href: '/terms', title: 'Terms of Service' },
      { href: '/privacy', title: 'Privacy Policy' },
    ],
  },
];

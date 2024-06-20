import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: "25'000 Account",
    id: 'tier-1',
    href: '/choose-plan-25',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$59', '2': '$590' },
    description:
      'We accept: Credit Card (stripe), Crypto (USDT,BTC,ETC), and other payment methods.',
    features: [
      'Challenge passed within 1-5 working days  upon request',
      'I use Private VPS for every customer (no issues with IP)',
      '24/7 Support',
      'Risk Free Gurantee!',
      'Only Metatrader 4 supported!!!',
    ],
    featured: false,
    highlighted: false,
    cta: 'Choose plan',
  },
  {
    name: "50'000 Account",
    id: 'tier-2',
    href: '/choose-plan-50',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$99', '2': '$990' },
    description:
      'We accept: Credit Card (stripe), Crypto (USDT,BTC,ETC), and other payment methods.',
    features: [
      'Challenge passed within 1-5 working days  upon request',
      'I use Private VPS for every customer (no issues with IP)',
      '24/7 Support',
      'Risk Free Gurantee!',
      'Only Metatrader 4 supported!!!',
    ],
    featured: false,
    highlighted: true,
    cta: 'Choose plan',
    soldOut: false,
  },
  {
    name: "100'000 Account",
    id: 'tier-3',
    href: '/contact-us-100',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$149', '2': '$1490' },
    description:
      'We accept: Credit Card (stripe), Crypto (USDT,BTC,ETC), and other payment methods.',
    features: [
      'Challenge passed within 1-5 working days  upon request',
      'I use Private VPS for every customer (no issues with IP)',
      '24/7 Support',
      'Risk Free Gurantee!',
      'Only Metatrader 4 supported!!!',
    ],
    featured: true,
    highlighted: false,
    cta: 'Choose plan',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: '7b240999-3735-42aa-9948-7895060cc3a7',
    value: '1',
    label: 'HFT',
    priceSuffix: '/per account',
  },
  {
    id: 'dbbe3b14-0915-4b2e-ad5d-0f03baf53b85',
    value: '2',
    label: 'Non-HFT',
    priceSuffix: '/per account',
  },
];

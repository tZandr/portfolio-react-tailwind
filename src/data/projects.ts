export type Project = {
  name: string;
  description: string;
  url: string;
  display: string;
  image?: string;
  tags?: string[];
  placeholder?: boolean;
};

export const clientProjects: Project[] = [
  {
    name: 'Scentique',
    description:
      'E-commerce store for a fragrance brand. Built and deployed as a live customer project.',
    url: 'https://scentique.se',
    display: 'scentique.se',
    image: '/src/assets/Scentique.webp',
    tags: ['Shopify'],
  },
  {
    name: 'Barber by David',
    description:
      'Booking and presentation site for a barber studio. Live customer project.',
    url: 'https://www.barberbydavid.com',
    display: 'barberbydavid.com',
    tags: ['WIX'],
  },
];

export const personalProjects: Project[] = [
  {
    name: 'Coming soon',
    description: 'Currently in progress.',
    url: '#',
    display: '',
    placeholder: true,
  },
  {
    name: 'Coming soon',
    description: 'Currently in progress.',
    url: '#',
    display: '',
    placeholder: true,
  },
  {
    name: 'Coming soon',
    description: 'Currently in progress.',
    url: '#',
    display: '',
    placeholder: true,
  },
];

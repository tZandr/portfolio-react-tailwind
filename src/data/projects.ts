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
    image: '/src/assets/scentique-pv.jpg',
    tags: ['Shopify'],
  },
  {
    name: 'Barber by David',
    description:
      'Booking and presentation site for a barber studio. Live customer project.',
    url: 'https://www.barberbydavid.com',
    display: 'barberbydavid.com',
    image: '/src/assets/barberbydavid-pv.jpg',
    tags: ['WIX'],
  },
];

export const personalProjects: Project[] = [
  {
    name: 'Hyrule Compendium',
    description:
      'A searchable Breath of the Wild compendium built with vanilla JS. Heavy focus on custom styling and API integration.',
    url: 'https://github.com/tZandr/Hyrule-Compendium-App',
    display: 'github.com/tZandr',
    image: '/src/assets/HyruleCompendium.jpg',
    tags: ['JS', 'CSS', 'API'],
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

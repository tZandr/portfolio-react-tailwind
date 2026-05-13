export type Project = {
  name: string;
  description: string;
  url: string;
  display: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: 'Scentique',
    description: 'E-commerce store for a fragrance brand. Built and deployed as a live customer project.',
    url: 'https://scentique.se',
    display: 'scentique.se',
    image: '/src/assets/Scentique.webp',
  },
  {
    name: 'Barber by David',
    description: 'Booking and presentation site for a barber studio. Live customer project.',
    url: 'https://www.barberbydavid.com',
    display: 'barberbydavid.com',
  },
];

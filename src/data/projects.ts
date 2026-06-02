import scentiquePv from '../assets/scentique-pv.jpg';
import barberPv from '../assets/barberbydavid-pv.jpg';
import hyrulePv from '../assets/HyruleCompendium.jpg';
import plantsitePv from '../assets/PlantDB.jpg';
import recipeAppPv from '../assets/recipe-app.jpg';

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
    image: scentiquePv,
    tags: ['Shopify'],
  },
  {
    name: 'Barber by David',
    description:
      'Booking and presentation site for a barber studio. Live customer project.',
    url: 'https://www.barberbydavid.com',
    display: 'barberbydavid.com',
    image: barberPv,
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
    image: hyrulePv,
    tags: ['JS', 'CSS', 'API'],
  },
  {
    name: 'Plantsite',
    description:
      'Fullstack team project for managing plant care. Node/Express REST API, MySQL + MongoDB, JWT auth, and a React frontend.',
    url: 'https://github.com/tZandr/Plantsite',
    display: 'github.com/tZandr',
    image: plantsitePv,
    tags: ['React', 'Node', 'MySQL', 'MongoDB'],
  },
  {
    name: 'Recipe App',
    description:
      'Recipe browser with full CRUD built in React 19 and TypeScript. Pulls from the DummyJSON API with search and category filtering.',
    url: 'https://github.com/tZandr/recipe-app',
    image: recipeAppPv,
    display: 'github.com/tZandr',
    tags: ['React', 'TypeScript', 'API'],
  },
];

import type { StaticImageData } from 'next/image'

import imgKristinaFourer from '../../public/project1.png'
import imgLyon from '../../public/project2.png'
// import imgMakeYourOwn from '../../public/makeyourown.png'
// import imgPortfolio from '../../public/portfolio.png'
// import img1stop from '../../public/1stop.png'
// import imgPinkpharma from '../../public/pinkpharma.png'
// import imgKelioniuIntelektas from '../../public/kelioniuintelektas.png'
// import imgCrossSellPms from '../../public/cross-sell-pms.png'
// import imgPacman from '../../public/pacman.png'
// import imgMusicPlayer from '../../public/music-player.png'
// import imgShellsmate from '../../public/shellsmate.png'
// import imgTaxManager from '../../public/tax-manager.png'

export type ProjectCategory = 'designed+built' | 'e-commerce' | 'the-lab'

export type Project = {
  id: string
  title: string
  subtitle: string
  role: string
  stack: string[]
  category: ProjectCategory
  filepath: string
  url: string
  href?: string
  image?: StaticImageData
  version: string
  status: 'live' | 'wip'
}

export const projects: Project[] = [
  // designed+built
  {
    id: 'kristina-fourer',
    title: 'kristinafourer.com',
    subtitle: 'a personal blog with a voice of its own',
    role: 'design + development — end to end',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'designed+built',
    filepath: '~/projects/designed+built/kristina-fourer.tsx',
    url: 'kristinafourer.com',
    href: 'https://kristinafourer.com',
    image: imgKristinaFourer,
    version: 'v1.0.0',
    status: 'live',
  },
  {
    id: 'trainwithlyon',
    title: 'trainwithlyon.com',
    subtitle: 'personal trainer — bookings, plans, community',
    role: 'design + development — end to end',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'designed+built',
    filepath: '~/projects/designed+built/trainwithlyon.tsx',
    url: 'trainwithlyon.com',
    href: 'https://trainwithlyon.com',
    image: imgLyon,
    version: 'v1.0.0',
    status: 'live',
  },
  {
    id: 'portfolio',
    title: 'shellyfourer.dev',
    subtitle: 'this portfolio — every pixel intentional',
    role: 'design + development — end to end',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    category: 'designed+built',
    filepath: '~/projects/designed+built/portfolio.tsx',
    url: 'shellyfourer.dev',
    // image: imgPortfolio,
    version: 'v2.0.0',

    status: 'live',
  },

  // e-commerce
  {
    id: 'makeyourown',
    title: 'makeyourown.se',
    subtitle: 'custom apparel — design implemented, store launched',
    role: 'shopify development @ roket.lt',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    category: 'e-commerce',
    filepath: '~/projects/e-commerce/makeyourown.tsx',
    url: 'makeyourown.se',
    href: 'https://makeyourown.se/',
    // image: imgMakeYourOwn,
    version: 'v1.0.0',
    status: 'live',
  },
  {
    id: '1stop',
    title: '1stop.lt',
    subtitle: 'full Shopify rebuild — replacing legacy site',
    role: 'shopify development @ roket.lt',
    stack: ['Shopify', 'Liquid', 'JavaScript'],
    category: 'e-commerce',
    filepath: '~/projects/e-commerce/1stop.tsx',
    url: '1stop.lt',
    href: 'https://1stop.lt',
    // image: img1stop,
    version: 'v2.0.0-wip',
    status: 'wip',
  },
  {
    id: 'pinkpharma',
    title: 'pinkpharma.lt',
    subtitle: 'new landing page + custom Excel-to-menu WordPress plugin',
    role: 'wordpress development @ roket.lt',
    stack: ['WordPress', 'PHP', 'Custom Plugin'],
    category: 'e-commerce',
    filepath: '~/projects/e-commerce/pinkpharma.php',
    url: 'pinkpharma.lt',
    href: 'https://pinkpharma.lt/',
    // image: imgPinkpharma,
    version: 'v2.0.0-wip',
    status: 'wip',
  },
  {
    id: 'kelioniuintelektas',
    title: 'kelioniuintelektas.lt',
    subtitle: 'group travel platform for curated trips',
    role: 'wordpress development @ roket.lt',
    stack: ['WordPress', 'PHP', 'JavaScript'],
    category: 'e-commerce',
    filepath: '~/projects/e-commerce/kelioniuintelektas.php',
    url: 'kelioniuintelektas.lt',
    href: 'https://kelioniuintelektas.lt/',
    // image: imgKelioniuIntelektas,
    version: 'v1.0.0-wip',
    status: 'wip',
  },
  {
    id: 'cross-sell-pms',
    title: 'cross-sell pms',
    subtitle: 'property management system with cross-sell automation',
    role: 'design + development — end to end',
    stack: ['Next.js', 'TypeScript', 'Spring Boot', 'Java'],
    category: 'designed+built',
    filepath: '~/projects/designed+built/cross-sell-pms.tsx',
    url: 'github.com/shellyfourer/cross-sell-pms',
    href: 'https://github.com/shellyfourer/cross-sell-pms',
    // image: imgCrossSellPms,
    version: 'v1.0.0',
    status: 'live',
  },
  {
    id: 'confidential',
    title: 'confidential',
    subtitle: 'custom website — details withheld',
    role: 'development @ roket.lt',
    stack: ['Next.js', 'TypeScript', 'NestJS'],
    category: 'e-commerce',
    filepath: '~/projects/e-commerce/confidential.tsx',
    url: '',
    version: 'v1.0.0-wip',
    status: 'wip',
  },

  // the-lab
  {
    id: 'pacman-clone',
    title: 'pacman clone',
    subtitle: 'arcade classic rebuilt from scratch in C++',
    role: 'solo project — improving',
    stack: ['C++', 'SFML'],
    category: 'the-lab',
    filepath: '~/projects/the-lab/pacman.cpp',
    url: 'github.com/shellyfourer/pacman-clone',
    href: 'https://github.com/shellyfourer/pacman-clone',
    // image: imgPacman,
    version: 'v0.2',
    status: 'wip',
  },
  {
    id: 'music-player',
    title: 'music player',
    subtitle: 'a browser audio player built from scratch',
    role: 'solo project — improving',
    stack: ['C++', 'SFML'],
    category: 'the-lab',
    filepath: '~/projects/the-lab/player.cpp',
    url: 'github.com/shellyfourer/music-player',
    href: 'https://github.com/shellyfourer/music-player',
    // image: imgMusicPlayer,
    version: 'v0.3',
    status: 'wip',
  },
  {
    id: 'shellsmate',
    title: 'shellsmate',
    subtitle: 'shell companion — early stages',
    role: 'solo project',
    stack: ['C++', 'SFML'],
    category: 'the-lab',
    filepath: '~/projects/the-lab/shellsmate.cpp',
    url: '',
    // image: imgShellsmate,
    version: 'v0.1',
    status: 'wip',
  },
  {
    id: 'tax-manager',
    title: 'tax manager',
    subtitle: 'freelance income + tax tracker — full-stack',
    role: 'design + development — end to end',
    stack: ['Java', 'Spring Boot', 'Next.js', 'TypeScript'],
    category: 'designed+built',
    filepath: '~/projects/designed+built/TaxManager.java',
    url: 'github.com/shellyfourer/Freelance-Work-Tax-Manager',
    href: 'https://github.com/shellyfourer/Freelance-Work-Tax-Manager',
    // image: imgTaxManager,
    version: 'v0.1',
    status: 'wip',
  },
]
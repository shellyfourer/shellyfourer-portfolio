import type { StaticImageData } from 'next/image'

import imgKristinaFourer from '../../public/project1.png'
import imgLyon from '../../public/project2.png'
import imgPortfolio from '../../public/project3.png'
import imgMakeYourOwn from '../../public/project4.png'
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
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Resend'],
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
    subtitle: 'elite corporate personal trainer in London',
    role: 'design + photoshoot + development — end to end',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Resend', 'Instagram API'],
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
    title: 'shellyfourer.com',
    subtitle: 'this portfolio — every pixel intentional',
    role: 'design + development — end to end',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    category: 'designed+built',
    filepath: '~/projects/designed+built/portfolio.tsx',
    url: 'shellyfourer.com',
    image: imgPortfolio,
    version: 'v2.0.0',
    status: 'live',
  },
  {
    id: 'cross-sell-pms',
    title: 'cross-sell pms',
    subtitle: 'property management system with cross-sell automation',
    role: 'design + development — end to end',
    stack: ['Next.js', 'TypeScript', 'Spring Boot', 'Java 21', 'MySQL', 'Docker', 'JUnit 5'],
    category: 'designed+built',
    filepath: '~/projects/designed+built/cross-sell-pms.tsx',
    url: 'github.com/shellyfourer/cross-sell-pms',
    href: 'https://github.com/shellyfourer/cross-sell-pms',
    // image: imgCrossSellPms,
    version: 'v2.0.0-wip',
    status: 'wip',
  },
  {
    id: 'tax-manager',
    title: 'freelance tax manager',
    subtitle: 'real-time tax calculator for Lithuanian freelancers — multi-country planned',
    role: 'design + development — end to end',
    stack: [
      'Next.js',
      'TypeScript',
      'Spring Boot',
      'Java 21',
      'PostgreSQL',
      'Google OAuth 2.0',
      'Docker',
      'GitLab CI',
    ],
    category: 'designed+built',
    filepath: '~/projects/designed+built/tax-manager.tsx',
    url: 'github.com/shellyfourer/Freelance-Work-Tax-Manager',
    href: 'https://github.com/shellyfourer/Freelance-Work-Tax-Manager',
    // image: imgTaxManager,
    version: 'v2.0.0-wip',
    status: 'wip',
  },

  // e-commerce
  {
    id: 'makeyourown',
    title: 'makeyourown.se',
    subtitle: 'full Shopify rebuild — replacing legacy site',
    role: 'shopify development @ roket.lt',
    stack: ['Liquid', 'JavaScript', 'CSS'],
    category: 'e-commerce',
    filepath: '~/projects/e-commerce/makeyourown.liquid',
    url: 'makeyourown.se',
    href: 'https://makeyourown.se/',
    image: imgMakeYourOwn,
    version: 'v2.0.0',
    status: 'live',
  },
  {
    id: '1stop',
    title: '1stop.lt',
    subtitle: 'full Shopify rebuild — replacing legacy site',
    role: 'shopify development @ roket.lt',
    stack: ['Liquid', 'JavaScript', 'CSS'],
    category: 'e-commerce',
    filepath: '~/projects/e-commerce/1stop.liquid',
    url: 'wip @ roket.lt',
    // image: img1stop,
    version: 'v2.0.0-wip',
    status: 'wip',
  },
  {
    id: 'pinkpharma',
    title: 'pinkpharma.lt',
    subtitle: 'new landing page + custom Excel-to-menu WordPress plugin',
    role: 'wordpress development @ roket.lt',
    stack: ['WordPress', 'PHP', 'Elementor', 'JavaScript', 'CSS'],
    category: 'e-commerce',
    filepath: '~/projects/e-commerce/pinkpharma.php',
    url: 'wip @ roket.lt',
    // image: imgPinkpharma,
    version: 'v2.0.0-wip',
    status: 'wip',
  },
  {
    id: 'kelioniuintelektas',
    title: 'kelioniuintelektas.lt',
    subtitle: 'travel platform for curated trips — transitioning from iframe',
    role: 'wordpress development @ roket.lt',
    stack: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'APIs'],
    category: 'e-commerce',
    filepath: '~/projects/e-commerce/kelioniuintelektas.php',
    url: 'wip @ roket.lt',
    // image: imgKelioniuIntelektas,
    version: 'v2.0.0-wip',
    status: 'wip',
  },
  {
    id: 'confidential',
    title: 'confidential',
    subtitle: 'custom website — details withheld',
    role: 'development @ roket.lt',
    stack: ['Next.js', 'TypeScript', 'NestJS'],
    category: 'e-commerce',
    filepath: '~/projects/e-commerce/confidential.tsx',
    url: '[redacted]',
    version: 'v1.0.0-wip',
    status: 'wip',
  },

  // the-lab
  {
    id: 'pacman-clone',
    title: 'pacman clone',
    subtitle: 'multi-map arcade classic — ghost AI, achievements, store, leaderboard, bonus fruits',
    role: 'solo project — improving',
    stack: ['C++', 'SFML', 'CMake'],
    category: 'the-lab',
    filepath: '~/projects/the-lab/pacman.cpp',
    url: 'github.com/pratybos/project-shellyfourer',
    href: 'https://github.com/pratybos/project-shellyfourer',
    // image: imgPacman,
    version: 'v2.0.0',
    status: 'wip',
  },
  {
    id: 'music-player',
    title: 'music player',
    subtitle:
      'desktop audio player — shuffle, repeat, metadata, abstract backend for future API streaming',
    role: 'solo project — improving',
    stack: ['C++', 'SFML', 'CMake'],
    category: 'the-lab',
    filepath: '~/projects/the-lab/player.cpp',
    url: 'github.com/shellyfourer/music-player',
    href: 'https://github.com/shellyfourer/music-player',
    // image: imgMusicPlayer,
    version: 'v2.0.0',
    status: 'wip',
  },
  {
    id: 'shellsmate',
    title: 'shellsmate',
    subtitle: 'desktop companion — early stages',
    role: 'solo project',
    stack: ['C++', 'SFML', 'CMake'],
    category: 'the-lab',
    filepath: '~/projects/the-lab/shellsmate.cpp',
    url: '~/projects/shellsmate',
    // image: imgShellsmate,
    version: 'v0.1',
    status: 'wip',
  },
]

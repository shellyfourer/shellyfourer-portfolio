import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import type { IconType } from 'react-icons'

export type Social = {
  key: string
  label: string
  handle: string
  href: string
  Icon: IconType
  ariaLabel: string
}

export const socials: Social[] = [
  {
    key: 'email',
    label: 'email',
    handle: 'byshellyfourer@gmail.com',
    href: 'mailto:byshellyfourer@gmail.com',
    Icon: FaEnvelope,
    ariaLabel: 'Email',
  },
  {
    key: 'github',
    label: 'github',
    handle: '@shellyfourer',
    href: 'https://github.com/shellyfourer',
    Icon: FaGithub,
    ariaLabel: 'GitHub',
  },
  {
    key: 'linkedin',
    label: 'linkedin',
    handle: 'in/shellyfourer',
    href: 'https://linkedin.com/in/shellyfourer',
    Icon: FaLinkedin,
    ariaLabel: 'LinkedIn',
  },
  {
    key: 'instagram',
    label: 'instagram',
    handle: '@byshellyfourer',
    href: 'https://instagram.com/byshellyfourer',
    Icon: FaInstagram,
    ariaLabel: 'Instagram',
  },
]

{
  /* Socials without email — for icon-only sidebars (e.g. hero) */
}
export const socialLinks = socials.filter((s) => s.key !== 'email')

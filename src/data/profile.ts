/**
 * DULS — portfolio identity.
 * Contact details and social links will be added once confirmed.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Duls',
  firstName: 'Duls',
  handle: 'Independent creative support studio',
  role: 'Virtual Assistance · Social Media · Operations',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'Duls portfolio',
  email: 'you@example.com',
  location: 'Philippines · GMT+8',
  stats: [
    { value: '4', label: 'Support areas', Icon: Briefcase },
    { value: 'Remote', label: 'Work setup', Icon: SealCheck },
    { value: 'GMT+8', label: 'Time zone', Icon: Clock },
  ],
  displayName: { line1: 'Your unsolicited', line2: 'solution.' },
  hero: {
    body: 'Duls brings thoughtful, hands-on support to the people and processes behind a growing business — from content and admin to research, recruitment, and the everyday details that keep work moving.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Duls brand mark placeholder',
  },
  socials: [],
}

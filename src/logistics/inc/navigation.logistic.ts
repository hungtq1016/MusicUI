import { HomeIcon, MusicalNoteIcon, Square3Stack3DIcon } from '@heroicons/vue/24/outline'

export const navigation = [
    { name: 'navigation.dashboard', to: '/', icon: HomeIcon },
    { name: 'navigation.audio', to: '/audios', icon: MusicalNoteIcon },
    { name: 'navigation.album', to: '/albums', icon: Square3Stack3DIcon },
  ]

export const userNavigation = [
    { name: 'oauth2.profile', href: '#' },
]

import type { FooterColumn, SocialLink } from '~/types'

export const footerColumns: FooterColumn[] = [
  {
    title: 'Tienda',
    links: [
      { label: 'Cuidado Facial', to: '#' },
      { label: 'Cápsulas Capilares', to: '#' },
      { label: 'Vitaminas de Belleza', to: '#' },
      { label: 'Paquetes y Rituales', to: '#' },
      { label: 'Novedades', to: '#' },
    ],
  },
  {
    title: 'Marca',
    links: [
      { label: 'Nuestra Historia', to: '#' },
      { label: 'La Ciencia', to: '#' },
      { label: 'Sostenibilidad', to: '#' },
      { label: 'Prensa', to: '#' },
      { label: 'Carreras', to: '#' },
    ],
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Centro de Ayuda', to: '#' },
      { label: 'Envíos y Devoluciones', to: '#' },
      { label: 'Recomienda a un Amigo', to: '#' },
      { label: 'Contacto', to: '#' },
      { label: 'Encuentra tu Rutina', to: '#' },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  { platform: 'instagram', url: '#', label: 'Instagram' },
  { platform: 'tiktok', url: '#', label: 'TikTok' },
  { platform: 'pinterest', url: '#', label: 'Pinterest' },
  { platform: 'youtube', url: '#', label: 'YouTube' },
]

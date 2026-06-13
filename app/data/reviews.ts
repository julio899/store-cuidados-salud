import type { ReviewItem } from '~/types'

export const reviews: ReviewItem[] = [
  {
    id: '1',
    author: 'Maya R.',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Tres semanas después y mi piel parece que dormí ocho horas y me hice un facial. Estoy obsesionada.',
    productName: 'The Glow Serum',
    verified: true,
  },
  {
    id: '2',
    author: 'Jasmine T.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Las cápsulas capilares realmente funcionaron. Noté menos caída en un mes — es la primera vez que me pasa.',
    productName: 'Hair·Skin·Nails',
    verified: true,
  },
  {
    id: '3',
    author: 'Priya L.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'Se siente como una verdadera rutina de lujo — pero sin complicaciones. Tres productos, y ya. Mi barrera cutánea nunca ha estado más feliz.',
    productName: 'El Ritual de 3 Pasos',
    verified: true,
  },
]

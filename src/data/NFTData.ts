import { CardImg1, CardImg2, CardImg3, CardImg4, CardImg5, CardImg6 } from './images';

export interface NFTProps {
  id: string | number;
  title: string;
  artist: string;
  image: string;
  price: string;
  timeAgo: string;
  avatars?: string[];
}

export const NFTData: NFTProps[] = [
  {
    id: 1,
    title: 'Colorful Heaven',
    artist: 'Mark Benjamin',
    image: CardImg1,
    price: '1.30 ETH',
    timeAgo: '30s',
  },
  {
    id: 2,
    title: 'Abstract Colors',
    artist: 'Esthera Jackson',
    image: CardImg2,
    price: '0.91 ETH',
    timeAgo: '58s',
  },
  {
    id: 3,
    title: 'ETH AI Brain',
    artist: 'Nick Wilson',
    image: CardImg3,
    price: '2.82 ETH',
    timeAgo: '12m',
  },
  {
    id: 4,
    title: 'Swipe Circles',
    artist: 'Peter Will',
    image: CardImg4,
    price: '2.30 ETH',
    timeAgo: '15m',
  },
  {
    id: 5,
    title: 'Mesh Gradients',
    artist: 'Will Smith',
    image: CardImg5,
    price: '0.56 ETH',
    timeAgo: '20m',
  },
  {
    id: 6,
    title: '3D Cubes Art',
    artist: 'Manny Gates',
    image: CardImg6,
    price: '6.58 ETH',
    timeAgo: '35m',
  },
];

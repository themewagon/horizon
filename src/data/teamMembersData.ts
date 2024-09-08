import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5 } from './images';

export interface TeamMemberProps {
  id: number | string;
  name: string;
  role: string;
  avatar: string;
}

export const teamMembersData: TeamMemberProps[] = [
  {
    id: 1,
    name: 'Jason Statham',
    role: 'Web Developer',
    avatar: Avatar1,
  },
  {
    id: 2,
    name: 'Christian Mad',
    role: 'Product Designer',
    avatar: Avatar2,
  },
  {
    id: 3,
    name: 'Tom Holland',
    role: 'Content Creator',
    avatar: Avatar3,
  },
  {
    id: 4,
    name: 'Michael B. Jordan',
    role: 'Marketing Specialist',
    avatar: Avatar4,
  },
  {
    id: 5,
    name: 'Robert Pattinson',
    role: 'Motion Designer',
    avatar: Avatar5,
  },
];

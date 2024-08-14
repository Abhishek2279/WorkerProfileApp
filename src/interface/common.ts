import {CarouselItem} from '../types/common';

export interface WorkerProfile {
  id: string;
  name: string;
  country: string;
  profileImage: string;
}

export interface HeaderProps {
  categories: CarouselItem[];
  search: string;
  setSearch: () => void;
  selected: string;
  setSelected: () => void;
}

export interface CarouselProps {
  categories: CarouselItem[];
  selected: string;
  setSelected: () => void;
}

export interface WorkerProfile {
  id: string;
  name: string;
  country: string;
  profileImage: string;
}

export interface WorkerProfileGridProps {
  profiles: WorkerProfile[];
}

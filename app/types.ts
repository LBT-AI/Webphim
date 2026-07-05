export interface User {
  id: string;
  username: string;
  email: string;
  role?: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration?: string;
  views?: number;
  likes?: number;
  tags?: string[];
  isPremium?: boolean;
}
